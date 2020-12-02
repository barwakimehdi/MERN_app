import "./App.css";
import PersonList from "./components/PersonList";
import { Link, Route, Switch } from "react-router-dom";
import Add from "./components/Add";
import { Button } from "semantic-ui-react";
import { toggleFalse } from "./JS/actions/edit";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Workshop MERN</h2>
      <Link to="/add">
        <Button
          inverted
          color="blue"
          content="Blue"
          onClick={() => dispatch(toggleFalse())}
        >
          Add Person
        </Button>
      </Link>
      <Link to="/">
        <Button inverted color="blue" content="Blue">
          Person List
        </Button>
      </Link>
      <Switch>
        <Route exact path="/" component={PersonList} />
        <Route path={["/add", "/edit/:id"]} component={Add} />
      </Switch>
    </div>
  );
}

export default App;
