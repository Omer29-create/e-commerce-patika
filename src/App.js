import React from "react";
import Home from "./components/Home.jsx";
import "./App.css";
import { AuthenProvider } from "./context/Auth";

const App = () => {
  return (
    <div className="App">
      <AuthenProvider>
        <Home />
      </AuthenProvider>
    </div>
  );
};

export default App;
