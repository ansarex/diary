import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FastingPagePage } from './fasting-page.page';

describe('FastingPagePage', () => {
  let component: FastingPagePage;
  let fixture: ComponentFixture<FastingPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FastingPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
