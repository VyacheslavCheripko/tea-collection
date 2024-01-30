import {Injectable} from "@angular/core";
import {GoodType} from "../../../types/good.type";
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {GoodsComponent} from "../../views/goods/goods.component";

@Injectable({
  providedIn: 'root'
})
export class GoodService {
  private goods: GoodType[] = [];
  constructor(private httpClient: HttpClient) {
  }

  public getGoods(): Observable<GoodType[]> {
    return this.httpClient.get<GoodType[]>('https://testologia.site/tea');
  }
}
