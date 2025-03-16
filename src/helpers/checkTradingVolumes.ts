import { TickerLinearInverseV5 } from 'bybit-api';

let previousVolumes: Record<string, number> = {};

/**
 * Функция получает объемы торгов и сравнивает их с предыдущими значениями.
 */
export function checkTradingVolumes(tickers: TickerLinearInverseV5[]) {
  console.log(' previousVolumes:', previousVolumes['BTCUSDT']);
  let message = '';

  tickers.forEach((ticker) => {
    const { symbol, turnover24h } = ticker;
    const volume = parseFloat(turnover24h); // 24h объем торгов в USDT

    if (previousVolumes[symbol] !== undefined) {
      const prevVolume = previousVolumes[symbol];
      const changePercentage = ((volume - prevVolume) / prevVolume) * 100;

      if (Math.abs(changePercentage) >= 50) {
        message += `\n🔔 Объем торгов ${symbol} изменился на ${changePercentage.toFixed(2)}%`;
      }
    }

    // Обновляем данные
    previousVolumes[symbol] = volume;
  });

  return message;
}
