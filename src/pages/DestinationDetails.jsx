import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function DestinationDetails() {
  const { name } = useParams();

  // ✅ Destination Data
  const destinations = {
    munnar: {
      title: "Munnar",
      hero: "https://images.unsplash.com/photo-1637066742971-726bee8d9f56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVubmFyfGVufDB8fDB8fHww",
      images: [
        "https://plus.unsplash.com/premium_photo-1697730314165-2cd71dc3a6a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TXVubmFyfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1592726129893-0b0ff79c8a2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE11bm5hcnxlbnwwfHwwfHx8MA%3D%3D",
        "https://media.istockphoto.com/id/2246378481/photo/tea-harvest-at-sunrise-munnar-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=d7DvNpUzW51nGgXz697a7pfBOZytj1EtHTzYLRnqLnE=",
		"https://media.istockphoto.com/id/1140619693/photo/plantation-wanderlust.webp?a=1&b=1&s=612x612&w=0&k=20&c=_3NwEStW1mzGOk_K_8pYS87MCiXGbWj_tDxPOVlPDko=",
		"https://media.istockphoto.com/id/506921458/photo/western-ghats-mountains.webp?a=1&b=1&s=612x612&w=0&k=20&c=HiCq7apuWTmFVLg9BKcRRuCs3Jh4NgHOTgaubrtp0hs=",
      ],
      description:
        "Munnar is a breathtaking hill station in Kerala known for tea plantations and misty mountains.",
      reach: "Nearest airport: Kochi (110 km). Taxi/bus available.",
      stay: "Budget hotels, homestays, luxury resorts.",
      explore: "Tea gardens, waterfalls, national parks.",
      itinerary: [
        "Day 1: Arrival + Tea gardens",
        "Day 2: National park + sightseeing",
        "Day 3: Departure",
      ],

      food: ["Kerala meals", "Tea estate cafés", "Local street food"],
      transport: ["Taxi", "Rental cars", "Limited buses"],
      packing: ["Warm clothes", "Shoes", "Medicines"],
      tips: ["Visit Oct–Mar", "Start early", "Carry cash"],
      note: "Best experienced early morning for misty views.",
    },

    goa: {
      title: "Goa",
      hero: "https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R29hfGVufDB8fDB8fHww",
      images: [
        "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R29hfGVufDB8fDB8fHww",
        "https://plus.unsplash.com/premium_photo-1697730390320-8412ee5eae82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8R29hfGVufDB8fDB8fHww",
		"https://media.istockphoto.com/id/1290161127/photo/turning-road-in-a-middle-of-forest-of-palm-tree-exotic-location-in-goa-against-clear-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=JlLFt5xcuIsXuLebNWqZ_FgimV-oPq3gQ8mTfEFKvrM=",
		"https://images.unsplash.com/photo-1648367819123-19d2ffe43f3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fEdvYXxlbnwwfHwwfHx8MA%3D%3D",
      ],
      description:
        "Goa is India’s most popular beach destination known for nightlife and beaches.",
      reach: "Airport & rail connectivity available.",
      stay: "Beach resorts, hostels, villas.",
      explore: "Beaches, nightlife, forts.",
      itinerary: [
        "Day 1: Beach",
        "Day 2: Water sports",
        "Day 3: Shopping",
      ],

      food: ["Seafood", "Beach shacks", "Cafes"],
      transport: ["Bikes", "Taxis"],
      packing: ["Beachwear", "Sunglasses"],
      tips: ["Avoid peak crowds", "Carry sunscreen"],
      note: "Rent a bike for best experience.",
    },

    coorg: {
      title: "Coorg",
      hero: "https://media.istockphoto.com/id/1225793683/photo/mountain-gap-with-river-flowing-and-green-forests.webp?a=1&b=1&s=612x612&w=0&k=20&c=x6rPNAzN-USPyp35XIWhyUmxEYpuuGlnOnYmdh_gI5k=",
      images: [
        "https://images.unsplash.com/photo-1599922760936-e840fa373d8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29vcmd8ZW58MHx8MHx8fDA%3D",
		"https://media.istockphoto.com/id/2230257844/photo/a-tusker-at-the-dubare-elephant-camp-in-kushalnagar-madikeri-karnataka-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=-g9lCxDT4raeAgIgx6Z1G_sG6kaljR0EATdJJ79KkLc=",
		"https://media.istockphoto.com/id/2203468887/photo/coorg-welcome-sign-board-in-karnataka.webp?a=1&b=1&s=612x612&w=0&k=20&c=xYXq0UoSBSKLmMonFdZwdUA40bahJ69pJQ9D03A0kX8=",
		"https://images.unsplash.com/photo-1560357647-62a43d9897bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29vcmd8ZW58MHx8MHx8fDA%3D",
      ],
      description:
        "Coorg is a peaceful hill station known for coffee estates and greenery.",
      reach: "Nearest airport Bangalore + road trip.",
      stay: "Homestays and eco resorts.",
      explore: "Coffee estates, waterfalls.",
      itinerary: [
        "Day 1: Arrival",
        "Day 2: Sightseeing",
        "Day 3: Departure",
      ],

      food: ["Coorg cuisine", "Local cafes"],
      transport: ["Cars", "Local taxis"],
      packing: ["Light jackets", "Shoes"],
      tips: ["Visit monsoon for greenery"],
      note: "Perfect for relaxed nature trips.",
    },
	gokarna: {
	      title: "Gokarna",
	      hero: "https://media.istockphoto.com/id/590043276/photo/lonely-coast-and-sea.webp?a=1&b=1&s=612x612&w=0&k=20&c=3NmM9Miz5TNcHpLoZMoVfMkTrGPhH6vQeOV193EP_Dg=",
	      images: [
	        "https://images.unsplash.com/photo-1599922760936-e840fa373d8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29vcmd8ZW58MHx8MHx8fDA%3D",
			"https://media.istockphoto.com/id/2230257844/photo/a-tusker-at-the-dubare-elephant-camp-in-kushalnagar-madikeri-karnataka-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=-g9lCxDT4raeAgIgx6Z1G_sG6kaljR0EATdJJ79KkLc=",
			"https://media.istockphoto.com/id/2203468887/photo/coorg-welcome-sign-board-in-karnataka.webp?a=1&b=1&s=612x612&w=0&k=20&c=xYXq0UoSBSKLmMonFdZwdUA40bahJ69pJQ9D03A0kX8=",
			"https://images.unsplash.com/photo-1560357647-62a43d9897bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29vcmd8ZW58MHx8MHx8fDA%3D",
	      ],
	      description:
	        "Gokarna is a peaceful hill station known for coffee estates and greenery.",
	      reach: "Nearest airport Bangalore + road trip.",
	      stay: "Homestays and eco resorts.",
	      explore: "Coffee estates, waterfalls.",
	      itinerary: [
	        "Day 1: Arrival",
	        "Day 2: Sightseeing",
	        "Day 3: Departure",
	      ],

	      food: ["Coorg cuisine", "Local cafes"],
	      transport: ["Cars", "Local taxis"],
	      packing: ["Light jackets", "Shoes"],
	      tips: ["Visit monsoon for greenery"],
	      note: "Perfect for relaxed nature trips.",
	    },
  };

  const place = destinations[name];

  if (!place) {
    return <div className="p-6 text-center">Destination not found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen font-[Poppins]">

      <Navbar />

      {/* ✅ HERO */}
      <div className="relative h-[300px] md:h-[400px]">
        <img
          src={place.hero}
          alt={place.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl text-white font-bold">
            {place.title}
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6 space-y-12">

        {/* ✅ DESCRIPTION */}
        <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto">
          {place.description}
        </p>

        {/* ✅ IMAGES */}
        <div className="grid md:grid-cols-3 gap-4">
          {place.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="place"
              className="h-40 w-full object-cover rounded-lg shadow hover:scale-105 transition"
            />
          ))}
        </div>

        {/* ✅ BASIC INFO */}
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard icon="🚗" title="How to Reach" text={place.reach} />
          <InfoCard icon="🏨" title="Stay" text={place.stay} />
          <InfoCard icon="📍" title="Explore" text={place.explore} />
        </div>

        {/* ✅ PREMIUM SECTIONS */}
        <div className="grid md:grid-cols-2 gap-6">
          <ListCard title="🍽️ Food" items={place.food} color="from-orange-50" />
          <ListCard title="🚗 Transport" items={place.transport} color="from-blue-50" />
          <ListCard title="🎒 Packing" items={place.packing} color="from-yellow-50" />
          <ListCard title="💡 Tips" items={place.tips} color="from-green-50" />
        </div>

        {/* ✅ ITINERARY */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#0A2342]">
            📅 Sample Itinerary
          </h2>

          <div className="space-y-4">
            {place.itinerary.map((day, i) => (
              <div
                key={i}
                className="bg-white border-l-4 border-[#F7941D] p-4 rounded shadow"
              >
                {day}
              </div>
            ))}
          </div>
        </div>

        {/* ✅ NOTE */}
        <div className="bg-[#F7941D]/10 border-l-4 border-[#F7941D] p-5 rounded-xl shadow">
          <h3 className="font-semibold mb-2 text-[#0A2342]">
            ✨ CraftMyTrail Tip
          </h3>
          <p className="text-gray-700 text-sm">
            {place.note}
          </p>
        </div>

      </div>

      <Footer />
    </div>
  );
}

/* ✅ Info Card */
function InfoCard({ icon, title, text }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-[#0A2342] mb-2">
        {icon} {title}
      </h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}

/* ✅ List Card */
function ListCard({ title, items, color }) {
  return (
    <div className={`bg-gradient-to-br ${color} to-white p-5 rounded-xl shadow hover:shadow-lg transition`}>
      <h3 className="font-semibold text-[#0A2342] mb-3">
        {title}
      </h3>

      <ul className="space-y-2 text-gray-600 text-sm">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DestinationDetails;