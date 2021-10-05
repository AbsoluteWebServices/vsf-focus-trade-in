import { ApiClientMethods, IntegrationContext } from '@vue-storefront/core';
import { ClientInstance, Config, FocusTradeInApiMethods } from './types';

declare module '@vue-storefront/core' {
  export interface Context {
    $focusTradeIn: IntegrationContext<ClientInstance, Config, ApiClientMethods<FocusTradeInApiMethods>>;
  }
}
