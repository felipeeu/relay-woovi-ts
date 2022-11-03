import { graphql } from "babel-plugin-relay/macro";

export const InventionNameQuery = graphql`
  query InventionNameQuery($id: ID!) {
    invention(id: $id) {
      name
    }
  }
`;
