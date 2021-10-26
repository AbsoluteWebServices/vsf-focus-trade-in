import { Context } from '@absolute-web/vsf-core';
import { useTradeInFactory, UseTradeInFactoryParams } from '../factories/useTradeInFactory';

const factoryParams: UseTradeInFactoryParams = {
  send: async (context: Context, params: any): Promise<boolean> => {
    return context.$focusTradeIn.api.send(params);
  },
};


export default useTradeInFactory(factoryParams);
