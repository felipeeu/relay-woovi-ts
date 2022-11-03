import { graphql } from "babel-plugin-relay/macro";

export const AuthorMutation = graphql`
  mutation AuthorMutation(
    $firstName: String!
    $lastName: String!
    $birthRegion: String!
    $birthYear: String!
    $image_url: String
  ) {
    addAuthor(
      firstName: $firstName
      lastName: $lastName
      birthRegion: $birthRegion
      birthYear: $birthYear
      image_url: $image_url
    ) {
      id
    }
  }
`;
