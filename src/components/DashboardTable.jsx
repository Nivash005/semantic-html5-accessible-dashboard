import React from "react";

const records = [
  { id: "SRV-1042", service: "Revenue certificate", owner: "Revenue", status: "Active", updated: "2026-11-13" },
  { id: "SRV-1038", service: "Community certificate", owner: "e-Governance", status: "Active", updated: "2026-11-12" },
  { id: "SRV-1029", service: "Patta transfer", owner: "Land Records", status: "Review", updated: "2026-11-11" }
];

export default function DashboardTable() {
  return (
    <div className="table-wrapper" role="region" aria-labelledby="records-heading" tabIndex="0">
      <table>
        <caption>Recent service records</caption>
        <thead>
          <tr>
            <th scope="col">Record</th>
            <th scope="col">Service</th>
            <th scope="col">Owner</th>
            <th scope="col">Status</th>
            <th scope="col">Last updated</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <th scope="row">{record.id}</th>
              <td>{record.service}</td>
              <td>{record.owner}</td>
              <td>
                <span className={record.status === "Active" ? "status active" : "status review"}>
                  {record.status}
                </span>
              </td>
              <td><time dateTime={record.updated}>{new Date(record.updated + "T00:00:00").toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}</time></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
