import {Component, OnInit} from '@angular/core';
import {GoodType} from "../../../types/good.type";
import {GoodService} from "../../core/services/good.service";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss']
})
export class GoodComponent implements OnInit{
  public good: GoodType = {
    description: '',
    id: 0,
    image: '',
    price: 0,
    title: ''
  }
  constructor(private router: Router) {
  }
  ngOnInit() {
    if (localStorage.getItem('good')){
      this.good = JSON.parse(localStorage.getItem('good')!);
    }
  }
}
