import React from "react";
import { useStateValue } from "./StateProvider";
import Login from "./Login";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import "./App.css";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    // BEM naming convention App = app
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
