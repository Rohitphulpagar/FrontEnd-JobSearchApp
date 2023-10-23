import axios from "axios";

export const jobData = async (
  logoUrl,
  jobPosition,
  salary,
  jobType,
  remote,
  location,
  skillRequired
  ) => {
    try {
      const backend_url=process.env.BACKEND_URL;
      const reqUrl = `${backend_url}/user/get-jobs`;
    const response = await axios.get(reqUrl, {
      params: {
        logoUrl: logoUrl,
        jobPosition: jobPosition,
        salary: salary,
        jobType: jobType,
        remote: remote,
        location: location,
        skillRequired: skillRequired,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
