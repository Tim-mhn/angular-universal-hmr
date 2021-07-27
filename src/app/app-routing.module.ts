import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'fruit',
    loadChildren: () => import('./fruit/fruit.module').then(m => m.FruitModule)
  },
  {
    path: 'hero',
    loadChildren: () => import('./hero/hero.module').then(m => m.HeroModule)
  },
  {
    path: '',
    component: HomeComponent,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
