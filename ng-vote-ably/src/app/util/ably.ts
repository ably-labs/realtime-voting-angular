import { environment } from '../../environments/environment';
declare var Ably: any;
export interface AblyConnectionState { current: string, previous: string }

interface Connection {
  on: Function
}

interface Messaging {
  subscribe: (topic: string, callback: Function) => {};
  publish: (topic: string, publisher: Function) => {}
}

type Channels =  {
  get: (channel: string) => Messaging 
}

export class AblyRealtime {
  connection: Connection;
  channels: Channels
  constructor() {
    return new Ably.Realtime(environment.ablyApiKey);
  }

}
