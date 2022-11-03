export const Header = () => {
  return (
    <nav className="level">
      <p className="level-item has-text-centered">
        <a className="link is-info" href="/">
          Home
        </a>
      </p>
      <p className="level-item has-text-centered">
        <a className="link is-info" href="/add_author">
          Add Author
        </a>
      </p>
      <p className="level-item has-text-centered">INVENTIONS</p>
      <p className="level-item has-text-centered">
        <a className="link is-info" href="add_invention">
          Add Invention
        </a>
      </p>
      <p className="level-item has-text-centered">
        <a className="link is-info">Invention/Author</a>
      </p>
    </nav>
  );
};
