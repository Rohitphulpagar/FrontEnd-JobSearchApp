import React, { useEffect, useState } from "react";
import register from "./register.css";
import poster from "../image/poster.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-use-history";
import { registers } from "../../apis/registers";

function Register() {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const [error, setError] = useState("");
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await registers(name, email, mobile, password);
      localStorage.setItem("token", response.data.jwtToken);
      console.log("register Successful:", response);
    } catch (err) {
      // Handle login error
      setError("Invalid email or password");
      console.error("Login Error:", err);
    }
    history.push("/home");
  };

  return (
    <div className="registers">
      <div className="firstParts">
        <div className="headings">
          <h1>Create an account</h1>
          <p className="head2s">Your personal job finder is here</p>
        </div>
        <div className="formss">
          <form onSubmit={handleSubmit}>
            <input
              className="inss"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <input
              className="inss"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <input
              className="inss"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <br />
            <input
              className="inss"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="privacy">
              <span>
                <p>
                  <input type="checkbox" required /> By creating an account, I
                  agree to our terms of use and privacy policy
                </p>
              </span>
            </div>
            <br />
            <br />
            <button className="bts" type="submit">
              Create Account
            </button>
            <br />
            <h4>
              Already have an account?<Link to="/login"> Sign In</Link>
            </h4>
          </form>
        </div>
      </div>
      <div className="posterParts">
        <div className="images">
          <img src={poster} alt="poster"></img>
        </div>
      </div>
    </div>
  );
}
export default Register;
