import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import CreateItinerary from "./pages/CreateItinerary";
import PlanTrip from "./pages/PlanTrip";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateItinerary />} />
		<Route path="/plan" element={<PlanTrip />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
