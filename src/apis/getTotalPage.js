import axios from './axios';

const getTotalPage = async (expired) => {
  try {
    const response = await axios.get(
      `/proposal?usage=get_page_number&expired=${expired}`,
    );
    return response.data;
  } catch (e) {
    alert(e);
  }
};

export default getTotalPage;
