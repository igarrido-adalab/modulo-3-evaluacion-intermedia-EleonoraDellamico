import React from 'react';
import Pokelist from "./components/PokeList";
import './App.scss';
import dataPoke from "./data/dataPoke.json"
import PropTypes from 'prop-types';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    console.log(dataPoke);
    return (

      <div className="App">
        <h1>Mi lista de Pokemon</h1>
        <Pokelist data={dataPoke} />
      </div>
    );
  }
}

export default App;
