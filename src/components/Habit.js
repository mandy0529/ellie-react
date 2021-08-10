import React, {Component} from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 30px;
  display: flex;
  align-items: center;
`;
const Count = styled.span`
  margin: 0 8px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 3px solid black;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: -50px;
  margin-left: -20px;
`;
const Button = styled.button`
  all: unset;
  margin: 0 10px;
  padding: 10px;
  font-size: 30px;
  transition: all 300ms ease-in;
  &:hover {
    transform: scale(1.2);
    color: teal;
  }
`;
class Habit extends Component {
  state = {
    count: 0,
  };
  handlePlus = (event) => {
    console.log(event, '무야호');
    this.setState({count: this.state.count + 1});
  };
  handleMinus = () => {
    const count = this.state.count - 1;
    this.setState({count: count < 0 ? 0 : count});
  };
  render() {
    return (
      <Div>
        <h1>Reading</h1>
        <Count>{this.state.count}</Count>
        <Button onClick={this.handlePlus}>
          <i className="fas fa-plus-square"></i>
        </Button>
        <Button onClick={this.handleMinus}>
          <i className="fas fa-minus-square"></i>
        </Button>
        <Button>
          <i className="far fa-trash-alt"></i>
        </Button>
      </Div>
    );
  }
}

export default Habit;
