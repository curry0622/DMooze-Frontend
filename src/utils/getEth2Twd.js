import axios from 'axios';

const getEth2Twd = async () => {
  try {
    const api = axios.create({
      withCredentials: false,
      baseURL: 'https://api.coinbase.com/v2',
    });
    const response = await api.get(`/exchange-rates?currency=ETH`);
    return response.data.data.rates.TWD;
  } catch (e) {
    alert(e);
  }
};

export default getEth2Twd;
