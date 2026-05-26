import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

function ensureDomAnchors() {
  if (!document.getElementById('favicon')) {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.id = 'favicon';
    link.href = '';
    document.head.appendChild(link);
  }
  if (!document.getElementById('portal')) {
    const portal = document.createElement('div');
    portal.id = 'portal';
    document.body.appendChild(portal);
  }
}

function injectEmbedStyles(sidebarOffset: number) {
  const id = 'mf-cw-embed-styles';
  const existing = document.getElementById(id) as HTMLStyleElement | null;
  // La barre d'action ode-explorer utilise les classes Bootstrap 5 "position-fixed bottom-0 start-0 end-0"
  const css = `.position-fixed.bottom-0.start-0 { left: ${sidebarOffset}px !important; }`;
  if (existing) {
    existing.textContent = css;
  } else {
    const style = document.createElement('style');
    style.id = id;
    style.textContent = css;
    document.head.appendChild(style);
  }
}

const mountedContainers = new WeakSet<HTMLElement>();

export function mount(
  container: HTMLElement,
  props: { basename?: string; headless?: boolean; sidebarOffset?: number } = {},
): () => void {
  if (mountedContainers.has(container)) {
    return () => {};
  }
  ensureDomAnchors();
  if (props.headless && props.sidebarOffset !== undefined) {
    injectEmbedStyles(props.sidebarOffset);
  }
  mountedContainers.add(container);
  const root = createRoot(container);
  root.render(React.createElement(App, props));
  return () => {
    mountedContainers.delete(container);
    root.unmount();
  };
}
