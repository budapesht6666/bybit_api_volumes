import { getKline } from './api/getKline';
import { getTickers } from './api/getTickers';
import { sendMessage } from './api/sendMessageTg';
import { checkTradingVolumes } from './helpers/checkTradingVolumes';

export function init() {
  console.log(`вызов функции инициализации`);

  setInterval(async () => {
    console.log(`interval 1000+++++++++++++++++`);
    // const getKlineRes = await getKline({
    //   category: 'linear',
    //   symbol: 'BTCUSDT',
    //   interval: 'D',
    //   limit: 3,
    // });

    // console.log('getKlineRes:', getKlineRes);

    const getTickersRes = await getTickers({
      category: 'linear',
    });

    if (!getTickersRes) return;

    const message = checkTradingVolumes(getTickersRes.list);

    if (!!message) {
      await sendMessage(message);
    }

    console.log(`interval 1000------------------`);

    // TODO далее чатGPT
  }, 5000);
}
