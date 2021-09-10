import React from "react";

export type AppErrorLayoutProps = {
  children: React.ReactNode;
};

export default function AppErrorLayout({ children }: AppErrorLayoutProps) {
  return (
    <>
      <h1>AppErrorLayout</h1>

      {children}
    </>
  );
}
