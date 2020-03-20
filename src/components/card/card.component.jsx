import React from "react";

import "./card.styles.css";

export const Card = ({ user }) => {
  return (
    <div className="card-container">
      <img
        alt="user"
        src={`https://robohash.org/${user.id}1set=set2&size=180x180`}
      ></img>
      <h2>{user.name}</h2>
      <p> {user.email}</p>
    </div>
  );
};
