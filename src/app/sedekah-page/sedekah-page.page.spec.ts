import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SedekahPagePage } from './sedekah-page.page';

describe('SedekahPagePage', () => {
  let component: SedekahPagePage;
  let fixture: ComponentFixture<SedekahPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SedekahPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
