import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section>
      <h1 className="header">NC NEWS</h1>
      <nav>
        <Link to="/" className="nav-link"><button>Home</button></Link>
        <Link to="/articles" className="nav-link"><button>Articles</button></Link>
      </nav>
    </section>
  );
};

export default Header;
