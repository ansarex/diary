import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IbadahTrackerPage } from './ibadah-tracker.page';

describe('IbadahTrackerPage', () => {
  let component: IbadahTrackerPage;
  let fixture: ComponentFixture<IbadahTrackerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IbadahTrackerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
