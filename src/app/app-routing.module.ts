import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GoodModule} from "./views/good/good.module";
import {GoodsModule} from "./views/goods/goods.module";
import {MainModule} from "./views/main/main.module";
import {OrderModule} from "./views/order/order.module";

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    GoodModule,
    GoodsModule,
    MainModule,
    OrderModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
