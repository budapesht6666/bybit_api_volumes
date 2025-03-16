import { GetTickersParamsV5, RestClientV5 } from 'bybit-api';

export const getTickers = async (params: GetTickersParamsV5<'linear'>) => {
  try {
    const client = new RestClientV5({});
    const res = await client.getTickers(params);

    if (res.retMsg !== 'OK') {
      console.error(res);
      throw new Error('Что то пошло не так!!!');
    }

    return res.result;
  } catch (error) {
    console.error(error);
  }
};
