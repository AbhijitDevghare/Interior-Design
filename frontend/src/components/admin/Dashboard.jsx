import React, { useEffect, useState } from "react";
import API from "../../api";

const Dashboard = () => {
  const [stats, setStats] = useState({ categories: 0, designs: 0, services: 0, contacts: 0 });

  useEffect(() => {
    Promise.all([
      API.get("/categories"),
      API.get("/designs"),
      API.get("/services"),
      API.get("/contacts"),
    ])
      .then(([cat, des, ser, con]) => {
        setStats({
          categories: cat.data.length,
          designs: des.data.length,
          services: ser.data.length,
          contacts: con.data.length,
        });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-indigo-600 text-white rounded p-6 text-center">
          <h3 className="text-xl font-bold">Categories</h3>
          <p className="text-2xl">{stats.categories}</p>
        </div>
        <div className="bg-green-600 text-white rounded p-6 text-center">
          <h3 className="text-xl font-bold">Designs</h3>
          <p className="text-2xl">{stats.designs}</p>
        </div>
        <div className="bg-yellow-600 text-white rounded p-6 text-center">
          <h3 className="text-xl font-bold">Services</h3>
          <p className="text-2xl">{stats.services}</p>
        </div>
        <div className="bg-red-600 text-white rounded p-6 text-center">
          <h3 className="text-xl font-bold">Contacts</h3>
          <p className="text-2xl">{stats.contacts}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
