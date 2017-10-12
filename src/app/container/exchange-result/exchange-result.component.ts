import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-exchange-result',
  templateUrl: './exchange-result.component.html',
  styleUrls: ['./exchange-result.component.css']
})
export class ExchangeResultComponent implements OnInit {

  public childId: String = '';
  public point: number = 0;
  public pointCost: number = 0;
  public storeId: String = '';
  public time: String = '';

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.iniCookie();
  }

  /**
   * 載入 cookie
   */
  public iniCookie() {

    let exchangeCookie = JSON.parse(Cookie.get('exchange'));
    console.log('exchangeCookie', exchangeCookie);
    if (exchangeCookie) {
      this.childId = exchangeCookie.recordchild;
      this.point = exchangeCookie.recordpoint;
      this.pointCost = exchangeCookie.recordcost;
      this.storeId = exchangeCookie.recordstore;
      this.time = exchangeCookie.recordtime;

      this.removeAllCookie();

    } else {
      this.router.navigate(["/error"]);
    }

  }

  public removeAllCookie() {

    // 除了店家登入（storeCookie）不要刪除，其餘都要刪除
    Cookie.delete('qrcodeCookie');
    Cookie.delete('childCookie');
    Cookie.delete('exchange');
  }
}
