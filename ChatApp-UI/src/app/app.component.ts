import { HttpClient } from '@angular/common/http';
import { ChatService } from './_services/Chat.service';
import { ChatServiceService } from './_services/chatService.service';
import { Component, OnInit } from '@angular/core';
import { HubConnectionBuilder, HttpTransportType } from '@aspnet/signalr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  baseUrl = 'http://localhost:5000/message';

  MessageUrl = 'http://localhost:5000/api/messages';

  private connection;
  message: string;
  messages: string[] = [];

  loginmodel: any = {};

  constructor(private chatService: ChatService, private http: HttpClient) {}

  ngOnInit(): void {
    this.connection = new HubConnectionBuilder().withUrl(this.baseUrl).build();

    this.connection
      .start()
      .then(() => console.log('Connected'))
      .catch(err => console.log(err));

    this.connection.on('Send', data => {
      this.messages.push(data);
    });
  }

  messageSend() {
    this.http
      .get(this.MessageUrl, {
        params: {
          message: this.message
        }
      })
      .subscribe();
  }
}
