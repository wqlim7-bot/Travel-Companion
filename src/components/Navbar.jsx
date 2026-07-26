import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-teal-700 text-white shadow-lg">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-2xl font-bold">

          ✈ Travel Companion

        </h1>

        <div className="flex gap-6">

          <Link to="/">Dashboard</Link>

          <Link to="/itinerary">Itinerary</Link>

          <Link to="/packing">Packing</Link>

          <Link to="/map">Map</Link>

        </div>

      </div>

    </nav>
  );
}