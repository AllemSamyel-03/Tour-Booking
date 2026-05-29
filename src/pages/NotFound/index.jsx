import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

const NotFound = () => (
  <main className="not-found-page">
    <div className="not-found-card">
      <img
        src="https://media.istockphoto.com/id/1139517195/vector/404-error-page-not-found-concept-kids-using-laptops-having-problems-with-website-flat-design.jpg?s=170667a&w=0&k=20&c=URUhpv13qdOuQ-PNmbY1JrggJqeE2Q7pLJZkmt9ctzc="
        alt="not found"
      />
      <h1>Page not found</h1>
      <p>The page you are looking for is not available.</p>
      <Link className="primary-button" to="/">
        <FiHome /> Go Home
      </Link>
    </div>
  </main>
);

export default NotFound;
