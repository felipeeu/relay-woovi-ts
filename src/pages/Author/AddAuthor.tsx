import { useNavigate } from "react-router-dom";
import { useMutation } from "relay-hooks";
import { AuthorMutation } from "./AuthorMutation";
import { useForm, Resolver } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  birthYear: string;
  birthRegion: string;
  image_url: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.firstName ? values : {},
    errors: !values.firstName
      ? {
          firstName: {
            type: "required",
            message: "First name  is required.",
          },
          lastName: {
            type: "required",
            message: "Last name is required.",
          },
          birthYear: {
            type: "required",
            message: "Birth year is required.",
          },
          birthRegion: {
            type: "required",
            message: "Birth region is required.",
          },
        }
      : {},
  };
};

export const AddAuthor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const navigate = useNavigate();
  const [mutate, { loading }] = useMutation(AuthorMutation);

  const createAuthor = (data: any) => {
    const { firstName, lastName, birthYear, birthRegion, image_url } = data;
    mutate({
      variables: {
        firstName,
        lastName,
        birthYear,
        birthRegion,
        image_url,
      },
      onCompleted: ({ addAuthor }: any) => {
        navigate(`/author/${addAuthor.id}`);
      },
    });
  };
  const onSubmit = handleSubmit((data) => createAuthor(data));

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container">
      <button className="button is-primary" onClick={() => navigate("/")}>
        back
      </button>
      <section className="section is-medium">
        <h1 className="title">Add New Author</h1>
        <form onSubmit={onSubmit}>
          <div className="columns">
            <div className="field column">
              <label className="label">First Name</label>
              <div className="control">
                <input
                  {...register("firstName")}
                  className="input"
                  type="text"
                  placeholder="First name"
                />
                {errors?.firstName && <p>{errors.firstName.message}</p>}
              </div>
            </div>
            <div className="field column">
              <label className="label">Last Name</label>
              <div className="control">
                <input
                  {...register("lastName")}
                  className="input"
                  type="text"
                  placeholder="Last Name"
                />
                {errors?.lastName && <p>{errors.lastName.message}</p>}
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="field column">
              <label className="label">Birth Year</label>
              <div className="control">
                <input
                  {...register("birthYear")}
                  className="input"
                  type="text"
                  placeholder="Birth year"
                />
                {errors?.birthYear && <p>{errors.birthYear.message}</p>}
              </div>
            </div>
            <div className="field column">
              <label className="label">Birth Region</label>
              <div className="control">
                <input
                  {...register("birthRegion")}
                  className="input"
                  type="text"
                  placeholder="Birth Region"
                />
                {errors?.birthRegion && <p>{errors.birthRegion.message}</p>}
              </div>
            </div>
          </div>
          <div className="field column">
            <label className="label">URL Image</label>
            <div className="control">
              <input
                {...register("image_url")}
                className="input"
                type="text"
                placeholder="Image"
              />
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <input type="submit" className="button is-link" />
            </div>
            <div className="control">
              <button
                className="button is-link is-light"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};
