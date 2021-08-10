import React, {Component} from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 30px;
  display: flex;
  align-items: center;
`;
const Count = styled.span`
  margin: 0 8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid black;
  text-align: center;
  font-size: 20px;
  margin-top: -50px;
  margin-left: -20px;
`;
const Button = styled.button`
  all: unset;
  margin: 0 10px;
  padding: 10px;
  font-size: 30px;
  transition: all 300ms ease-in;
  &:first-child {
    :hover {
      color: teal;
    }
  }
`;
class Habit extends Component {
  render() {
    return (
      <Div>
        <h1>Reading</h1>
        <Count>4</Count>
        <Button>
          <i class="fas fa-plus-square"></i>
        </Button>
        <Button>
          <i class="fas fa-minus-square"></i>
        </Button>
        <Button>
          <i class="far fa-trash-alt"></i>
        </Button>
      </Div>
    );
  }
}

export default Habit;
