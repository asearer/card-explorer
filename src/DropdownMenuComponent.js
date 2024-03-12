import React from 'react';
import { Link } from 'react-router-dom';
import CardExplorerComponent from './CardExplorerComponent';
import EthiriaComponent from './EthiriaComponent';
import TheUniverseComponent from './TheUniverseComponent';

const DropdownMenuComponent = () => {
  return (
    <ul className="dropdown-menu">
      <li><Link to="/about/card-explorer">Card Explorer</Link></li>
      <li><Link to="/about/ethiria">Ethiria</Link></li>
      <li><Link to="/about/the-universe">The Universe</Link></li>
    </ul>
  );
};

export default DropdownMenuComponent;
