import { graphql } from "babel-plugin-relay/macro";

export const AuthorsQuery = graphql`
  query AuthorsQuery {
    authors {
      id
      firstName
      lastName
      birthRegion
      birthYear
    }
  }
`;
