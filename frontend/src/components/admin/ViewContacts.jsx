import React, { useEffect, useState } from "react";
import API from "../../api";

const ViewContacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    API.get("/contacts")
      .then((res) => setContacts(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Messages</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c._id} className="hover:bg-gray-50">
              <td className="border p-2">{c.name}</td>
              <td className="border p-2">{c.phone}</td>
              <td className="border p-2">{c.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewContacts;
