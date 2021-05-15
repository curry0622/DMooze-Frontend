import axios from './axios';

const getPageNum = async () => {
  try {
    const response = await axios.get('/proposal?usage=get_page_number');
    return response.data;
  } catch (e) {
    alert(e);
  }
};

export default getPageNum;
