import axios from './axios';

const getProjectById = async (id) => {
  try {
    const response = await axios.get(
      `/proposal?useage=get_proposal&proposal_id=${id}`,
    );
    return response.data;
  } catch (e) {
    alert(e);
  }
};

export default getProjectById;
