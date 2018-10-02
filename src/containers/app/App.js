import React, { Component } from "react";
import "./App.css";
import store from "../../store";
import _ from "lodash";

import Sidebar from "../../components/sidebar/Sidebar";
import Main from "../../components/main/Main";

class App extends Component {
  contacts = store.getState().contacts;

  render() {
    return (
      <div className="App">
        <Sidebar contacts={_.values(this.contacts)} />
        <Main />
      </div>
    );
  }
}

export default App;
