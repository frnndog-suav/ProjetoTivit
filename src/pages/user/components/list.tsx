import type { IPurchase } from "@features/user-info";
import { formatCurrency } from "@global/functions/format-currency";

interface IProps {
  purchases: IPurchase[];
}

export function List({ purchases }: IProps) {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Compras</h2>

      {purchases.map((purchase) => (
        <ul key={purchase.id}>
          <li className="flex gap-5">
            <span className="font-medium">{purchase.item}</span>
            <span className="text-green-600 font-bold">
              {formatCurrency(purchase.price)}
            </span>
          </li>
        </ul>
      ))}
    </>
  );
}
