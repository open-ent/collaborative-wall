/**
 * Entrée de montage « in-layout » (CCTP 51C-2) — modèle ISOLÉ (option B), 4e module pilote.
 *
 * Collaborative-wall est une app ROUTÉE ET TEMPS RÉEL (websockets). Comme mindmap, on la monte
 * derrière un **MemoryRouter** (navigation interne isolée de l'URL de l'hôte). Bonus : le module
 * expose DÉJÀ un `EmbedContext` (`headless`) que sa route racine lit pour masquer le `<Layout>` —
 * on le fournit à `true`, sans modifier le code existant du module.
 *
 * Bundle `embed` AUTO-CONTENU (embarque son propre React 18) → aucun conflit avec le React 19 de
 * l'hôte, sans iframe.
 */
import { EdificeClientProvider, EdificeThemeProvider } from '@open-ent/react';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot, type Root } from 'react-dom/client';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { EmbedContext } from './contexts/EmbedContext';
import { routes } from './routes';
import './i18n';
import '@open-ent/bootstrap/dist/index.css';

export interface MountContext {
  embedded?: boolean;
}

const roots = new WeakMap<HTMLElement, Root>();

/**
 * En mode embarqué, neutralise le décor plein-cadre de la skin 1D peint globalement
 * sur `<html data-product data-skin>` (sinon il bave dans le layout hôte). Idempotent.
 */
function injectEmbeddedReset(): void {
  const id = 'openent-embed-reset';
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const style = document.createElement('style');
  style.id = id;
  style.textContent =
    'html[data-product][data-skin]{background-image:none!important;background-color:transparent!important}';
  document.head.appendChild(style);
}

export function mount(el: HTMLElement, ctx: MountContext = {}): void {
  const embedded = ctx.embedded ?? true;
  if (embedded) injectEmbeddedReset();
  const prev = roots.get(el);
  if (prev) prev.unmount();
  const root = createRoot(el);
  roots.set(el, root);

  // Un QueryClient dédié par montage (les routes en dépendent).
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error: unknown) => {
        if (error === '0090') window.location.replace('/auth/login');
      },
    }),
    defaultOptions: {
      queries: { retry: false, refetchOnWindowFocus: false, staleTime: 1000 * 60 * 2 },
    },
  });

  // Routeur mémoire : navigation interne isolée de l'URL de l'hôte.
  const router = createMemoryRouter(routes(queryClient), { initialEntries: ['/'] });

  root.render(
    <EmbedContext.Provider value={{ headless: embedded }}>
      <QueryClientProvider client={queryClient}>
        <EdificeClientProvider params={{ app: 'collaborativewall' }}>
          <EdificeThemeProvider>
            <RouterProvider router={router} />
          </EdificeThemeProvider>
        </EdificeClientProvider>
      </QueryClientProvider>
    </EmbedContext.Provider>,
  );
}

export function unmount(el: HTMLElement): void {
  roots.get(el)?.unmount();
  roots.delete(el);
}
