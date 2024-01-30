import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodsRoutingModule } from './goods-routing.module';
import {GoodsComponent} from "./goods.component";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    GoodsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GoodsRoutingModule
  ]
})
export class GoodsModule { }
