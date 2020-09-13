import { Component , OnInit} from '@angular/core';
import { AblyRealtime, AblyConnectionState } from './util/ably';

declare var Ably: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Simple ably voting app!';
  connectionState: string;
  connectionColor: string;
  ably = new AblyRealtime();


  ngOnInit() {    
    this.ably.connection.on((connectionState: AblyConnectionState) => {
      this.connectionState = connectionState.current;
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
