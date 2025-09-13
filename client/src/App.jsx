import React, { useState } from "react";
import LoadingScreen from "./pages/LoadingScreen";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/NavBar";

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative min-h-screen">
      {!loaded ? (
        <LoadingScreen onComplete={() => setLoaded(true)} />
      ) : (
        <>
          <Navbar />
          <LandingPage />
        </>
      )}
    </div>
  );
}

export default App;
