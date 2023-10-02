import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Footer, Header } from './components';
import { InitialSection } from './sections';

function App() {
  return (
    <div className="App">
      <Header />
      <InitialSection />
      <Footer />
    </div>
  );
}

export default App;
