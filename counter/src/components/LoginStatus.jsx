import React from "react";

const LoginStatus = () => {
  const isLoggedIn = true;

  return (
    <div>
      <h2>{isLoggedIn ? "Logged In" : "Please Login"}</h2>
    </div>
  );
};

export default LoginStatus;