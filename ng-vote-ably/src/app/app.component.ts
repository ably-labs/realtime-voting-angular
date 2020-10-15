import { Component , OnInit} from '@angular/core';
import { AblyConnectionState } from './util/ably';
import Ably from './util/ably';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Realtime voting app - powered by Ably';
  connectionState: string;
  connectionColor: string;


  ngOnInit() {    
    Ably.connection.on((connectionState: AblyConnectionState) => {
      this.connectionState = connectionState.current;
      console.log(connectionState);
      switch (this.connectionState) {
        case 'connecting':
          this.connectionColor = 'yellow';
          break;
        case 'connected':
          this.connectionColor = 'green';
          break;
        default:
          this.connectionColor = 'red';
          break;
      }
    });
  }
}
