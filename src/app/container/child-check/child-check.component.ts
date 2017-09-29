import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../../service/exchange/exchange.service';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import * as moment from 'moment';
import * as swal from 'sweetalert';


@Component({
  selector: 'app-child-check',
  templateUrl: './child-check.component.html',
  styleUrls: ['./child-check.component.css'],
  providers: [ExchangeService]
})
export class ChildCheckComponent implements OnInit {

  public childId: String = '';
  public childName: String = '';
  public point: Number = 0;
  public storeId: String = '';
  public storeName: String = '';
  public isDebug: Boolean = false;

  constructor(
    private router: Router,
    private exchangeService: ExchangeService
  ) { }

  ngOnInit() {
    this.iniCookie();
  }


  /**
   * 載入 cookie
   */
  public iniCookie() {

    let childCookie = JSON.parse(Cookie.get('childCookie'));
    console.log('childCookie', childCookie);
    if (childCookie) {
      this.childId = childCookie.account;
      this.childName = childCookie.name;
      this.point = childCookie.point;
    } else {
      this.router.navigate(["/error"]);
    }

    let storeCookie = JSON.parse(Cookie.get('storeCookie'));
    console.log('storeCookie', storeCookie);
    if (storeCookie) {
      this.storeId = storeCookie.account;
      this.storeName = storeCookie.name;
    } else {
      this.router.navigate(["/error"]);
    }

  }

  /**
   * 提交表單資料
   */
  public async chkCheck() {
    let body = {
      childId: this.childId,
      storeId: this.storeId,
      point: this.point,
      time: moment().format('YYYY-MM-DD HH:mm:ss'),
      pointCost: 10 // 扣除點數要討論
    };
    await this.exchangeAdd(body);
  }

  /**
   * 進行兌換
   * @param body 表單參數
   */
  public async exchangeAdd(body: Object) {

    await this.exchangeService.exchangeAdd(body).subscribe(
      result => {

        swal(`兌換成功囉！`, `謝謝「${this.storeName}」！\n\n請用餐完畢後\n別忘了清理桌面唷！`, "success");

        Cookie.set('exchange', JSON.stringify(body));
        this.router.navigate(["/exchangeresult"]);
      });
  }


}
