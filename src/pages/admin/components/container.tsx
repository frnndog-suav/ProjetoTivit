import { ErrorScenario } from "./error-scenario";
import { LoadingScenario } from "./loading-scenario";

interface IProps {
  isError: boolean;
  isLoading: boolean;
  children: React.ReactNode;
  onRetry: () => Promise<void>;
}

export function Container({ children, isError, isLoading, onRetry }: IProps) {
  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center p-4 antialiased">
      <div className="bg-white w-full max-w-2xl p-10 rounded-4xl shadow-2xl shadow-slate-200/60 border border-slate-100 transition-all duration-500">
        <LoadingScenario show={isLoading} />

        <ErrorScenario onRetry={onRetry} show={isError && !isLoading} />

        {!isLoading && !isError && children}
      </div>
    </div>
  );
}
