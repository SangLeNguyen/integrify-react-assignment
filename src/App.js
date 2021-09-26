import Home from "./components/Home";
import Details from "./components/Details";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={Details} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
