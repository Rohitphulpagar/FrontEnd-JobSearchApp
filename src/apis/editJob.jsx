import axios from "axios";

export const EditJobPosts = async (jobId, formData) => {
  try {
    const reqUrl = `${process.env.REACT_APP_BACKEND_URL}/user/job-post/${jobId}`;
    const headers = { Authorization: localStorage.getItem("token") };

    const response = await axios.put(reqUrl, formData, { headers });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};
