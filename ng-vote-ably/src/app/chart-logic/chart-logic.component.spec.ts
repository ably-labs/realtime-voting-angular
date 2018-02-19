import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLogicComponent } from './chart-logic.component';

describe('ChartLogicComponent', () => {
  let component: ChartLogicComponent;
  let fixture: ComponentFixture<ChartLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartLogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
