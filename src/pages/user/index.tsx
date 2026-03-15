import { useUserInfo } from "@features/user-info";
import { formatCurrency } from "@global/format-currency";
import { RoleGuardWrapper } from "@routes/role-guard-wrapper";

function RootPage() {
  const { data } = useUserInfo();

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl p-8 rounded-2xl shadow-xl">
        <div className="pb-6 border-b border-gray-200 mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            {data?.message}
          </h1>
          <p className="mt-2 text-gray-600">{`${data?.data.name}, ${data?.data.email}`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Purchases</h2>

        {data?.data.purchases.map((purchase) => (
          <ul key={purchase.id}>
            <li className="flex gap-5">
              <span className="font-medium">{purchase.item}</span>
              <span className="text-green-600 font-bold">
                {formatCurrency(purchase.price)}
              </span>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default function UserPage() {
  return (
    <RoleGuardWrapper allowedRoles={["user"]}>
      <RootPage />
    </RoleGuardWrapper>
  );
}
