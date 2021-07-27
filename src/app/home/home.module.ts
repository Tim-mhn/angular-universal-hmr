import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from '../portal/portal.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: PortalComponent, loadChildren: () => import('../portal/portal.module').then(m => m.PortalModule) }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [RouterModule.forChild(routes)],
})
export class HomeModule { }
