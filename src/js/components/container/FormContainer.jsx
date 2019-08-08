import React from "react";
import ReactDOM from "react-dom";
import Toggle from './Toggle.jsx';

class App extends React.Component {
    render() {
      return (
        <div>
          <Toggle />
          <Toggle />
        </div>
      );
    }
  }


ReactDOM.render(<App />,document.getElementById("app"));