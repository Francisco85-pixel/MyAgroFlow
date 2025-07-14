import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilProdutorPage } from './perfil-produtor.page';

describe('PerfilProdutorPage', () => {
  let component: PerfilProdutorPage;
  let fixture: ComponentFixture<PerfilProdutorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilProdutorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
