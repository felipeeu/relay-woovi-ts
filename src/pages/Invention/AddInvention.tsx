import { useNavigate } from "react-router-dom";

export const AddInvention = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <button className="button is-primary" onClick={() => navigate("/")}>
        back
      </button>
      <section className="section is-medium">
        <h1 className="title">Add New Invention</h1>
        <div className="columns">
          <div className="field column is-two-thirds">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Invention name"
              />
            </div>
          </div>
          <div className="field column">
            <label className="label">Year</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Invention year"
              />
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="About invention"
            ></textarea>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Create</button>
          </div>
          <div className="control">
            <button className="button is-link is-light">Cancel</button>
          </div>
        </div>
      </section>
    </div>
  );
};
