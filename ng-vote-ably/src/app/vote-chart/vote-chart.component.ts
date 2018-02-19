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

	ngOnInit() {
		this.ably = new Ably.Realtime('6QdTiA.O9vBCw:8glD3fRTNhSEVJC5')

	
		this.receiveChannel = this.ably.channels.get('vote-channel')
    console.log(this.receiveChannel)
		// Ably Subscription
		this.receiveChannel.subscribe( function(message:any) {
      //this.reply = message.data
     // console.log('here')

//chart begin
let canvas: any = document.getElementById("myChart");
/*let ctx: any = document.getElementById("myChart").getContext('2d');
var parent = document.getElementById("parent");
canvas.width = parent.offsetWidth;
canvas.height = parent.offsetHeight;
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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
});
//chart end
*/

      console.log(JSON.stringify(message.data))
		}.bind(this));
  }
}
