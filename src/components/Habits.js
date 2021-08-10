import React, {Component} from 'react';
import Habit from './Habit';

class Habits extends Component {
  state = {
    habits: [
      {name: 'Reading', count: 0},
      {name: 'Eating', count: 0},
      {namne: 'Exercising', count: 0},
    ],
  };
  render() {
    const {habits} = this.state;
    return (
      <ul>
        {habits.map((habit) => (
          <Habit />
        ))}
      </ul>
    );
  }
}

export default Habits;
