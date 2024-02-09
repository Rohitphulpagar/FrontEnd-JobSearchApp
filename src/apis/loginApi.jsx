import axios from "axios";

export const login = async (email, password) => {
  try {
    const reqUrl = `${process.env.REACT_APP_BACKEND_URL}/user/login`;
    const reqPayload = {
      email: email,
      password: password,
    };
    const response = await axios.post(reqUrl, reqPayload);
    // Return the response data
    localStorage.setItem("token", response.data.jwtToken);
    return response.data;
  } catch (error) {
    // Handle errors (optional)
    console.error("Error during login:", error);
    throw error; // Re-throw the error to handle it in the component if necessary
  }
};
