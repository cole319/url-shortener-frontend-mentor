"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import ShortenedUrlListItemType from "../types/ShortenedUrlListItemType";

interface ShortenedUrlContextType {
  urlList: ShortenedUrlListItemType[];
  addUrl: (item: ShortenedUrlListItemType) => void;
}

const ShortenedUrlContext = createContext<ShortenedUrlContextType | undefined>(
  undefined
);

export function useShortenedUrl() {
  const context = useContext(ShortenedUrlContext);
  if (!context) {
    throw new Error(
      "useShortenedUrl must be used within a ShortenedUrlProvider"
    );
  }
  return context;
}

export function ShortenedUrlProvider({ children }: { children: ReactNode }) {
  const [urlList, setUrlList] = useState<ShortenedUrlListItemType[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("shortenedUrls");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setUrlList(parsed);
        }
      } catch (err) {
        console.error("Failed to parse shortened URLs from localStorage.");
      }
    }
  }, []);

  // Save to localStorage whenever urlList changes
  useEffect(() => {
    localStorage.setItem("shortenedUrls", JSON.stringify(urlList));
  }, [urlList]);

  const addUrl = (item: ShortenedUrlListItemType) => {
    setUrlList((prev) => [item, ...prev]);
  };

  return (
    <ShortenedUrlContext.Provider value={{ urlList, addUrl }}>
      {children}
    </ShortenedUrlContext.Provider>
  );
}
