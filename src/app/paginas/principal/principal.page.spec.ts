import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PRINCIPALPage } from './principal.page';

describe('PRINCIPALPage', () => {
  let component: PRINCIPALPage;
  let fixture: ComponentFixture<PRINCIPALPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PRINCIPALPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});