import axios from './axios';

const uploadImages = async (id, body) => {
  try {
    await axios.put(`/proposal?proposal_id=${id}`, body);
  } catch (e) {
    alert(e);
  }
};

export default uploadImages;
