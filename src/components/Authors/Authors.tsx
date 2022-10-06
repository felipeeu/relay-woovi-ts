import { useCallback, useState } from "react";
import { graphql } from "babel-plugin-relay/macro";
import { loadQuery, usePreloadedQuery } from "react-relay";
import RelayEnvironment from "../../relay/RelayEnvironment";
import { Author } from "../Author";

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

const preloadedQuery = loadQuery(RelayEnvironment, AuthorsQuery, {
  /* query variables */
});

export const Authors = () => {
  const [authorId, setAuthorId] = useState("");
  const data: any = usePreloadedQuery(AuthorsQuery, preloadedQuery);

  const showAuthorDetails = useCallback(
    (id: string) => {
      setAuthorId(id);
    },
    [authorId]
  );

  return (
    <div>
      {data.authors.map(
        (
          author: { firstName: string; lastName: string; id: string },
          idx: number
        ) => {
          return (
            <p
              key={`${author.firstName}-${idx}`}
              onClick={() => showAuthorDetails(author.id)}
              style={{ cursor: "pointer" }}
            >
              {author.firstName} {author.lastName}
            </p>
          );
        }
      )}
      <Author id={authorId} />
    </div>
  );
};
