"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

export type FontSize = "small" | "medium" | "large";

const FONT_SIZE_STORAGE_KEY = "pcred_font_size_v1";
const FONT_SIZES: FontSize[] = ["small", "medium", "large"];

interface FontSizeContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
}

const FontSizeContext = createContext<FontSizeContextType | null>(null);

function readStoredFontSize(): FontSize {
  try {
    const raw = localStorage.getItem(FONT_SIZE_STORAGE_KEY);
    if (raw && FONT_SIZES.includes(raw as FontSize)) {
      return raw as FontSize;
    }
  } catch {}

  return "medium";
}

interface FontSizeProviderProps {
  children: ReactNode;
}

export function FontSizeProvider({ children }: FontSizeProviderProps) {
  const [fontSize, setFontSizeState] = useState<FontSize>("medium");

  useEffect(() => {
    // Reads a browser-only external store (localStorage) into React state on
    // mount; deliberately deferred to an effect so the client's first render
    // matches the server's "medium" output and avoids a hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFontSizeState(readStoredFontSize());
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-font-size", fontSize);
  }, [fontSize]);

  const setFontSize = useCallback((size: FontSize) => {
    setFontSizeState(size);

    try {
      localStorage.setItem(FONT_SIZE_STORAGE_KEY, size);
    } catch {}
  }, []);

  const value = useMemo<FontSizeContextType>(
    () => ({ fontSize, setFontSize }),
    [fontSize, setFontSize]
  );

  return (
    <FontSizeContext.Provider value={value}>
      {children}
    </FontSizeContext.Provider>
  );
}

export function useFontSize(): FontSizeContextType {
  const context = useContext(FontSizeContext);

  if (!context) {
    throw new Error("useFontSize must be used within FontSizeProvider");
  }

  return context;
}
