import React, { useMemo, useState } from "react";

const records = [
  { id: "SRV-1042", service: "Revenue certificate", owner: "Revenue", status: "Active", updated: "2026-11-13" },
  { id: "SRV-1038", service: "Community certificate", owner: "e-Governance", status: "Active", updated: "2026-11-12" },
  { id: "SRV-1029", service: "Patta transfer", owner: "Land Records", status: "Review", updated: "2026-11-11" }
];

export default function DashboardForm() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [updatedAfter, setUpdatedAfter] = useState("");

  const filteredCount = useMemo(() => records.filter((record) => {
    const matchesQuery = record.service.toLowerCase().includes(query.toLowerCase());
    const matchesStatus = status === "all" || record.status.toLowerCase() === status;
    const matchesDate = !updatedAfter || record.updated >= updatedAfter;
    return matchesQuery && matchesStatus && matchesDate;
  }).length, [query, status, updatedAfter]);

  return (
    <form className="filter-form" onSubmit={(event) => event.preventDefault()} aria-describedby="filter-result">
      <fieldset>
        <legend>Filter service records</legend>
        <div className="form-grid">
          <div>
            <label htmlFor="service-search">Service name</label>
            <input
              id="service-search"
              name="service-search"
              type="search"
              placeholder="Search services"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="status-filter">Status</label>
            <select id="status-filter" name="status-filter" value={status} onChange={(event) => setStatus(event.target.value)}>
              <option value="all">All statuses</option>
              <option value="active">Active</option>
              <option value="review">Review</option>
            </select>
          </div>
          <div>
            <label htmlFor="updated-date">Updated after</label>
            <input
              id="updated-date"
              name="updated-date"
              type="date"
              value={updatedAfter}
              onChange={(event) => setUpdatedAfter(event.target.value)}
            />
          </div>
          <div className="form-actions">
            <button type="reset" className="button-secondary" onClick={() => {
              setQuery("");
              setStatus("all");
              setUpdatedAfter("");
            }}>Reset</button>
          </div>
        </div>
      </fieldset>
      <p id="filter-result" className="form-result" role="status" aria-live="polite">
        {filteredCount} matching {filteredCount === 1 ? "record" : "records"} in the sample data.
      </p>
    </form>
  );
}
