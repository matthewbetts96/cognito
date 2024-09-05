import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptors for request/response handling
apiClient.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default apiClient;
