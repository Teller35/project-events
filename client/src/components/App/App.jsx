import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { setContext } from "@apollo/client/link/context";
import "./App.css";

import Nav from "../Nav";
import Home from "../../pages/Home";
import LandingPage from "../../pages/LandingPage";
import Footer from "../Footer/Footer";
//import Profile from "../../pages/Profile"

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "http://localhost:3001/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/" component={LandingPage}></Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
