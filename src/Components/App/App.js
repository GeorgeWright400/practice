import React from "react";
import Practice from "../Practice/Practice"
import NewPage1 from "../NewPage/NewPage1";
import NewPage2 from "../NewPage/NewPage2";
import Ravenous from "../Ravenous/Ravenous";
import Appp from "../Redux/App";

import {Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

class App extends React.Component {



  render() {
    return (
      <div>
        <Router>
        <nav>
          <ul>
            <li>
              <Link to="/page1">page1</Link>
            </li>
            <li>
              <Link to="/page2">page2</Link>
            </li>
            <li>
              <Link to="/page3">DateTime and SCSS practice</Link>
            </li>
            <li>
              <Link to="/page4">Ravenous</Link>
            </li>
            <li>
              <Link to="/page5">Redux Practice</Link>
            </li>
          </ul>
        </nav>
          <div>
            <Switch>
              <Route path="/page1" exact component={NewPage1}></Route>
              <Route path="/page2" component={NewPage2}></Route>
              <Route path="/page3" exact component={Practice}></Route>
              <Route path="/page4" exact component={Ravenous}></Route>
              <Route path="/page5" exact component={Appp}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
