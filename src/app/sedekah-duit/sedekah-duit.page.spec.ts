import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SedekahDuitPage } from './sedekah-duit.page';

describe('SedekahDuitPage', () => {
  let component: SedekahDuitPage;
  let fixture: ComponentFixture<SedekahDuitPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SedekahDuitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
