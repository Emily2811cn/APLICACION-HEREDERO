import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VermasPage } from './vermas.page';

describe('VermasPage', () => {
  let component: VermasPage;
  let fixture: ComponentFixture<VermasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VermasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
