import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import "./App.css";
import Nav from "../Nav";
import Home from "../../pages/Home";
import Donate from "../../pages/Donate";
import Profile from "../../pages/Profile";
import Support from "../../pages/Support";
import LandingPage from "../../pages/LandingPage";
import SingleMeeting from "../../pages/SingleEvent";
import SearchMeetings from "../../pages/SearchEvent";
import Footer from "../Footer/Footer";




const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/donate" component={Donate} />
            <Route exact path="/support" component={Support} />
            <Route exact path="/profile/:username?" component={Profile}/>
            <Route exact path="/meeting/:id" component={SingleMeeting} />
            <Route exact path="/search" component={SearchMeetings} />
          </Switch>
        </div>
        <div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
