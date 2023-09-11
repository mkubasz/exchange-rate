import { CurrencyCode } from '../currency';
import { LBManager } from '../LBManager';
import { Provider } from '../providers/provider';


export type ExchangeRateService = ReturnType<typeof ExchangeRateService>;
export const ExchangeRateService = function () {
  return {
    exchangeRate: (lbManager: LBManager) => async (from: CurrencyCode, to: CurrencyCode) => {


      const response = await Provider(lbManager.newAddress()).execute(from, to);
      if (response.ok) {
        return response.value;
      } else {
        const response = await Provider(lbManager.newAddress()).execute(from, to);
        if (response.ok) {
          return response.value;
        } else {
          throw new Error(`System is not available`);
        }
      }
    }
  }
}
