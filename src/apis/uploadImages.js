import axios from 'axios';

const uploadImages = async (id, body) => {
  try {
    const api = axios.create({
      withCredentials: false,
      baseURL: `${process.env.REACT_APP_BACKEND_ENDPOINT}`,
    });
    await api.post(`/image?proposal_id=${id}`, body);
  } catch (e) {
    alert(e);
  }
};

export default uploadImages;
