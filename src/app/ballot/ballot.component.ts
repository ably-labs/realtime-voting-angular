import { Component, OnInit } from '@angular/core';
import Ably from '../util/ably';

@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.component.html',
  styleUrls: ['./ballot.component.scss']
})
export class BallotComponent implements OnInit {
  score: number;
  disabled: boolean;
  constructor() { }

  ngOnInit(): void {
    this.disabled = false;
  }

  yes() {
    this.vote(1);
  }

  no() {
    this.vote(-1);
  }

  maybe() { 
    this.vote(0);
  }

  vote(score: number) {
    const sendChannel = Ably.channels.get('vote-channel');
    sendChannel.publish("update", { "vote": score }, this.errCallback)
    this.disabled = true;
  }

  errCallback(err: Error){
    window.alert(err);
  }
}
