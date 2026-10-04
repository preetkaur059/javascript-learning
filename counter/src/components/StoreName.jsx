import React, { useState } from "react";

const StoreName = () => {
  const [name, setName] = useState("");

  const saveName = (e) => {
    e.preventDefault();
    setName(e.target.name.value);
    console.log(setName);
  };

  return (
    <form onSubmit={saveName}>
      <h1>Enter your name</h1>

      <input
        type="text"
        name="name"
        placeholder="Enter your name"
      />

      <button type="submit">Submit</button>

      <div>{name}</div>
    </form>
  );
};

export default StoreName;