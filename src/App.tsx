import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "./components/Button";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hoge">
          <Link to="">go to top</Link>
        </Route>
        <Route path="/">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <Button onClick={() => alert("押された")}>押す</Button>
          </header>
          <Link to="hoge">go to hoge</Link>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
