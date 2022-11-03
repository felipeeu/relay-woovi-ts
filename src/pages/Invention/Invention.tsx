import { useParams, useNavigate } from "react-router-dom";
import { useLazyLoadQuery } from "relay-hooks";
import { InventionQuery } from "./InventionQuery";

export const Invention = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const { data }: any = useLazyLoadQuery(InventionQuery, {
    id,
  });

  return (
    <div className="container">
      <button className="button is-primary" onClick={() => navigate("/")}>
        back
      </button>
      <section className="section is-medium">
        <h1 className="title">{data.invention.name}</h1>
        <h2 className="subtitle">
          {data.invention.year}
          <p className="is-size-6">{data.invention.birthYear}</p>
        </h2>
        <div className="container is-flex is-">
          <figure className="image is-128x128">
            <img src={`${data.invention.image_url}`} />
          </figure>
          <h3 className="pl-5">{data.invention.notes}</h3>
        </div>
      </section>
    </div>
  );
};
