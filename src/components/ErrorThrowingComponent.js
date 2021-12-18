/* eslint-disable react/destructuring-assignment */
import { Box, Button } from '@mui/material';
import { Component } from 'react';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  }

  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error('I crashed!');
    }
    return (
      <Box textAlign="center">
        <Button variant="contained" onClick={this.handleClick}>
          {this.state.counter}
        </Button>
      </Box>
    );
  }
}

export default BuggyCounter;
