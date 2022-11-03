import { useLocation } from "react-router-dom";
import { useLazyLoadQuery } from "relay-hooks";
import { InventionNameQuery } from "./InventionNameQuery";

export const Invention = ({ id }: any) => {
  const { pathname } = useLocation();

  const { data }: any = useLazyLoadQuery(InventionNameQuery, {
    id,
  });
  return (
    <div>
      <a href={`${pathname}/invention/${id}`} style={{ cursor: "pointer" }}>
        {data?.invention.name}
      </a>
    </div>
  );
};
