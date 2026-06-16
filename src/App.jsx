import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import CreateItinerary from "./pages/CreateItinerary";
import PlanTrip from "./pages/PlanTrip";
import DestinationDetails from "./pages/DestinationDetails";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
		<ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateItinerary />} />
		<Route path="/plan" element={<PlanTrip />} />
		<Route path="/destination/:name" element={<DestinationDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
