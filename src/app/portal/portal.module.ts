import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './portal.component';

// === 1st: portal routes ===
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../search/search.module').then(m => m.SearchModule)
  },
];

@NgModule({
  declarations: [PortalComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [PortalComponent]
})
export class PortalModule { }
