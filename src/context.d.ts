import { ApiClientMethods, IntegrationContext } from '@absolute-web/vsf-core';
import { ClientInstance, Config, FocusTradeInApiMethods } from './types';

declare module '@absolute-web/vsf-core' {
  export interface Context {
    $focusTradeIn: IntegrationContext<ClientInstance, Config, ApiClientMethods<FocusTradeInApiMethods>>;
  }
}
