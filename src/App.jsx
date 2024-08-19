// import ApolloClient from "apollo-boost";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// import { ApolloProvider } from "@apollo/react-hooks";
import { PokemonsContainer } from "./containers/PokemonsContainer";

function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <PokemonsContainer />
      </main>
    </ApolloProvider>
  );
}

export default App;
