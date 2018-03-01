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
  ably : any
  receiveChannel : any
  chart = []
  yes_votes: number = 0
  no_votes: number = 0
  maybe_votes: number = 0


	ngOnInit() {
        this.ably = new Ably.Realtime('6QdTiA.O9vBCw:8glD3fRTNhSEVJC5')
        //Attach to channel
		this.receiveChannel = this.ably.channels.get('vote-channel')
		// Ably Subscription
		this.receiveChannel.subscribe("update", function(message: any) {

            if(message.data.vote == 1)
                this.yes_votes++
            else if(message.data.vote == -1)
                this.no_votes++
            else if(message.data.vote == 0)
                this.maybe_votes++
            this.chart= new Chart('canvas', {
                type: 'bar',
                data: {
                    labels: ["Yes", "No", "MayBe"],
                    datasets: [{
                        label: 'Say yes!',
                        data: [this.yes_votes, this.no_votes, this.maybe_votes],
                        backgroundColor: [
                            'rgba(52, 217, 118, 1)',
                            'rgba(217, 63, 52, 1)',
                            'rgba(230, 127, 0, 1)'
                        ],
                        borderColor: [
                            'rgba(52, 217, 118, 1)',
                            'rgba(217, 63, 52, 1)',
                            'rgba(230, 127, 0, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    animation: false,
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
