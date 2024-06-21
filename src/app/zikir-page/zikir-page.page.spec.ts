import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZikirPagePage } from './zikir-page.page';

describe('ZikirPagePage', () => {
  let component: ZikirPagePage;
  let fixture: ComponentFixture<ZikirPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ZikirPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
