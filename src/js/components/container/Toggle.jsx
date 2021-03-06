import React from "react";
import PropTypes from 'prop-types';

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: false};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render() {
      return (
        <button
          onClick={this.handleClick}
          className={this.state.isToggleOn ? 'switch-on' : 'switch-off'}
          id={this.props.light_num}
        >
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
}

Toggle.propTypes = {
  id: PropTypes.string
}

export default Toggle;