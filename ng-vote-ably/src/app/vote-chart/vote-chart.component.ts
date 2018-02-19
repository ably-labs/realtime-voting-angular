import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'

declare var Ably: any;

@Component({
  selector: 'app-vote-chart',
  templateUrl: './vote-chart.component.html',
  styleUrls: ['./vote-chart.component.css']
})
export class VoteChartComponent implements OnInit {

  	// Attributes


	// Ably attributes
	ably : any
  receiveChannel : any
  chart = []

	ngOnInit() {
		this.ably = new Ably.Realtime('6QdTiA.O9vBCw:8glD3fRTNhSEVJC5')

	
		this.receiveChannel = this.ably.channels.get('vote-channel')
    console.log(this.receiveChannel)
		// Ably Subscription
		this.receiveChannel.subscribe(function(message: any) {
      console.log(JSON.stringify(message.data))
      this.chart= new Chart('canvas', {
        type: 'bar',
        data: {
          labels: ["Yes", "No", "MayBe"],
          datasets: [{
              label: 'Is this conference awesome?',
              data: [5, 2, 3],
              backgroundColor: [
                  'rgba(135, 227, 129, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
              ],
              borderColor: [
                  'rgba(135,227,129,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
          }]
        },
        options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
      })
		}.bind(this));
  }
}
