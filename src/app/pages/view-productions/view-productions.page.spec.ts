import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewProductionsPage } from './view-productions.page';

describe('ViewProductionsPage', () => {
  let component: ViewProductionsPage;
  let fixture: ComponentFixture<ViewProductionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
