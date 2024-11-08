import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

export const Header = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChangeUser = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <Link className="item-link" to={"/articles"}>
        <h1>NC NEWS</h1>
      </Link>
      {currentUser ? (
        <div className="user-info">
          <img
            src={currentUser?.avatar_url}
            alt={`${currentUser?.username}'s avatar`}
            className="user-avatar"
          />
          <button className="change-user-button" onClick={handleChangeUser}>
            Change User
          </button>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
    </header>
  );
};
