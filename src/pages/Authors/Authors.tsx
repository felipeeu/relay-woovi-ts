import { loadQuery, usePreloadedQuery } from "react-relay";
import RelayEnvironment from "../../relay/RelayEnvironment";
import { useNavigate } from "react-router-dom";
import { AuthorsQuery } from "./AuthorsQuery";

const preloadedQuery = loadQuery(RelayEnvironment, AuthorsQuery, {});

export const Authors = () => {
  const data: any = usePreloadedQuery(AuthorsQuery, preloadedQuery);
  let navigate = useNavigate();

  return (
    <div className="container ">
      {data.authors.map(
        (
          author: { firstName: string; lastName: string; id: string },
          idx: number
        ) => {
          return (
            <div
              className="box"
              key={`${author.firstName}-${idx}`}
              onClick={() => navigate(`author/${author.id}`)}
              style={{ cursor: "pointer" }}
            >
              {author.firstName} {author.lastName}
            </div>
          );
        }
      )}
    </div>
  );
};
