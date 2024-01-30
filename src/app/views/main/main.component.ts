import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription, timeout} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy{
  public isShowPopup: boolean = false;
  private observable: Observable<boolean>;
  private subscription: Subscription | null = null;

  constructor(private router: Router) {
    this.observable = new Observable<boolean>((observer) => {
      const timeOut = setTimeout(() => {
        observer.next(true);
      }, 10000);

      return {
        unsubscribe() {
          clearTimeout(timeOut);
        }
      }
    })
  }
  ngOnInit() {
    this.subscription = this.observable.subscribe( {
      next: (param: boolean) => {
        this.isShowPopup = param;
      }
    })
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  show(){
    this.router.navigate(['/goods']);
  }
}
