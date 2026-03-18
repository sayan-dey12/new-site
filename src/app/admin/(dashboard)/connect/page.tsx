type Contact = {
  _id: string;
  email: string;
  source: string;
  ip: string;
  userAgent: string;
  createdAt: string;
};

export default async function ContactsPage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/admin/contacts`, {
    cache: "no-store",
    });

  const result = await res.json();
  const contacts : Contact[] = result?.data || [];

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

          <tbody className="bg-card">
            {contacts.map((c : Contact) => (
              <tr key={c._id} className="border-t">
                <td className="p-3">{c.email}</td>
                <td className="p-3">{c.source}</td>
                <td className="p-3 text-xs">{c.ip}</td>
                <td className="p-3 text-xs truncate max-w-50">
                    <div className="max-w-75 max-h-20 overflow-auto wrap-break-word">
                        {c.userAgent}
                    </div>
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