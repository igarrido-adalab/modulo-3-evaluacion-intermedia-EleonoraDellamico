import React from 'react';

class Pokemon extends React.Component {
  render() {
    const type = this.props.type.map((index) => {
      return (
        <li className="list" key={index}>
        </li>
      );
    });
    return (
      <div className="container">
        <img src={this.props.url} alt={this.props.name} className="pokemonImg" />
      </div>
    );
  }
}
export default Pokemon;



