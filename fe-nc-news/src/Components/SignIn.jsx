import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/userContext";

export const SignIn = () => {
  const { users, currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignIn = (user) => {
    setCurrentUser(user);
    navigate("/articles");
  };
  return (
    <div className="signin-container">
      <h2>Who's reading NC News?</h2>

      <div className="user-list">
        {users.map((user) => (
          <div key={user.username} className="user-card">
            <img
              src={user.avatar_url}
              alt={user.name}
              className="user-avatar-sign-in"
              onClick={() => handleSignIn(user)}
            />
            <p className="user-name">{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
