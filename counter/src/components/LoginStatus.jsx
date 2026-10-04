import React, { useState } from "react";

const LoginStatus = () => {
  // const isLoggedIn = true;
  const [login, setLogin] = useState(false);

  return (
    <div>
      {/* <h2>{isLoggedIn ? "Logged In" : "Please Login"}</h2> */}
      <button onClick={(e) => setLogin(true)}>
        click
      </button>
      {login && <h2>hello</h2>}
    </div>
  );
};

export default LoginStatus;