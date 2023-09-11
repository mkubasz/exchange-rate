import { CurrencyCode } from '../currency';

export type SwingExchangeCentral = ReturnType<typeof SwingExchangeCentral>;
export const SwingExchangeCentral = function () {
  function countExchangeRate(from: {name: string, rate: number}, to: {name: string, rate: number}) {
    if (from.name === to.name) {
      return 1.0;
    }
    return to.rate / from.rate;
  }
  return {
    name: 'SwingExchangeCentral',
    execute: async (from: CurrencyCode, to: CurrencyCode) => {
      const url = new URL("https://central-bank.sandbox.swing.dev");
      url.pathname = "/exchange/v1/";

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'X-APIKEY': 'SWING'
        }
      });
      const json = await response.json();
      return {
        rate: countExchangeRate(json[from.toString()], json[to.toString()]),
        timestamp: json.time,
        from: from.toString(),
        to: to.toString(),
      };
    }
  }
}
