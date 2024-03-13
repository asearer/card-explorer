import React from 'react';
import './App.css'; // Import the main CSS file for styling

const EthiriaComponent = () => {
  return (
    <div className="page-container">
      <div className="content">
        <h1>Ethiria </h1>
        <h2>Background</h2>
        <p>Ethiria is a mythical realm filled with magic and wonder. It is home to various races, including elves, dwarves, and humans, who coexist in a fragile balance.</p>
        <h2>Characters</h2>
        <p>Meet some of the key characters in Ethiria:</p>
        <ul>
          <li>Elara Silverleaf - Elven princess and skilled archer</li>
          <li>Thorin Stonehammer - Dwarven warrior and master blacksmith</li>
          <li>Alistair Dawnbringer - Human mage and guardian of the arcane</li>
        </ul>
        <h2>Lore</h2>
        <p>The lore of Ethiria is rich and complex, filled with tales of heroism, betrayal, and ancient prophecies. From the rise and fall of kingdoms to epic battles between good and evil, the history of Ethiria is intertwined with the destinies of its inhabitants.</p>
        {/* Additional sections or details about Ethiria's background, characters, and lore can be added as needed */}
      </div>
    </div>
  );
};

export default EthiriaComponent;
