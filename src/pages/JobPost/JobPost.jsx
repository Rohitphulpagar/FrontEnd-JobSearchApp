import React, { useState, useEffect } from "react";
import post from "../image/post.png";
import { Link } from "react-router-dom";
import styl from "./JobPost.module.css";
import { jobPosts } from "../../apis/job";
import axios from "axios";
import { useHistory } from "react-router-use-history";

function JobPost() {
  const [companyName, setCompanyName] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [salary, setSalary] = useState(0);
  const [jobType, setJobType] = useState("");
  const [remote, setRemote] = useState(true);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");
  const [skillRequired, setSkillRequired] = useState("");
  const [recruiterName, setRecruiterName] = useState("");

  const history = useHistory();

  const createUserJob = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await jobPosts(
        companyName,
        logoUrl,
        jobPosition,
        salary,
        jobType,
        remote,
        location,
        description,
        aboutCompany,
        skillRequired,
        recruiterName,
        token
      );
      console.log("Job post successful. Response:", response);
    } catch (error) {
      console.error("Error during job post:", error);
    }

    history.push("/home");
  };

  const cancel = () => {
    history.push("/home");
  };

  return (
    <div className={styl.postJob}>
      <div className={styl.postJobPart}>
        <div className={styl.postJobHeadLine}>
          <h1 className={styl.postJobLine}>Add job description</h1>
        </div>

        <div className={styl.postJobForm}>
          <form className={styl.foorm} onSubmit={createUserJob}>
            {" "}
            {/* Corrected here */}
            <label className={styl.lab1}>
              Company Name{" "}
              <input
                className={styl.postJobInput}
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter your company name here"
                required
              />
            </label>
            <label className={styl.lab2}>
              Add logo URL{" "}
              <input
                className={styl.postJobInput}
                type="url"
                value={logoUrl}
                onChange={(e) => setLogoUrl(e.target.value)}
                placeholder="Enter the link"
                required
              />
            </label>
            <label className={styl.lab3}>
              Job Position{" "}
              <input
                className={styl.postJobInput}
                value={jobPosition}
                onChange={(e) => setJobPosition(e.target.value)}
                placeholder="Enter job position"
                required
              />
            </label>
            <label className={styl.lab4}>
              Monthly Salary{" "}
              <input
                type="number"
                className={styl.postJobInput}
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder="Enter Amount in rupees"
                required
              />
            </label>
            <label className={styl.lab5}>
              Job Type
              <select
                className={styl.postJobSelect1}
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                required
              >
                <option value="">Select</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="Intern">Internship</option>
              </select>
            </label>
            <label className={styl.lab6}>
              Remote/Office
              <select
                className={styl.postJobSelect1}
                value={remote ? "remote" : "office"}
                onChange={(e) => setRemote(e.target.value === "remote")}
                required
              >
                <option value="">Select</option>
                <option className={styl.postJob} value="remote">
                  Remote
                </option>
                <option className={styl.postJob} value="office">
                  Office
                </option>
              </select>
            </label>
            <label className={styl.lab7}>
              Location/City
              <input
                type="text"
                className={styl.postJobInput}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter Location"
                required
              />
            </label>
            <label className={styl.lab8}>
              <p>Job Description</p>
              <textarea
                className={styl.postJobInputs}
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Type the job description"
                required
              />
            </label>
            <label className={styl.lab9}>
              <p>About Company</p>
              <textarea
                className={styl.postJobInputs}
                type="text"
                value={aboutCompany}
                onChange={(e) => setAboutCompany(e.target.value)}
                placeholder="Type about your company"
                required
              />
            </label>
            <label className={styl.lab10}>
              Skills Required
              <input
                className={styl.postJobInput}
                type="text"
                value={skillRequired}
                onChange={(e) => setSkillRequired(e.target.value)}
                placeholder="Enter the must have skills"
              />
            </label>
            <label className={styl.lab11}>
              Information
              <input
                type="text"
                className={styl.postJobInput}
                value={recruiterName}
                onChange={(e) => setRecruiterName(e.target.value)}
                placeholder="Enter the additional information"
                required
              />{" "}
            </label>
            <span className={styl.bbts}>
              <button className={styl.bts} onClick={cancel}>
                cancel
              </button>
              <button className={styl.bbt} type="submit">
                +Add Job
              </button>
            </span>
          </form>
        </div>
      </div>
      <div className={styl.posts}>
        <div className={styl.iimg}>
          <img src={post} alt="poster"></img>
        </div>
      </div>
    </div>
  );
}

export default JobPost;
