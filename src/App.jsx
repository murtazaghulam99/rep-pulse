import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Footer,
  Hero,
  HowItWorks,
  KeyPositions,
  MustHireRole,
  Navbar,
  OneStepAhead,
  OurRoles,
  PassionFueled,
  ReadyToHire,
  Services,
} from "./components";
import Announcement from "./components/Announcement";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <HowItWorks />
          <OurRoles />
          <KeyPositions />
          <PassionFueled />
          <MustHireRole />
          <Announcement />
          <ReadyToHire />
          <OneStepAhead />
          <Services />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
