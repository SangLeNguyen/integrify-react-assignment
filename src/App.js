import Home from './components/Home';
import Details from './components/Details';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/details" component={Details} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
