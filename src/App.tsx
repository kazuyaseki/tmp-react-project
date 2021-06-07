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
          <Link to="hoge">go to hoge</Link>
          <Button onClick={() => alert("fuga")}>hoge</Button>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
