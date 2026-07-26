import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Upload from "./pages/Upload";
import Dashboard from "./pages/Dashboard";
import Itinerary from "./pages/Itinerary";
import Packing from "./pages/Packing";
import Map from "./pages/Map";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <Routes>

        <Route path="/upload" element={<Upload />} />
        
        <Route path="/" element={<Dashboard />} />

        <Route path="/itinerary" element={<Itinerary />} />

        <Route path="/packing" element={<Packing />} />

        <Route path="/map" element={<Map />} />

      </Routes>

    </div>
  );
}