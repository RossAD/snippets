import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ComponentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };
  
  // Life Cycle Methods
  // Mounting operatiions
  componentWillMount(){
  };
  
  componentDidMount(){
  };

  // Updating operations
  componentWillReceiveProps(){
  };

  componentShouldUpdate(){
    // Will not trigger render() if returns false
  };

  componentWillUpdate(){
  };

  componentDidUpdate(){
  };

  // Unmounting Operations
  componentWillUnmount(){
  };

  render(){
    return(
      <div></div>
    )
  }
};

ComponentName.propTypes = {
};

export default ComponentName;
