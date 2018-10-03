import React, { Component } from "react";
import "./App.css";
import store from "../../store";
import _ from "lodash";

import Sidebar from "../../components/sidebar/Sidebar";
import Main from "../../components/main/Main";

class App extends Component {
  render() {
    const { contacts, user, activeUserId } = store.getState();
    return (
      <div className="App">
        <Sidebar contacts={_.values(contacts)} />
        <Main user={user} activeUserId={activeUserId} />
      </div>
    );
  }
}

export default App;
