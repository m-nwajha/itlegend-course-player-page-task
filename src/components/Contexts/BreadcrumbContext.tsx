"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type HistoryItem = { name: string; url?: string };

type BreadcrumbData = {
  title: string;
  history: HistoryItem[];
};

type BreadcrumbContextType = {
  data: BreadcrumbData;
  setBreadcrumb: (data: BreadcrumbData) => void;
};

const initialData: BreadcrumbData = {
  title: "",
  history: [],
};

const BreadcrumbContext = createContext<BreadcrumbContextType | null>(null);

export const BreadcrumbProvider = ({ children }: { children: ReactNode }) => {
  const [breadcrumbData, setBreadcrumbData] =
    useState<BreadcrumbData>(initialData);

  return (
    <BreadcrumbContext.Provider
      value={{ data: breadcrumbData, setBreadcrumb: setBreadcrumbData }}
    >
      {children}
    </BreadcrumbContext.Provider>
  );
};

export const useBreadcrumb = () => {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error("useBreadcrumb must be used within a BreadcrumbProvider");
  }
  return context;
};
