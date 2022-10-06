import React from "react";
import { graphql } from "babel-plugin-relay/macro";
import { useQuery } from "relay-hooks";

const AuthorQuery = graphql`
  query AuthorQuery($id: ID!) {
    author(id: $id) {
      firstName
    }
  }
`;

export const Author = (id: any) => {
  const { data, error, retry, isLoading }: any = useQuery(AuthorQuery, id);

  return <div>Author: {id.id}</div>;
};
