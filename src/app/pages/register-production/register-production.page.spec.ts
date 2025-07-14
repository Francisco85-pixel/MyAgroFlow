import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterProductionPage } from './register-production.page';

describe('RegisterProductionPage', () => {
  let component: RegisterProductionPage;
  let fixture: ComponentFixture<RegisterProductionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProductionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
