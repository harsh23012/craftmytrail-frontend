import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import CreateItinerary from "./pages/CreateItinerary";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateItinerary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
