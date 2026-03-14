import { InitialPageView } from "./view";
import { useInitialPageViewModel } from "./view-model";

export default function InitialPage() {
  const viewModel = useInitialPageViewModel();

  return <InitialPageView {...viewModel} />;
}
