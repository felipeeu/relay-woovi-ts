import { useParams, useNavigate } from "react-router-dom";
import { useLazyLoadQuery } from "relay-hooks";
import { AuthorQuery } from "./queries";

export const Author = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const { data }: any = useLazyLoadQuery(AuthorQuery, { id });

  return (
    <div>
      <button onClick={() => navigate("/")}>back</button>
      <p>
        {data.author.firstName} {data.author.lastName}
      </p>
    </div>
  );
};
