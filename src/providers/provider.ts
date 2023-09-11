import { CurrencyCode } from '../currency';
import { ok, Result } from '../result';
import { SwingExchangeCentral } from './swingExchangeCentral.provider';
import { FederalInstitute } from './federalInstitute.provider';

export type Providers = FederalInstitute | SwingExchangeCentral;
export type Provider = ReturnType<typeof Provider>;
export const Provider = function (provider: FederalInstitute | SwingExchangeCentral) {
  console.log(provider.name);
  return {
    execute: async (from: CurrencyCode, to: CurrencyCode): Promise<Result<Record<string, any>, string>> => {
      try {
        return ok(provider.execute(from, to));
      } catch (err) {
        console.log(err);
        return err(err.message);
      }
    }
  }
}
