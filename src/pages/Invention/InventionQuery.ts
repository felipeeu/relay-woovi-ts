import { graphql } from "babel-plugin-relay/macro";

export const InventionQuery = graphql`
  query InventionQuery($id: ID!) {
    invention(id: $id) {
      name
      notes
      year
      image_url
    }
  }
`;
