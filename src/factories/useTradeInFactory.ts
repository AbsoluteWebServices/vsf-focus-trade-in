import { Ref, computed } from 'vue-demi';
import {
  configureFactoryParams,
  Context,
  FactoryParams,
  Logger,
  sharedRef,
} from '@vue-storefront/core';
import {
  UseTradeIn,
  UseTradeInErrors,
} from '../types';

export interface UseTradeInFactoryParams extends FactoryParams{
  send: (context: Context, params: any) => Promise<boolean>;
}

export function useTradeInFactory(
  factoryParams: UseTradeInFactoryParams,
) {
  return function useTradeIn(ssrKey = 'useTradeIn'): UseTradeIn {
    const loading: Ref<boolean> = sharedRef<boolean>(false, `useTradeIn-loading-${ssrKey}`);
    const error: Ref<UseTradeInErrors> = sharedRef({
      send: null,
    }, `useTradeIn-error-${ssrKey}`);
    // eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle
    const _factoryParams = configureFactoryParams(factoryParams);

    const send = async (params: any) => {
      Logger.debug(`useTradeIn/${ssrKey}/send`);

      try {
        loading.value = true;
        const response = await _factoryParams.send(params);
        error.value.send = null;
        return response;
      } catch (err: any) {
        error.value.send = err;
        Logger.error(`useTradeIn/${ssrKey}/send`, err);
      } finally {
        loading.value = false;
      }
    };

    return {
      loading: computed(() => loading.value),
      error: computed(() => error.value),
      send,
    };
  };
}
