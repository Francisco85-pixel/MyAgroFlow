import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicarProdutoPage } from './publicar-produto.page';

describe('PublicarProdutoPage', () => {
  let component: PublicarProdutoPage;
  let fixture: ComponentFixture<PublicarProdutoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
