import axios from './axios';

const getProjectsByPage = async (page, expired) => {
  try {
    const response = axios.get(
      `/proposal?usage=get_proposal&page=${page}&expired=${expired}`,
    );
    return (await response).data;
  } catch (e) {
    alert(e);
  }
};

export default getProjectsByPage;
