import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src={props.image}
        alt="profile-image"
      />
      <h1>{props.user}</h1>
      <p>{props.bio}</p>
      <button>View Profile</button>
    </div>
  );
};

export default Card;
