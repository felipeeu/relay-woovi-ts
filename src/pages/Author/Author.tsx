import { useParams, useNavigate } from "react-router-dom";
import { useLazyLoadQuery } from "relay-hooks";
import { AuthorQuery } from "./AuthorQuery";

export const Author = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const { data }: any = useLazyLoadQuery(AuthorQuery, { id });

  return (
    <div className="container">
      <button className="button is-primary" onClick={() => navigate("/")}>
        back
      </button>
      <section className="section is-medium">
        <h1 className="title">
          {data.author.firstName} {data.author.lastName}
        </h1>
        <h2 className="subtitle">
          {data.author.birthRegion}
          <p className="is-size-6">{data.author.birthYear}</p>
        </h2>
        <div className="container is-flex is-">
          <figure className="image is-128x128">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </figure>
          <div className="pl-5">
            <h2 className="has-text-weight-bold">Inventions</h2>
            {data?.author?.invention.map((invention: any) => {
              return <div key={invention}></div>;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
