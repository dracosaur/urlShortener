import React, {
    createContext,
    ReactNode,
    useContext,
    useReducer,
} from 'react';
import type { ShortenedUrl } from '../api/urlShortenerApi';

interface ShortenedItem extends ShortenedUrl {
  id: string;
  createdAt: string;
}

interface ShortenerState {
  items: ShortenedItem[];
}

type ShortenerAction =
  | { type: 'ADD_ITEM'; payload: ShortenedUrl };

interface ShortenerContextValue {
  items: ShortenedItem[];
  addShortenedUrl: (item: ShortenedUrl) => void;
}

const ShortenerContext = createContext<ShortenerContextValue | undefined>(
  undefined
);

const initialState: ShortenerState = {
  items: [],
};

function shortenerReducer(
  state: ShortenerState,
  action: ShortenerAction
): ShortenerState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const fullItem: ShortenedItem = {
        id: `${action.payload.alias}-${Date.now()}`,
        createdAt: new Date().toISOString(),
        ...action.payload,
      };

      return {
        ...state,
        items: [fullItem, ...state.items],
      };
    }
    default:
      return state;
  }
}

export function ShortenerProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(shortenerReducer, initialState);

  function addShortenedUrl(item: ShortenedUrl) {
    dispatch({ type: 'ADD_ITEM', payload: item });
  }

  const value: ShortenerContextValue = {
    items: state.items,
    addShortenedUrl,
  };

  return (
    <ShortenerContext.Provider value={value}>
      {children}
    </ShortenerContext.Provider>
  );
}

export function useShortener(): ShortenerContextValue {
  const ctx = useContext(ShortenerContext);
  if (!ctx) {
    throw new Error(
      'useShortener deve ser usado dentro de ShortenerProvider'
    );
  }
  return ctx;
}
