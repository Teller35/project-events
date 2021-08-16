import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import "./App.css";
import Nav from "../src/components/Nav/Nav";
import Home from "../src/pages/Home";
import Donate from "../src/pages/Donate";
import Support from "../src/pages/Support";
import LandingPage from "../src/pages/LandingPage";
import SingleMeeting from "../src/pages/SingleEvent";
import SearchMeetings from "../src/pages/SearchEvent";
import Footer from "../src/components/Footer/Footer";
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
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/donate" component={Donate} />
            <Route exact path="/support" component={Support} />
            <Route exact path="/meeting/:id" component={SingleMeeting} />
            <Route exact path="/search" component={SearchMeetings} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;