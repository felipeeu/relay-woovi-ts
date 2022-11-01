import { useParams, useNavigate } from "react-router-dom";
import { useLazyLoadQuery } from "relay-hooks";
import { InventionQuery } from "./InventionQuery";

export const Invention = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const { data }: any = useLazyLoadQuery(InventionQuery, { id });
  return (
    <div>
      <button onClick={() => navigate("/")}>back</button>
      <p>{data.invention.name}</p>
    </div>
  );
};
