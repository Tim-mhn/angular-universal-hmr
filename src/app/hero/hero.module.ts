import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeroComponent } from "./hero.component";

const routes: Routes = [
  { path: '', component: HeroComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [HeroComponent],
})
export class HeroModule { }
