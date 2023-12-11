import React, { useState, useEffect } from "react";
import poster from "../image/post.png";
import { Link, useParams } from "react-router-dom";
import design from "../JobEdit/JobEdit.module.css";
import { EditJobPosts } from "../../apis/editJob";
import axios from "axios";
import { useHistory } from "react-router-use-history";

function JobEdit() {
  const { jobId } = useParams();

  const [formData, setFormData] = useState({
    companyName: "",
    logoUrl: "",
    jobPosition: "",
    salary: 0,
    jobType: "",
    remote: true,
    location: "",
    description: "",
    aboutCompany: "",
    skillRequired: "",
    recruiterName: "",
  });
  const history = useHistory();

  const createUserJob = async (e) => {
    e.preventDefault();
    try {
      const response = await EditJobPosts(jobId, formData);
      console.log("Job post successful. Response:", response);
      // Handle success response here
    } catch (error) {
      console.error("Error during job post:", error);
      // Handle errors, show error messages, etc.
    }
    history.push("/home");
  };

  return (
    <div className={design.editjob}>
      <div className={design.firstPart}>
        <div className={design.tags}>
          <h2>Update Job Description</h2>
        </div>

        <div className={design.formFirst}>
          <form onSubmit={createUserJob}>
            {" "}
            {/* Corrected here */}
            <label className={design.labs1}>
              Company Name{" "}
              <input
                className={design.in1}
                type="text"
                value={formData.companyName}
                onChange={(e) =>
                  setFormData({ ...formData, companyName: e.target.value })
                }
                placeholder="Enter your company name here"
              />
            </label>
            <label className={design.labs2}>
              Add Logo URL{" "}
              <input
                className={design.in2}
                type="url"
                value={formData.logoUrl}
                onChange={(e) =>
                  setFormData({ ...formData, logoUrl: e.target.value })
                }
                placeholder="Enter the link"
              />
            </label>
            <label className={design.labs3}>
              Job Position
              <input
                className={design.in3}
                value={formData.jobPosition}
                onChange={(e) =>
                  setFormData({ ...formData, jobPosition: e.target.value })
                }
                placeholder="Enter job position"
              />
            </label>
            <label className={design.labs4}>
              Monthly Salary
              <input
                type="number"
                className={design.in4}
                value={formData.salary}
                onChange={(e) =>
                  setFormData({ ...formData, salary: e.target.value })
                }
                placeholder="Enter Amount in rupees"
              />
            </label>
            <label className={design.labs5}>
              Job Type
              <select
                value={formData.jobType}
                className={design.in5}
                onChange={(e) =>
                  setFormData({ ...formData, jobType: e.target.value })
                }
              >
                <option value="">Select Job Type</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="part-time">Internship</option>
              </select>
            </label>
            <label className={design.labs6}>
              Remote/Office
              <select
                className={design.in6}
                value={formData.remote ? "remote" : "office"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    remote: e.target.value === "remote",
                  })
                }
                required
              >
                <option value="remote">Remote</option>
                <option value="office">Office</option>
              </select>
            </label>
            <label className={design.labs7}>
              Location
              <input
                type="text"
                className={design.in7}
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                placeholder="Enter Location"
              />
            </label>
            <label className={design.labs8}>
              <p>Job Description</p>
              <textarea
                className={design.in8}
                type="text"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Type the job description"
              />
            </label>
            <label className={design.labs9}>
              <p>About Company</p>
              <textarea
                className={design.in9}
                type="text"
                value={formData.aboutCompany}
                onChange={(e) =>
                  setFormData({ ...formData, aboutCompany: e.target.value })
                }
                placeholder="Type about your company"
              />
            </label>
            <label className={design.labs10}>
              Skills Required{" "}
              <input
                type="text"
                value={formData.skillRequired}
                className={design.in10}
                onChange={(e) =>
                  setFormData({ ...formData, skillRequired: e.target.value })
                }
                placeholder="Enter the must have skills"
              />
            </label>
            <label className={design.labs11}>
              Information
              <input
                type="text"
                value={formData.recruiterName}
                className={design.in11}
                onChange={(e) =>
                  setFormData({ ...formData, recruiterName: e.target.value })
                }
                placeholder="Enter the additional information"
              />{" "}
            </label>
            <span className={design.buts}>
              <button className={design.buts1}>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "gray",
                    fontWeight: "700",
                  }}
                  to="/home"
                >
                  cancel
                </Link>
              </button>
              <button className={design.buts2} type="submit">
                Update Data
              </button>
            </span>
          </form>
        </div>
      </div>
      <div className={design.ppost}>
        <div className="images">
          <img src={poster} alt="poster"></img>
        </div>
      </div>
    </div>
  );
}

export default JobEdit;
