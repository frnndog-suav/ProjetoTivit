import { useAuthenticationStoreData } from "@stores/authentication";

export default function InitialPage() {
  const { accessToken } = useAuthenticationStoreData();

  return (
    <div className="flex flex-col">
      <h1>InitialPage</h1>
      <p>Access token: {accessToken}</p>
    </div>
  );
}
