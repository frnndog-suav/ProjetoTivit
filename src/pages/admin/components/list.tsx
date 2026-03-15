import type { IReport } from "@features/admin-info";

interface IProps {
  reports: IReport[];
}

export function List({ reports }: IProps) {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Compras</h2>

      {reports.map((report) => (
        <ul key={report.id}>
          <li className="flex gap-5">
            <span className="font-medium">{report.title}</span>
            <span className="text-green-600 font-bold">{report.status}</span>
          </li>
        </ul>
      ))}
    </>
  );
}
