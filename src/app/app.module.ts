import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { VoteChartComponent } from './vote-chart/vote-chart.component';
import { ChartLogicComponent } from './chart-logic/chart-logic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MatComponent
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BallotComponent } from './ballot/ballot.component'
@NgModule({
  declarations: [
    AppComponent,
    VoteChartComponent,
    ChartLogicComponent,
    BallotComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
