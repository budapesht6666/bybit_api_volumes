import { CategorySymbolListV5, OHLCVKlineV5, RestClientV5 } from 'bybit-api';
import { GetKlineParamsType, GetKlineResponse } from './types';

export const getKline = async (params: GetKlineParamsType) => {
  try {
    const client = new RestClientV5({});
    const res = await client.getKline(params);

    if (res.retMsg !== 'OK') {
      console.error(res);
      throw new Error('Что то пошло не так!!!');
    }

    return {
      ...res.result,
      list: res.result.list.map((data) => ({
        startTimeInMs: new Date(Number(data[0])).toString(),
        openPrice: data[1],
        highPrice: data[2],
        lowPrice: data[3],
        closePrice: data[4],
        volumeInBaseCoin: data[5],
        turnoverInUSDT: data[6],
      })),
    } as GetKlineResponse;
  } catch (error) {
    console.error(error);
  }
};
