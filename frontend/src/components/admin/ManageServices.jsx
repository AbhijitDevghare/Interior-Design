import React, { useEffect, useState } from "react";
import API from "../../api";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", icon: "" });

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = () => {
    API.get("/services").then((res) => setServices(res.data)).catch(console.error);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    API.post("/services", form)
      .then(() => {
        setForm({ title: "", description: "", icon: "" });
        fetchServices();
      })
      .catch(console.error);
  };

  const deleteService = (id) => {
    API.delete(`/services/${id}`).then(fetchServices).catch(console.error);
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Manage Services</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="border p-2"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="border p-2"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="icon"
          placeholder="Icon (e.g., 🛋️)"
          className="border p-2"
          value={form.icon}
          onChange={handleChange}
        />
        <button className="bg-indigo-600 text-white px-4 py-2 rounded col-span-3">Add Service</button>
      </form>

      <ul className="space-y-4">
        {services.map((s) => (
          <li key={s._id} className="flex justify-between items-center border p-2 rounded">
            <span>{s.icon || "✨"} {s.title} - {s.description}</span>
            <button
              onClick={() => deleteService(s._id)}
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageServices;
