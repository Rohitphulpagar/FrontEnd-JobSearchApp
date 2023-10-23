import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import poster from "../image/poster.png";
import { Link } from "react-router-dom";
import { login } from "../../apis/loginApi";
import { useHistory } from "react-router-use-history";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const createUser = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      // Handle the response data as needed
      console.log("Login successful. Response:", response);
      // Perform actions based on the response, such as redirecting the user or updating state
    } catch (error) {
      console.error("Error during login:", error);
      // Handle errors, show error messages, etc.
    }
    history.push("/home");
  };

  return (
    <div className="register">
      <div className="firstPart">
        <div className="heading">
          <h1>Already have an account?</h1>
          <p className="head2">Your personal job finder is here</p>
        </div>
        <br />
        <div className="forms">
          <form onSubmit={createUser}>
            {" "}
            {/* Corrected here */}
            <input
              className="ins"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              className="ins"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <br />
            <br />
            <button className="btt" type="submit">
              Sign in
            </button>
            <br />
            <h4>
              Don't have an account?<Link to="/register"> Sign Up</Link>
            </h4>
          </form>
        </div>
      </div>
      <div className="posterPart">
        <div className="images">
          <img src={poster} alt="poster"></img>
        </div>
      </div>
    </div>
  );
}

export default Login;
