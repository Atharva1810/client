import React from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import GuestProvider from "./context/guestContext/GuestProvider";
// GuestState -> GuestProvider
function App() {
  return (
    <GuestProvider>
      <div>
        <Navbar />
        <Home />
      </div>
    </GuestProvider>
  );
}

export default App;
