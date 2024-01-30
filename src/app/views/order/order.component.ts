import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {tap} from "rxjs";
import {OrderService} from "../../core/services/order.service";

@Component({
  selector: 'order-component',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{
  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private router: Router, private orderService: OrderService) {
  }

  public orderForm = this.fb.group({
    productTitle: [''],
    person: this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/[a-zA-Zа-яА-Я]{3,}/)]],
      lastName: ['', [Validators.required, Validators.pattern(/[a-zA-Zа-яА-Я]{3,}/)]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{11}$/)]]
    }),
    fullAddress: this.fb.group({
      country: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-Я]+$/)]],
      index: ['', [Validators.required, Validators.pattern(/\d+/)]],
      address: ['', [Validators.required, Validators.pattern(/^[\da-zA-Zа-яА-Я \-\\\/]+$/)]]
    }),
    comment: ['']
  })
  get productTitle() {return this.orderForm.get('productTitle');}
  get firstName() {return this.orderForm.get('person')?.get('firstName');}
  get lastName(){return this.orderForm.get('person')?.get('lastName');}
  get phone(){return this.orderForm.get('person')?.get('phone');}
  get country(){return this.orderForm.get('fullAddress')?.get('country');}
  get index(){return this.orderForm.get('fullAddress')?.get('index');}
  get address(){return this.orderForm.get('fullAddress')?.get('address');}
  get comment(){return this.orderForm.get('comment');}

  public isSuccessOrder: boolean = false;
  public isShowError: boolean = false;
  public isShowAction: boolean = true;
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['title']){
        this.orderForm.patchValue({productTitle: params['title']});
      } else {
        this.router.navigate(['/']);
      }
    })
    console.log(this.orderForm);
  }

  order(){
    this.isShowAction = false;
    if (this.firstName?.value && this.lastName?.value && this.phone?.value && this.country?.value && this.index?.value && this.address?.value && this.productTitle?.value){
      this.orderService.createOrder({
        name: this.firstName?.value,
        last_name: this.lastName?.value,
        phone: this.phone?.value,
        country: this.country?.value,
        zip: this.index?.value,
        product: this.productTitle?.value,
        address: this.address?.value,
        comment: this.comment?.value
      })
        .pipe(
          tap(() => {
            this.isShowAction = true;
          })
        )
        .subscribe(response => {
          if (response.success && !response.message){
            this.isSuccessOrder = true;
            this.isShowError = false;
          } else {
            this.isSuccessOrder = false;
            this.isShowError = true;
          }
        })
    }
  }
}
