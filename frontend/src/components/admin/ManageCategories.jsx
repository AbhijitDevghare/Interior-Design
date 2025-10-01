import React, { useEffect, useState } from "react";
import API from "../../api";

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    API.get("/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  };

  const addCategory = (e) => {
    e.preventDefault();
    API.post("/categories", { name })
      .then(() => {
        setName("");
        fetchCategories();
      })
      .catch((err) => console.error(err));
  };

  const deleteCategory = (id) => {
    API.delete(`/categories/${id}`)
      .then(fetchCategories)
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Manage Categories</h2>
      <form onSubmit={addCategory} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Category Name"
          className="border p-2 flex-grow"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button className="bg-indigo-600 text-white px-4 py-2 rounded">Add</button>
      </form>
      <ul className="space-y-2">
        {categories.map((c) => (
          <li key={c._id} className="flex justify-between items-center border p-2 rounded">
            {c.name}
            <button
              onClick={() => deleteCategory(c._id)}
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

export default ManageCategories;
