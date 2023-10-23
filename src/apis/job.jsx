import axios from "axios";
// const token = localStorage.getItem('token');

export const jobPosts = async (
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
  token // New parameter for the token
) => {
  try {
    const reqUrl = `${process.env.REACT_APP_BACKEND_URL}/user/job-post`;
    const reqPayload = {
      companyName: companyName,
      logoUrl: logoUrl,
      jobPosition: jobPosition,
      salary: salary,
      jobType: jobType,
      remote: remote,
      location: location,
      description: description,
      aboutCompany: aboutCompany,
      skillRequired: skillRequired,
      recruiterName: recruiterName,
    };
    const headers = { Authorization: token };
    // Include the token in the request headers
    const response = await axios.post(reqUrl, reqPayload, { headers });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};
