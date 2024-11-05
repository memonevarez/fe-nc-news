import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <Link className="item-link" to={"/"}>
        <h1>NC NEWS </h1>
      </Link>
    </>
  );
};
