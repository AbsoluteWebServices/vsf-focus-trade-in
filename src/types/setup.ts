export interface ClientInstance {
  post(url: string, body: any, options?: any): Promise<any>;
}

export interface ClientConfig {
  apiUrl: string;
  username: string;
  password: string;
}

export interface Config extends ClientConfig {
  client?: ClientInstance;
}


