import React from 'react';
import './App.scss';
import source from './images/made_by_kris10cabrera.png'
import { useMediaQuery } from 'react-responsive'

function App() {
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 800px)' });

  return (
    <>
      <div className="intro">
        <h1>
          cards I've collected from my subway rides in <span className="no-br">New York City</span>
        </h1>

        <h2 className="mobile-frame">{isBigScreen ? 'it’s always more fun on a computer. scroll to party' : 'this is probably more fun on a computer'}</h2>
        <a href="https://kristencabrera.com/"><img className="source" src={source} alt="Made by kris10cabrera alongside a collage with an NYC trash bag, the statue of liberty, and a slice of pizza." /></a>
      </div>
      <div className="card-wrapper">

        {isBigScreen ? (
          <>
            <img src="images/bowie_front.png" alt="Limited edition David Bowie MTA card" className="mobile-subway-card" />
            <img src="images/bowie_back.png" alt="Limited edition David Bowie MTA card" className="mobile-subway-card" />
            <img src="images/bowie_front.png" alt="Limited edition David Bowie MTA card" className="mobile-subway-card invert" />
            <img src="images/bowie_back.png" alt="Limited edition David Bowie MTA card" className="mobile-subway-card invert" />
            <img src="images/metrocard_front.png" alt="Front of MTA card" className="mobile-subway-card" />
            <img src="images/airport_back.png" alt="Back of MTA card" className="mobile-subway-card" />
            <img src="images/metrocard_front.png" alt="Front of MTA card" className="mobile-subway-card invert" />
            <img src="images/airport_back.png" alt="Back of MTA card" className="mobile-subway-card invert" />
            <img src="images/port_front.png" alt="Front of MTA card" className="mobile-subway-card" />
            <img src="images/port_back.png" alt="Back of MTA card" className="mobile-subway-card" />
            <img src="images/port_front.png" alt="Front of MTA card" className="mobile-subway-card invert" />
            <img src="images/port_back.png" alt="Back of MTA card" className="mobile-subway-card invert" />
          </>
        ) :
          <>
            <img src="images/bowie_front.png" alt="Limited edition David Bowie MTA card" className="mobile-subway-card" />
            <img src="images/bowie_back.png" alt="Limited edition David Bowie MTA card" className="mobile-subway-card invert" />
            <img src="images/metrocard_front.png" alt="Front of MTA card" className="mobile-subway-card" />
            <img src="images/airport_back.png" alt="Back of MTA card" className="mobile-subway-card" />
            <img src="images/port_front.png" alt="Front of MTA card" className="mobile-subway-card" />
            <img src="images/port_back.png" alt="Back of MTA card" className="mobile-subway-card" />
            <img src="images/metrocard_back.png" alt="Front of MTA card" className="mobile-subway-card invert" />
            <img src="images/bowie_front.png" alt="Limited edition David Bowie MTA card" className="mobile-subway-card invert" />
            <img src="images/bowie_back.png" alt="Limited edition David Bowie MTA card" className="mobile-subway-card" />
            <img src="images/airport_back.png" alt="Back of MTA card" className="mobile-subway-card invert" />
            <img src="images/metrocard_back.png" alt="Front of MTA card" className="mobile-subway-card" />
            <img src="images/port_back.png" alt="Back of MTA card" className="mobile-subway-card invert" />
          </>}
      </div>
    </>
  );
}


export default App;
