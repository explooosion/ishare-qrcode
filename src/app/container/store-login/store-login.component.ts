import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../../service/store/store.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-store-login',
  templateUrl: './store-login.component.html',
  styleUrls: ['./store-login.component.css'],
  providers: [StoreService]
})
export class StoreLoginComponent implements OnInit {

  public storeId: String = 'a01';
  public storePwd: String = '123456';

  public reslut: any = null;

  constructor(
    private router: Router,
    private storeService: StoreService
  ) { }

  ngOnInit() {
    this.storeCheckCookie();
  }

  /**
   * 檢查是否已有登入紀錄
   */
  public storeCheckCookie() {
    let cookie = JSON.parse(Cookie.get('storeCookie'));
    if (cookie) {
      this.storeId = cookie.account;
      this.storePwd = cookie.password;
      this.storeSubmit(); // auto login
    }
  }

  /**
   * 提交表單資料
   */
  public async storeSubmit() {
    let body = {
      storeId: this.storeId,
      storePwd: this.storePwd
    };
    await this.storeLogin(body);
  }

  /**
   * 登入
   * @param body 表單參數
   */
  public async storeLogin(body: Object) {

    await this.storeService.storeLogin(body)
      .subscribe(
      result => {
        this.reslut = result[0][0];
        if (this.reslut) {

          Cookie.set('storeCookie', JSON.stringify(this.reslut));
          let qrcodeCookie = Cookie.get('qrcodeCookie');

          if (qrcodeCookie) {
            this.router.navigate(["/childlogin"], {
              queryParams: { 'childid': qrcodeCookie }
            });
          } else {
            this.router.navigate(["/error"]);
          }

        }
        else {
          alert('密碼錯誤，請重新嘗試！');
        }
      });
  }
}
