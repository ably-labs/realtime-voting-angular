import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteChartComponent } from './vote-chart.component';

describe('VoteChartComponent', () => {
  let component: VoteChartComponent;
  let fixture: ComponentFixture<VoteChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
