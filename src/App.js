import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// component
import Header from "./Components/Layout/Header";
import Contacts from "./Components/Contacts/Contacts";
import About from "./Components/Pages/About";
import AddContact from "./Components/Contacts/AddContact";
import EditContact from "./Components/Contacts/EditContact";
import NotFound from "./Components/Pages/NotFound";

// state
import { Provider } from "./context";
// styles
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
