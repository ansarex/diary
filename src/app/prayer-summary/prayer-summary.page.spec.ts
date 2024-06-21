import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrayerSummaryPage } from './prayer-summary.page';

describe('PrayerSummaryPage', () => {
  let component: PrayerSummaryPage;
  let fixture: ComponentFixture<PrayerSummaryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
