import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DailyNotesPage } from './daily-notes.page';

describe('DailyNotesPage', () => {
  let component: DailyNotesPage;
  let fixture: ComponentFixture<DailyNotesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
