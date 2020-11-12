import React from 'react';
import Pokemon from "./Pokemon";


class PokeList extends React.Component {
  render() {
    const datas = this.props.data.map((index) => {
      return (
        <li className="list" key={index.id}>
          <Pokemon url={index.url} name={index.name} type={index.types} />
        </li>
      );
    });
    return <ul className="classList">{datas}</ul>;
  }
}

export default PokeList;