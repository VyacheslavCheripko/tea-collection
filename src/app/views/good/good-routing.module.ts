import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GoodComponent} from "./good.component";

const routes: Routes = [
  {path: 'good', component: GoodComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodRoutingModule { }
