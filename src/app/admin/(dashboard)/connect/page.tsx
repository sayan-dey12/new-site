export default async function ContactsPage() {
  const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/admin/contacts`, {
    cache: "no-store",
    });

  const result = await res.json();
  const contacts = result?.data || [];

  return (
    <div className="space-y-6">
      
      <h1 className="text-2xl font-bold">Contacts / Leads</h1>

      <div className="overflow-x-auto border rounded-xl">
        <table className="w-full text-sm">
          
          <thead className="bg-muted text-left">
            <tr>
              <th className="p-3">Email</th>
              <th className="p-3">Source</th>
              <th className="p-3">IP</th>
              <th className="p-3">Device</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((c: any) => (
              <tr key={c._id} className="border-t">
                <td className="p-3">{c.email}</td>
                <td className="p-3">{c.source}</td>
                <td className="p-3 text-xs">{c.ip}</td>
                <td className="p-3 text-xs truncate max-w-50">
                  {c.userAgent}
                </td>
                <td className="p-3">
                  {new Date(c.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}