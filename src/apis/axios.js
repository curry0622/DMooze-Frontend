import axios from 'axios';

export default axios.create({
  withCredentials: false,
  baseURL: REACT_APP_BACKEND_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
});
