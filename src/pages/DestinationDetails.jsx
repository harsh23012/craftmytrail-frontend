import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function DestinationDetails() {
  const { name } = useParams();

  // ✅ Destination Data
  const destinations = {
    munnar: {
      title: "Munnar",
      hero: "https://images.unsplash.com/photo-1600210492493-0946911123ea",
      images: [
        "https://images.unsplash.com/photo-1560343090-f0409e92791a",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      ],
      description:
        "Munnar is a breathtaking hill station in Kerala known for tea plantations, misty mountains, and peaceful surroundings.",
      reach:
        "Nearest airport is Kochi (110 km). You can hire a taxi or take a bus.",
      stay:
        "Options include budget hotels, homestays, and luxury resorts.",
      explore:
        "Tea gardens, Eravikulam National Park, waterfalls, viewpoints.",
      itinerary: [
        "Day 1: Arrival + Tea gardens + Sunset point",
        "Day 2: Eravikulam Park + Waterfalls",
        "Day 3: Trek + Departure",
      ],
    },

    goa: {
      title: "Goa",
      hero: "https://images.unsplash.com/photo-1591017403286-fd8493524e1e",
      images: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
        "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
      ],
      description:
        "Goa is India’s most popular beach destination known for nightlife and beaches.",
      reach:
        "Dabolim Airport & railway connections available.",
      stay:
        "Beach resorts, hostels, luxury villas, and boutique hotels.",
      explore:
        "Beaches, water sports, nightlife, forts, cafes.",
      itinerary: [
        "Day 1: Arrival + Beach relaxation",
        "Day 2: Water sports + Nightlife",
        "Day 3: Fort visit + Shopping",
      ],
    },

    coorg: {
      title: "Coorg",
      hero: "https://images.unsplash.com/photo-1605538883669-8258e57a2cda",
      images: [
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        "https://images.unsplash.com/photo-1493244040629-496f6d136cc3",
      ],
      description:
        "Coorg is a peaceful hill station in Karnataka known for coffee plantations and greenery.",
      reach:
        "Nearest airport is Bangalore. 5–6 hour drive.",
      stay:
        "Homestays, eco-resorts, and coffee estate stays.",
      explore:
        "Abbey Falls, Raja’s Seat, coffee estates, trekking.",
      itinerary: [
        "Day 1: Arrival + Coffee estate",
        "Day 2: Waterfalls + Sightseeing",
        "Day 3: Relax + Departure",
      ],
    },
  };

  const place = destinations[name];

  if (!place) {
    return <div className="p-6 text-center">Destination not found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen  font-[Poppins]">
	{/* ✅ NAVBAR */}
	  <Navbar />
	  
      {/* ✅ HERO SECTION */}
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

      <div className="max-w-5xl mx-auto p-6">

        {/* ✅ DESCRIPTION */}
        <p className="text-gray-700 text-lg mb-8">
          {place.description}
        </p>

        {/* ✅ IMAGE GALLERY */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {place.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="gallery"
              className="h-40 w-full object-cover rounded-lg shadow"
            />
          ))}
        </div>

        {/* ✅ DETAILS */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          <div>
            <h2 className="font-semibold text-lg mb-2">
              How to Reach
            </h2>
            <p className="text-gray-600">{place.reach}</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">
              Where to Stay
            </h2>
            <p className="text-gray-600">{place.stay}</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">
              What to Explore
            </h2>
            <p className="text-gray-600">{place.explore}</p>
          </div>

        </div>

        {/* ✅ ITINERARY */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#0A2342]">
            Sample Itinerary
          </h2>

          <ul className="space-y-3">
            {place.itinerary.map((day, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded shadow"
              >
                {day}
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ CTA */}
        <div className="text-center">
          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdTstF74bgWi957hsJ6DWa_2BWpFgKD0rTtAn7awuK1kY0a7g/viewform",
                "_blank"
              )
            }
            className="bg-[#F7941D] text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600"
          >
            Get Custom Itinerary 🚀
          </button>
        </div>

      </div>
	  {/* ✅ FOOTER */}
	        <Footer />
    </div>
  );
}

export default DestinationDetails;