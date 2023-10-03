import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Footer, Header } from "./components";
import {
  ContactSection,
  InitialSection,
  OursProductsSection,
  WhoAreSection,
} from "./sections";

interface FadeInSectionProps {
  children: React.ReactNode;
}

export function FadeInSection(props: FadeInSectionProps) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function App() {

  return (
    <div className="App">
      <Header />
      <InitialSection id="inicio"/>
      <FadeInSection>
          <WhoAreSection id="quem_somos"/>
          <OursProductsSection id="produtos"/>
          <ContactSection id="contato"/>
      </FadeInSection>

      <Footer />
    </div>
  );
}

export default App;
