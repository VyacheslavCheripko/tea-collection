import {Component, Input} from '@angular/core';
import {GoodType} from "../../../../types/good.type";
import {GoodService} from "../../../core/services/good.service";
import {Router} from "@angular/router";

@Component({
  selector: 'good-card',
  templateUrl: './good-card.component.html',
  styleUrls: ['./good-card.component.scss']
})
export class GoodCardComponent {
  @Input() good: GoodType;
  public goods: GoodType[] = [];
  constructor(private goodService: GoodService, private router: Router) {
    this.good = {
      description: '',
      id: 0,
      image: '',
      price: 0,
      title: ''
    }
  }
  getDetails(){
    localStorage.setItem('good', JSON.stringify(this.good));
    this.router.navigate(['/good']);
  }
}
