import { Injectable } from '@angular/core';

import * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  constructor() {}

  baseUrl = 'http://localhost:5000/api/messages/';

  connection = new signalR.HubConnectionBuilder().withUrl(this.baseUrl).build();

  chat(model: any) {}
}
