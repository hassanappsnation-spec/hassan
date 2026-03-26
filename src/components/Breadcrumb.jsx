import { Link } from "react-router-dom";

const Breadcrumb = ({ product }) => {
  return (
    <nav className="p-4 text-gray-600">
      <Link to="/">Home</Link> {" > "}
      <Link to="/products">Products</Link> {" > "}
      <span className="text-black font-semibold">
        {product?.title}
      </span>
    </nav>
  );
};

export default Breadcrumb;