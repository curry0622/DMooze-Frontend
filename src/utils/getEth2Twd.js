import axios from 'axios';

const getEth2Twd = async () => {
  try {
    const api = axios.create({
      // baseURL: 'https://api.coinbase.com/v2',
      baseURL: 'https://min-api.cryptocompare.com',
    });
    // const response = await api.get(`/exchange-rates?currency=ETH`);
    const response = await api.get('/data/price?fsym=ETH&tsyms=TWD');
    return response.data.TWD;
  } catch (e) {
    alert(e);
  }
};

export default getEth2Twd;
