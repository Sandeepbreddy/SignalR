import { Injectable } from '@angular/core';
import { HubConnectionBuilder } from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor() {}

  baseUrl = 'http://localhost:5000/api/messages';

  connection = new HubConnectionBuilder().withUrl(this.baseUrl).build();

  sendMessage(model: any) {
    this.connection.invoke('SendAsync', model);
  }
}
