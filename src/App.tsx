import React from "react";
import "./App.css";
import { graphql } from "babel-plugin-relay/macro";
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";

const { Suspense } = React;

// Define a query
const AuthorsNameQuery = graphql`
  query AppAuthorsNameQuery {
    authors {
      firstName
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, AuthorsNameQuery, {
  /* query variables */
});

function App(props: any) {
  const data: any = usePreloadedQuery(AuthorsNameQuery, props.preloadedQuery);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {data.authors.map((author: { firstName: string }) => {
            return <p>{author.firstName}</p>;
          })}
        </div>
      </header>
    </div>
  );
}

function AppRoot(props: any) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
