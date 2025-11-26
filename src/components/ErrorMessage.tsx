import type { PropsWithChildren } from "react";

export function ErrorMessage({ children }: PropsWithChildren) {
  return (
    <div className="p-2 bg-red-500 text-center">
      <p className="text-white font-bold">{children}</p>
    </div>
  );
};