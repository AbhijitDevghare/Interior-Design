import React, { useEffect, useState } from "react";
import API from "../../api";

const ManageDesigns = () => {
  const [designs, setDesigns] = useState([]);
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", categoryId: "" });
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    API.get("/designs").then((res) => setDesigns(res.data)).catch(console.error);
    API.get("/categories").then((res) => setCategories(res.data)).catch(console.error);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", form.title);
    data.append("description", form.description);
    data.append("categoryId", form.categoryId);
    if (image) data.append("image", image);

    API.post("/designs", data, { headers: { "Content-Type": "multipart/form-data" } })
      .then(() => {
        setForm({ title: "", description: "", categoryId: "" });
        setImage(null);
        fetchData();
      })
      .catch(console.error);
  };

  const deleteDesign = (id) => {
    API.delete(`/designs/${id}`).then(fetchData).catch(console.error);
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Manage Designs</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
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
        <select
          name="categoryId"
          className="border p-2"
          value={form.categoryId}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          {categories.map((c) => (
            <option key={c._id} value={c._id}>{c.name}</option>
          ))}
        </select>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button className="bg-indigo-600 text-white px-4 py-2 rounded col-span-2">Add Design</button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {designs.map((d) => (
          <div key={d._id} className="border rounded shadow">
            <img src={d.imageUrl} alt={d.title} className="w-full h-48 object-cover rounded-t" />
            <div className="p-4">
              <h3 className="font-bold">{d.title}</h3>
              <p className="text-gray-600">{d.description}</p>
              <button
                onClick={() => deleteDesign(d._id)}
                className="bg-red-600 text-white px-3 py-1 mt-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageDesigns;
