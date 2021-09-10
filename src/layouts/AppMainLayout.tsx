import React from "react";

export type AppMainLayoutProps = {
  children: React.ReactNode;
};

export default function AppMainLayout({ children }: AppMainLayoutProps) {
  return (
    <>
      <h1>AppMainLayout</h1>

      {children}
    </>
  );
}
