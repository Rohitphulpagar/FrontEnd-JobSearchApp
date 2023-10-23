import React from "react";
import { useHistory } from "react-router-use-history";
import Img from "../pages/image/rohitphoto.jpeg";
import styles from "./Heading.module.css";
import { Link } from "react-router-dom";
function Heading() {
  const token = localStorage.getItem("token");
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <div>
      {token ? (
        <div className={styles.head}>
          <Link style={{ textDecoration: "none" }} to="/home">
            <div className={styles.firstHeading}>
              <h1 className={styles.hh1}>JobFinder</h1>
            </div>
          </Link>
          <div className={styles.logout1}>
            <h5 className={styles.btn3} onClick={logout}>
              Logout
            </h5>
            <h4 className={styles.hh4}>Hello! Recuiter</h4>
            <img className={styles.images} src={Img} alt="img" />
          </div>
        </div>
      ) : (
        <div className={styles.head}>
          <Link style={{ textDecoration: "none" }} to="/home">
            <div className={styles.firstHeading}>
              <h1 className={styles.hh1}>JobFinder</h1>
            </div>
          </Link>
          <div className={styles.logout}>
            <Link style={{ textDecoration: "none" }} to="/login">
              <button className={styles.btn1}>Login</button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/register">
              <button className={styles.btn2}>Register</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Heading;
