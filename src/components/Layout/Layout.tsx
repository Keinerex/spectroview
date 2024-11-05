import { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <main className="flex flex-col items-center justify-center h-full gap-16 mt-20">
        {children}
      </main>
    </>
  );
};