import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Heading from "../../component/Heading";
import money from "../image/money.png";
import calender from "../image/calender.png";
import designs from "../JobDescription/JobDescription.module.css";
function JobDescription(props) {
  const [jobDetails, setJobDetails] = useState([]);
  const token = localStorage.getItem("token");
  const { jobId } = useParams();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/user/job-description/${jobId}`)
      .then((response) => {
        setJobDetails(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching job details:", error);
      });
  }, [jobId]); // Include jobId in the dependency array

  // Render job details
  return (
    <div className={designs.description}>
      <Heading />
      {jobDetails ? (
        <div className={designs.description1}>
          <div className={designs.description2}>
            <span className={designs.desc}>
              <h2>
                {jobDetails.jobPosition}{" "}
                {jobDetails.remote ? "Work from Home" : "Work from Office"} job
              </h2>
              <h2>at {jobDetails.companyName}</h2>
            </span>
          </div>

          <div className={designs.description3}>
            <div className={designs.aps}>
              <p className={designs.p1}>{jobDetails.jobType}</p>
              <div className={designs.firstDiv}>
                <p className={designs.p2}>
                  {jobDetails.jobPosition}
                  <span className={designs.editbtn}>
                    {token ? (
                      <Link to={`/edit-job/${jobId}`}>
                        <button>Edit job</button>
                      </Link>
                    ) : (
                      <div></div>
                    )}
                  </span>
                </p>
                <p className={designs.p3}>{jobDetails.location} | India</p>
                <div className={designs.sp2}>
                  <span className={designs.pImg}>
                    <p className={designs.p4}>
                      <img src={money} alt="money" />
                      &nbsp;&nbsp;stipend
                    </p>
                  </span>
                  <p className={designs.p5}>
                    <img src={calender} alt="calender" />
                    &nbsp;&nbsp;Duration
                  </p>
                </div>
                <span className={designs.sp3}>
                  <p className={designs.p6}>Rs {jobDetails.salary}/month</p>
                  <p className={designs.p7}>6 Months</p>
                </span>
              </div>
              <div className={designs.div1}>
                <p className={designs.p8}>About Company</p>
                <p className={designs.p9}>{jobDetails.aboutCompany}</p>

                <p className={designs.p10}>About the job/Internship</p>
                <p className={designs.p11}>{jobDetails.description}</p>
              </div>
              <div>
                <p className={designs.p12}>Skill(s) Required</p>
                <span className={designs.skills}>
                  {jobDetails.skillRequired}
                </span>
              </div>
              <div>
                <p className={designs.p13}>Additional Information</p>
                <p className={designs.p14}>{jobDetails.recruiterName}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading job details...</p>
      )}
    </div>
  );
}

export default JobDescription;
