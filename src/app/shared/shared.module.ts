import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {GoodDescriptionPipe} from "./pipes/good-description.pipe";
import {GoodCardComponent} from "./components/good-card/good-card.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent,
    GoodDescriptionPipe,
    GoodCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    GoodCardComponent,
  ]
})
export class SharedModule { }
