import { ComputedProperty } from '@absolute-web/vsf-core';

export interface UseTradeInErrors {
  send: Error | null;
}

export interface UseTradeIn {
  send: (params: any) => Promise<boolean>;
  loading: ComputedProperty<boolean>;
  error: ComputedProperty<UseTradeInErrors>;
}
