import axios from './axios';

const sponsor = async (body) => {
  try {
    await axios.post('/money', body);
  } catch (e) {
    alert(e);
  }
};

export default sponsor;
