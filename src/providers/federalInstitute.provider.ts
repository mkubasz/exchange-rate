import { CurrencyCode } from '../currency';

export type FederalInstitute = ReturnType<typeof FederalInstitute>;
export const FederalInstitute = function () {
  return {
    name: 'FederalInstitute',
    execute: async (from: CurrencyCode, to: CurrencyCode) => {
      const url = new URL("https://federal-institute.sandbox.swing.dev");
      url.pathname = "/rates/";
      url.searchParams.append("base", from);
      url.searchParams.append("target", to);

      const response = await fetch(url.toString());
      const json = await response.json();
      return {
        rate: json.rate,
        timestamp: json.timestamp,
        from: json.base,
        to: json.target,
      };
    }
  }
}

