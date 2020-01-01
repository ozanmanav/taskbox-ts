// src/App.js

import React from "react";
import { Provider } from "react-redux";
import store from "./lib/redux";

import InboxScreen from "./components/InboxScreen";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
};

export default App;
