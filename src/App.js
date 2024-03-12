import React from 'react';
import './App.css'; // Import your CSS file
import Card from './Card'; // Import the Card component
import AboutComponent from './AboutComponent';
import ContactComponent from './ContactComponent'; // Import the ContactComponent

import Navbar from './Navbar'; // Import the Navbar component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route

class CardExplorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardContainer: [],
    };
    this.drawRandomCards = this.drawRandomCards.bind(this);
  }

  drawRandomCards() {
    const totalCards = 28;
    const cardsDrawn = [];
    
    while (cardsDrawn.length < 3) {
      const randomIndex = Math.floor(Math.random() * totalCards) + 1;
      const cardFilename = `card${randomIndex}.png`;

      if (!cardsDrawn.includes(cardFilename)) {
        cardsDrawn.push(cardFilename);
      }
    }

    const cardElements = cardsDrawn.map((filename, index) => (
      <Card key={index} filename={filename} />
    ));

    this.setState({ cardContainer: cardElements });
  }

  render() {
    return (
      
        <div>
          <Navbar /> {/* Render the Navbar component */}
          <Routes>
          <Route path="/about" element={<AboutComponent />} /> {/* Render AboutComponent when /about is matched */}
          <Route path="/contact" element={<ContactComponent />} /> {/* Add route for ContactComponent */}
          </Routes>
          <div className="container">
            <h1 className="animated">
              Chronicles of Ethiria
            </h1>
            <div className="globe">
              <img src="/globe.gif" alt="" />
            </div>
            <button id="draw-card" onClick={this.drawRandomCards}>
              Explore Cards
            </button>
            <div className="card-container">
              {this.state.cardContainer}
            </div>
            <footer>&copy; 2023-2024 asearer</footer>
          </div>
        </div>
      
    );
  }
}

export default CardExplorer;
