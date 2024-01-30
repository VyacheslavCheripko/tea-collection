import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class OrderService {
  constructor(private httpClient: HttpClient) {

  }

  createOrder(data: {name: string, last_name: string, phone: string, country: string, zip: string, product: string, address: string, comment: string | null | undefined}){
    return this.httpClient.post<{success: string, message: string}>('https://testologia.site/order-tea', data);
  }
}
