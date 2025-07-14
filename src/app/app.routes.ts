import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.page').then((m) => m.DashboardPage),
  },
  {
    path: 'register-production',
    loadComponent: () =>
      import('./pages/register-production/register-production.page').then(
        (m) => m.RegisterProductionPage
      ),
  },
  {
    path: 'view-productions',
    loadComponent: () =>
      import('./pages/view-productions/view-productions.page').then(
        (m) => m.ViewProductionsPage
      ),
  },
  {
    path: 'estoque',
    loadComponent: () =>
      import('./pages/estoque/estoque.page').then((m) => m.EstoquePage),
  },
  {
    path: 'publicar-produto',
    loadComponent: () =>
      import('./pages/publicar-produto/publicar-produto.page').then(
        (m) => m.PublicarProdutoPage
      ),
  },
  {
    path: 'view-products',
    loadComponent: () =>
      import('./pages/view-products/view-products.page').then(
        (m) => m.ViewProductsPage
      ),
  },
  {
    path: 'perfil-produtor',
    loadComponent: () =>
      import('./pages/perfil-produtor/perfil-produtor.page').then(
        (m) => m.PerfilProdutorPage
      ),
  },
];

