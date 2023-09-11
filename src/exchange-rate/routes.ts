import { Request, Response, Router } from 'express'
import { Currency } from '../currency';
import { ExchangeRateService } from './service';
import { LBManager, LBState } from '../LBManager';
import { FederalInstitute } from '../providers/federalInstitute.provider';
import { SwingExchangeCentral } from '../providers/swingExchangeCentral.provider';

export const routes: Router = Router()
const currency = Currency();
const exchangeRateService = ExchangeRateService();

interface GetExchangeRate {
  from: string,
  to: string,
}
const lbProviders = LBManager(
  [
  { name: 'FederalProvider', value: FederalInstitute() },
  { name: 'SwingExchangeCentral', value: SwingExchangeCentral() },
], LBState())

routes.get('/', async (req: Request, res: Response) => {
  // Parse
  const { from, to } = req.query as any as GetExchangeRate;
  // Service
  const result = await exchangeRateService.exchangeRate(lbProviders)(currency.parse(from), currency.parse(to));
  // Return Result
  res.json(result);
})
