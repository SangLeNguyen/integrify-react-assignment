import Home from './components/Home';
import Details from './components/Details';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:id" component={Details} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
