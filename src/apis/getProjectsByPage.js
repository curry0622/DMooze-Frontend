import axios from './axios';

const getProjectsByPage = async (page) => {
  try {
    const response = axios.get(`/proposal?useage=get_proposal&page=${page}`);
    return (await response).data;
  } catch (e) {
    alert(e);
  }
};

export default getProjectsByPage;
