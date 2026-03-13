import { LoginPageView } from "./view";
import { useLoginPageViewModel } from "./view-model";

export default function LoginPage() {
  const viewModel = useLoginPageViewModel();

  return <LoginPageView {...viewModel} />;
}
