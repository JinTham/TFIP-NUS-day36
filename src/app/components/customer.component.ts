import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, OnDestroy{

  param$!:Subscription
  custId: string = ""
  queryParam$!:Subscription
  fids!:string[]
  joinedFids :string = ""

  constructor(private activatedRoute: ActivatedRoute){  }

  ngOnInit(): void {
    this.param$ = this.activatedRoute.params.subscribe(
      (params) => {
        this.custId = params['custId'];
        console.log(this.custId);
      }
    )
    this.queryParam$ = this.activatedRoute.queryParams.subscribe(
      (queryParams) => {
        this.fids = queryParams['fids'].split('|');
      }
    )
  }

  ngOnDestroy(): void {
      this.param$.unsubscribe()
      this.queryParam$.unsubscribe()
  }

  concat(val:any){
    console.log(val)
    this.joinedFids = this.joinedFids + val + "|"
    console.log(this.joinedFids)
  }
}
