import "./App.css";
import { ApolloProvider } from "@apollo/reach-hooks";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>Hello</div>
    </ApolloProvider>
  );
}

export default App;
