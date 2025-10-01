import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Dashboard from "./components/admin/Dashboard";
import ManageCategories from "./components/admin/ManageCategories";
import ManageDesigns from "./components/admin/ManageDesigns";
import ManageServices from "./components/admin/ManageServices";
import ViewContacts from "./components/admin/ViewContacts";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/categories" element={<ManageCategories />} />
            <Route path="/admin/designs" element={<ManageDesigns />} />
            <Route path="/admin/services" element={<ManageServices />} />
            <Route path="/admin/contacts" element={<ViewContacts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
