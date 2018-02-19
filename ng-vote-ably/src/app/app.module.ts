import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VoteChartComponent } from './vote-chart/vote-chart.component';
import { ChartLogicComponent } from './chart-logic/chart-logic.component';


@NgModule({
  declarations: [
    AppComponent,
    VoteChartComponent,
    ChartLogicComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
