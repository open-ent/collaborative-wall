import { createContext, useContext } from 'react';

interface EmbedContextValue {
  headless: boolean;
}

export const EmbedContext = createContext<EmbedContextValue>({
  headless: false,
});

export function useEmbed() {
  return useContext(EmbedContext);
}
