import axios from "axios";

export const getJobs = async() => {
    const response = await axios.get(import.meta.env.VITE_JOB_URL);
    console.log('response is',response);
    return response;
};

