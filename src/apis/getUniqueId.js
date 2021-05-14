import axios from './axios';

const getUniqueId = async () => {
  try {
    const response = await axios.post('/proposal');
    return response.data;
  } catch (e) {
    alert(e);
  }
};

export default getUniqueId;
