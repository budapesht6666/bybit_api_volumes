import { CategorySymbolListV5, GetKlineParamsV5, OHLCVKlineV5 } from 'bybit-api';

export type SupportedSymbolsType = 'BTCUSDT';

export type GetKlineParamsType = Omit<GetKlineParamsV5, 'category' | 'symbol'> & {
  category: 'linear';
  symbol: SupportedSymbolsType;
};

export type GetKlineResponse = Omit<CategorySymbolListV5<OHLCVKlineV5[], 'linear'>, 'list'> & {
  list: {
    startTimeInMs: OHLCVKlineV5[0];
    openPrice: OHLCVKlineV5[1];
    highPrice: OHLCVKlineV5[2];
    lowPrice: OHLCVKlineV5[3];
    closePrice: OHLCVKlineV5[4];
    volumeInBaseCoin: OHLCVKlineV5[5];
    turnoverInUSDT: OHLCVKlineV5[6];
  }[];
};
