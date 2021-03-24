import "./App.css";
import { Route, Link, NavLink, Redirect, Switch } from "react-router-dom"

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer"
import LoggedInPage from "./components/LoggedInPage/LoggedInPage"
import LoggedOutPage from "./components/LoggedOutPage/LoggedOutPage";

function App() {
  return (
    <div className="app">

      <Navigation />
      <Switch>
        <Route path="/logged" component={LoggedInPage} />

        <Route path="/" component={LoggedOutPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
