import React from "react";
import ReactDOM from "react-dom";
import Toggle from './Toggle.jsx';

class App extends React.Component {
    render() {
      return (
        <div>
          <Toggle light_num="7"/>
          <Toggle light_num="8"/>
        </div>
      );
    }
  }


ReactDOM.render(<App />,document.getElementById("app"));