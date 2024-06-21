import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrayerPagePage } from './prayer-page.page';

describe('PrayerPagePage', () => {
  let component: PrayerPagePage;
  let fixture: ComponentFixture<PrayerPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
