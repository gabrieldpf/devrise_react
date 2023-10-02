import React from 'react';
import './App.css';
import { Footer, Header } from './components';
import { InitialSection, WhoAreSection } from './sections';

function App() {
  return (
    <div className="App">
      <Header />
      <InitialSection />
      <WhoAreSection />
      <Footer />
    </div>
  );
}

export default App;
