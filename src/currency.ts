export enum CurrencyCode {
  USD = 'USD',
  EUR = 'EUR',
  PLN = 'PLN',
}

export type Currency = ReturnType<typeof Currency>;
export const Currency = function () {
  return {
    parse: (code: string) => {
      switch (code) {
        case CurrencyCode.USD:
          return CurrencyCode.USD;
        case CurrencyCode.EUR:
          return CurrencyCode.EUR;
        case CurrencyCode.PLN:
          return CurrencyCode.PLN;
        default:
          throw new Error(`Invalid currency code: ${code}`);
      }
    }
  }
}
