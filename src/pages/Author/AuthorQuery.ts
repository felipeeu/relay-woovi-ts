import { graphql } from "babel-plugin-relay/macro";

export const AuthorQuery = graphql`
  query AuthorQuery($id: ID!) {
    author(id: $id) {
      firstName
      lastName
      birthYear
      birthRegion
      invention
      image_url
    }
  }
`;
