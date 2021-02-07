import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Namvibar from './Components/Navibar';
import { Home } from './Home';
import { About } from './About';
import { Users } from './Users';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Namvibar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
        </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;
