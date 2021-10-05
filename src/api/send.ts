import { Context } from '../types';

export default async (
  { config, client }: Context,
  params: any
): Promise<boolean> => {
  const { apiUrl } = config;
  try {
    const response = await client.post(apiUrl, params);

    if (response.status !== 200) {
      throw response.data;
    }

    return response.data === 1;
  } catch (err: any) {
    throw err;
  }
}
