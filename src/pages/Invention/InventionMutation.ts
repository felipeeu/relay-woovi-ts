import { graphql } from "babel-plugin-relay/macro";

export const InventionMutation = graphql`
  mutation InventionMutation(
    $name: String
    $notes: String
    $year: String
    $image_url: String
  ) {
    addInvention(
      name: $name
      notes: $notes
      year: $year
      image_url: $image_url
    ) {
      name
      notes
      year
      image_url
    }
  }
`;
