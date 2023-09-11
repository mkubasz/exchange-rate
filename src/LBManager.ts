import { Providers } from './providers/provider';


export type LBState = ReturnType<typeof LBState>;
export const LBState = function () {
  const requests: Array<string> = [];
  return {
    getLast(): string {
      return requests[requests.length - 1]
    },
    addRequest(request: string) {
      requests.push(request);
    }
  }
};

export type LBManager = ReturnType<typeof LBManager>;
export const LBManager = function (addresses: Array<{ name: string, value: any }>, state: LBState) {
  return {
    fails(name: string) {
      return state.getLast() === name;
    },
    newAddress() : Providers {
      if (state.getLast() === addresses[0].name) {
        state.addRequest(addresses[1].name);
        return addresses[1].value;
      }
      state.addRequest(addresses[0].name);
      return addresses[0].value;
    }
  }
}
