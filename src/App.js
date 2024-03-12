import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import './App.css'; // Import your CSS file
import Card from './Card'; // Import the Card component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route
import Contact from './Contact'; // Import the Contact component

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
          <Navbar />
          <div className="container">
            <h1 className="animated">
              Chronicles of Ethiria
            </h1>
            <div className="globe">
              <img src="/globe.gif" alt="" />
            </div>
            <div className="card-container">
              {this.state.cardContainer}
            </div>
            <button id="draw-card" onClick={this.drawRandomCards}>
              Explore Cards
            </button>
            <footer>&copy; 2023-2024 asearer</footer>
          </div>
          {/* Define route for the Contact component */}
          <Routes>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      
    );
  }
}

export default CardExplorer;
