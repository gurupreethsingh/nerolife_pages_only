import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"; // Import your Tailwind CSS styles
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Events from "./pages/Events";
import Allevents from "./pages/Allevents";
import defaultvideo from "../src/website_assets/videos/default_bg_video.mp4";
import Singleevent from "./pages/Singleevent";
import Catchliveall from "./pages/Catchliveall";
import Livenow from "./pages/Livenow";
import Previouseallshows from "./pages/Previouseallshows";
import Singlepreviouseshow from "./pages/Singlepreviousshow";
import Outlets from "./pages/Outlets";
import Outletsnighclubs from "./pages/Outletsnighclubs";
import Launges from "./pages/Launges";
import Restocafes from "./pages/Restocafes";
import Pubs from "./pages/Pubs";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover absolute top-0 left-0 z-[-1]"
        >
          <source
            src={defaultvideo} // Replace with your video file path
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <Navbar />
        <div className="container mt-5 mb-5 flex-1">
          <Routes>
            <Route path="/events" element={<Events />} />
            <Route path="/allevents" element={<Allevents />} />
            <Route path="/singleevent" element={<Singleevent />} />
            <Route path="/catchliveall" element={<Catchliveall />} />
            <Route path="/livenow" element={<Livenow />} />
            <Route path="/previouseallshows" element={<Previouseallshows />} />
            <Route path="/outletsnighclubs" element={<Outletsnighclubs />} />
            <Route path="/Launges" element={<Launges />} />
            <Route path="/outlets" element={<Outlets />} />
            <Route path="/Pubs" element={<Pubs />} />
            <Route
              path="/singlepreviouseshow"
              element={<Singlepreviouseshow />}
            />
            <Route path="/Restocafes" element={<Restocafes />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
