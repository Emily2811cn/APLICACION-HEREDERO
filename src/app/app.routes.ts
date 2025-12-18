import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full',
  },
  {
    path: 'principal',
    loadComponent: () => import('./paginas/principal/principal.page').then( m => m.PRINCIPALPage)
  },
  {
    path: 'vermas',
    loadComponent: () => import('./paginas/vermas/vermas.page').then( m => m.VermasPage)
  },  {
    path: 'nosotros',
    loadComponent: () => import('./paginas/nosotros/nosotros.page').then( m => m.NosotrosPage)
  },
  {
    path: 'preguntas',
    loadComponent: () => import('./paginas/preguntas/preguntas.page').then( m => m.PreguntasPage)
  },
  {
    path: 'horarios',
    loadComponent: () => import('./paginas/horarios/horarios.page').then( m => m.HorariosPage)
  },
  {
    path: 'carrito',
    loadComponent: () => import('./carrito/carrito.page').then( m => m.CarritoPage)
  },


];