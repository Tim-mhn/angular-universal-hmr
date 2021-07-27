import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FruitComponent } from "./fruit.component";

const routes: Routes = [
  { path: '', component: FruitComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [FruitComponent],
})
export class FruitModule {}
