import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/craftmytrail.png";

function Home() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-[Poppins]">

      {/* ✅ NAVBAR */}
      <nav className="sticky top-0 bg-white shadow-md z-50">
        <div className="flex justify-between items-center px-6 py-4">

          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <h1 className="text-xl font-bold text-[#0A2342]">
              CraftMyTrail
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/destinations")}>
              Destinations
            </button>
            <button onClick={() => navigate("/itineraries")}>
              Itineraries
            </button>
            <button onClick={() => navigate("/about")}>
              About
            </button>
            <button onClick={() => navigate("/contact")}>
              Contact
            </button>

            <button
              onClick={() => navigate("/plan")}
              className="bg-[#F7941D] text-white px-4 py-2 rounded-lg"
            >
              Plan Trip
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-3 bg-white">
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/destinations")}>Destinations</button>
            <button onClick={() => navigate("/itineraries")}>Itineraries</button>
            <button onClick={() => navigate("/about")}>About</button>
            <button onClick={() => navigate("/contact")}>Contact</button>
            <button
              onClick={() => navigate("/plan")}
              className="bg-[#F7941D] text-white px-4 py-2 rounded-lg"
            >
              Plan Trip
            </button>
          </div>
        )}
      </nav>

      {/* ✅ HERO SECTION */}
      <section className="bg-gradient-to-br from-[#0A2342] via-blue-900 to-[#0A2342] text-white py-24 px-6 text-center relative overflow-hidden">

        {/* Glow background */}
        <div className="absolute w-[500px] h-[500px] bg-[#F7941D] opacity-20 rounded-full blur-3xl top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-blue-400 opacity-20 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-3xl md:text-6xl font-bold mb-6">
            Your Journey <br />
            <span className="text-[#F7941D]">
              Crafted Just For You
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-300 mb-8">
            Personalized itineraries, budget planning, and travel assistance
            across India.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button
              onClick={() => navigate("/plan")}
              className="bg-[#F7941D] px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Craft My Trip 🚀
            </button>

            <button
              onClick={() => navigate("/destinations")}
              className="border px-8 py-3 rounded-xl hover:bg-white hover:text-[#0A2342] transition"
            >
              Explore Destinations
            </button>
          </div>

          <div className="mt-8 bg-[#F7941D] inline-block px-6 py-2 rounded-full">
            🎉 Free itinerary for first 50 users!
          </div>
        </motion.div>
      </section>

      {/* ✅ FEATURED DESTINATIONS */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#0A2342] mb-10">
          Featured Destinations
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["Munnar", "Goa", "Coorg"].map((place) => (
            <div key={place} className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
              <div className="h-40 bg-gray-200 rounded mb-4" />
              <h3 className="font-semibold text-lg">{place}</h3>
              <p className="text-gray-600">Best travel experience</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ WHY CHOOSE US */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#0A2342] mb-10">
          Why Choose CraftMyTrail?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-semibold mb-2">🎯 Personalized Planning</h3>
            <p className="text-gray-600">
              Every trip is completely customized based on your preferences and budget.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-semibold mb-2">💡 Transparency</h3>
            <p className="text-gray-600">
              No hidden costs. We provide clear pricing and honest suggestions.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-semibold mb-2">🎒 Travel Freedom</h3>
            <p className="text-gray-600">
              Travel your way — solo, couple, family, or friends.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ HOW IT WORKS */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-bold mb-10 text-[#0A2342]">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 px-6">
          <div>
            <div className="text-4xl mb-2">📝</div>
            <h4>Fill Details</h4>
          </div>
          <div>
            <div className="text-4xl mb-2">⚙️</div>
            <h4>We Plan</h4>
          </div>
          <div>
            <div className="text-4xl mb-2">📩</div>
            <h4>Receive Plan</h4>
          </div>
        </div>
      </section>

      {/* ✅ CTA */}
      <section className="bg-[#0A2342] text-white text-center py-16">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Plan Your Trip?
        </h2>

        <button
          onClick={() => navigate("/plan")}
          className="bg-[#F7941D] px-8 py-3 rounded-lg"
        >
          Start Planning 🚀
        </button>
      </section>

      {/* ✅ FOOTER */}
      <footer className="text-center py-6 text-gray-500">
        © 2026 CraftMyTrail — Your Journey, Crafted Just For You
      </footer>
    </div>
  );
}

export default Home;
