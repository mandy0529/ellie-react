import React, {Component} from 'react';

class Minji extends Component {
  handleClick = (event) => {
    console.log(event);
  };
  render() {
    return <RealBtn title={'hleoo'} handleClick={this.handleClick}></RealBtn>;
  }
}

const RealBtn = ({handleClick}) => {
  return (
    <button onClick={handleClick} title="minji">
      버튼
    </button>
  );
};

export default Minji;
