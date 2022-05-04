import { $fetch } from 'ohmyfetch';
import { apiClientFactory } from '@absolute-web/vsf-core';
import * as api from './api';
import { ClientInstance, Config } from './types';

const onCreate = (settings: Config): { config: Config; client: ClientInstance } => {
  const config = {
    ...settings,
  } as unknown as Config;

  if (settings.client) {
    return {
      client: settings.client,
      config,
    };
  }

  const client = {
    async post(url: string, body: any, options?: any) {
      const data = await $fetch(url, {
        method: 'POST',
        ...options,
        headers: {
          Username: settings.username,
          Password: settings.password,
          'Content-Type': 'application/json'
        },
        body
      });
      return { data, status: 200 };
    }
  };

  return {
    client,
    config
  }
}

const { createApiClient } = apiClientFactory({
  onCreate,
  api
});

export {
  createApiClient
};
