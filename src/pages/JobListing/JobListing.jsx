import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-use-history";
import styles from "./JobListing.module.css";
import flag from "../image/flag.png";
import rupees from "../image/rupees.png";
import group from "../image/group.png";
import JobPost from "../JobPost/JobPost";
import Heading from "../../component/Heading";
const JobListing = () => {
  const [skills, setSkills] = useState([]);
  const [position, setPosition] = useState("");
  const [jobs, setJobs] = useState([]);
  const options = [
    { value: "", label: "" },
    { value: "React", label: "React" },
    { value: "CSS", label: "CSS" },
    { value: "HTML", label: "HTML" },
    { value: "node.js", label: "node.js" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "Express.js", label: "Express.js" },
    // your options array
  ];

  const token = localStorage.getItem("token");
  const handleChange = (selectedSkills) => {
    const selectedSkillValues = selectedSkills.map((skill) => skill.value);
    setSkills(selectedSkillValues);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const skillsString = skills.join(",");
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/user/get-jobs?skills=${skillsString}&position=${position}`
        );
        setJobs(response.data.data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };
    fetchData();
  }, [skills, position]);

  return (
    <div className={styles.jobsearch}>
      <div className={styles.main}>
        <Heading />
        {token ? (
          <div className={styles.selection}>
            <input
              className={styles.ins}
              type="text"
              id="position"
              placeholder="Q  Type any job title"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
            <div className={styles.ro}>
              <Select
                className={styles.selects}
                id="skills"
                options={options}
                value={options.filter((option) =>
                  skills.includes(option.value)
                )} // Display selected skill names
                onChange={handleChange}
                isMulti={true}
              />{" "}
              <Link to={"/job"}>
                <button className={styles.jobListBtn}>+ Add Job</button>
              </Link>
            </div>
          </div>
        ) : (
          <div className={styles.selection}>
            <input
              className={styles.ins}
              type="text"
              id="position"
              placeholder="Q  Type any job title"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
            <div className={styles.ro}>
              <Select
                className={styles.selects}
                id="skills"
                options={options}
                value={options.filter((option) =>
                  skills.includes(option.value)
                )} // Display selected skill names
                onChange={handleChange}
                isMulti={true}
              />
            </div>
          </div>
        )}

        {token
          ? jobs.map((job) => (
              <div
                key={job._id}
                style={{ display: "flex" }}
                className={styles.jobList}
              >
                <div className={styles.infos}>
                  <span>
                    <img
                      className={styles.logos}
                      src={job.logoUrl}
                      alt="Job Logo"
                    />
                  </span>
                </div>
                <div className={styles.desc}>
                  <h2>{job.jobPosition}</h2>
                  <div className={styles.secondRow}>
                    <span className={styles.salarys}>
                      <p className={styles.groups}>
                        <img src={group} alt="group" />
                        &nbsp; 11-50
                      </p>{" "}
                      <h3>
                        <img className={styles.rupee} src={rupees} />
                        &nbsp;{job.salary}
                      </h3>
                    </span>
                    <span className={styles.fl}>
                      <img className={styles.flags} src={flag} />
                      <p>{job.location}</p>
                    </span>
                  </div>
                  <span className={styles.off}>
                    <p className={styles.off1}>
                      {job.remote ? "Remote" : "Office"}
                    </p>
                    <p className={styles.off2}>{job.jobType}</p>
                  </span>
                </div>
                <div className={styles.skillss}>
                  <span className={styles.skillSect}>
                    <p className={styles.skillSects}>{job.skillRequired}</p>
                  </span>
                  <div className={styles.dd}>
                    <Link to={`/edit-job/${job._id}`}>
                      <button className={styles.skillbtn}>Edit job</button>
                    </Link>
                    <Link to={`/description/${job._id}`}>
                      <button className={styles.skillbtns}>View details</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          : jobs.map((job) => (
              <div
                key={job._id}
                style={{ display: "flex" }}
                className={styles.jobList}
              >
                <div className={styles.infos}>
                  <span>
                    <img
                      className={styles.logos}
                      src={job.logoUrl}
                      alt="Job Logo"
                    />
                  </span>
                </div>
                <div className={styles.desc}>
                  <h2>{job.jobPosition}</h2>
                  <div className={styles.secondRow}>
                    <span className={styles.salarys}>
                      <p className={styles.groups}>
                        <img src={group} alt="group" />
                        &nbsp; 11-50
                      </p>{" "}
                      <h3>
                        <img className={styles.rupee} src={rupees} />
                        &nbsp;{job.salary}
                      </h3>
                    </span>
                    <span className={styles.fl}>
                      <img className={styles.flags} src={flag} alt="ii" />
                      <p>{job.location}</p>
                    </span>
                  </div>
                  <span className={styles.off}>
                    <p className={styles.off1}>
                      {job.remote ? "Remote" : "Office"}
                    </p>
                    <p className={styles.off2}>{job.jobType}</p>
                  </span>
                </div>
                <div className={styles.skillss}>
                  <span className={styles.skillSect}>
                    <p className={styles.skillSects}>{job.skillRequired}</p>
                  </span>
                  <div className={styles.dd}>
                    <Link to={`/description/${job._id}`}>
                      <button className={styles.skillbtns}>View details</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default JobListing;
