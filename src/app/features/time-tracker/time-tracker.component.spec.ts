import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TimeTrackerComponent } from './time-tracker.component';

describe('TimeTrackerComponent', () => {
  let component: TimeTrackerComponent;
  let fixture: ComponentFixture<TimeTrackerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TimeTrackerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TimeTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
