import React, { useState } from "react";
import API from "../api";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.post("/contacts", form)
      .then(() => {
        alert("Message submitted successfully!");
        setForm({ name: "", phone: "", message: "" });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-lg rounded p-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border p-2 mb-4"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          className="w-full border p-2 mb-4"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border p-2 mb-4"
          rows="4"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
