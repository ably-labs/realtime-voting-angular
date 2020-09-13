import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { VoteChartComponent } from './vote-chart/vote-chart.component';
import { ChartLogicComponent } from './chart-logic/chart-logic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MatComponent
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
@NgModule({
  declarations: [
    AppComponent,
    VoteChartComponent,
    ChartLogicComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
