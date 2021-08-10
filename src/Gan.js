import React, {Component} from 'react';

class Gan extends Component {
  handleClick = (event) => {
    console.log(event, '3 evnet');
  };
  render() {
    return <RealBtn title={'hleoo'} handleClick={this.handleClick}></RealBtn>;
  }
}

class RealBtn extends React.Component {
  state = {
    number: 0,
  };
  render() {
    console.log(this.props, '1 props');
    console.log(this.state, '2 state');
    const {number} = this.state;
    return <button onClick={this.props.handleClick}>{number}</button>;
  }
}

export default Gan;
