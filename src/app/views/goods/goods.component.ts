import {Component, OnInit} from '@angular/core';
import {GoodType} from "../../../types/good.type";
import {GoodService} from "../../core/services/good.service";
import {tap} from "rxjs";

@Component({
  selector: 'goods-component',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {
  public goods: GoodType[] = [];
  constructor(private goodService: GoodService) {
  }
  public loading: boolean = true;
  ngOnInit() {
    this.goodService.getGoods()
      .pipe(
        tap(() => {
            this.loading = false;
          }
        )
      )
      .subscribe({
        next: (data) => {
          this.goods = data;
        }
      });
  }
}
