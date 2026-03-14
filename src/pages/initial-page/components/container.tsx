import type React from "react";

interface IProps {
  children: React.ReactNode;
}

export function Container({ children }: IProps) {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl p-8 rounded-2xl shadow-xl">
        {children}
      </div>
    </div>
  );
}
