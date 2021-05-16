import axios from './axios';

const withdraw = async (body) => {
  try {
    await axios.post('/withdrawal', body);
  } catch (e) {
    alert(e);
  }
};

export default withdraw;
