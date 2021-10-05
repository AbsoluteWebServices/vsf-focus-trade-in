import { AxiosInstance } from 'axios';

export interface ClientInstance extends AxiosInstance {
}

export interface ClientConfig {
  apiUrl: string;
  username: string;
  password: string;
}

export interface Config extends ClientConfig {
  client?: ClientInstance;
}


