import logo from "./Logo.svg";
import "./App.css";

import Login from "./Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3 className="App-title">GYM STARS</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <Login />
      </header>
    </div>
  );
}

export default App;
