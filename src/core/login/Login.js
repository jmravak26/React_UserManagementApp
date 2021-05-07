import React from "react";

export default function Login(props) {
  return (
    <>
      <div>
        <input name="username" type="text" placeholder="Username" />
        <input name="password" type="password" placeholder="Password" />
        <button children="Login" onClick={props.onLogin} />
      </div>
    </>
  );
}
