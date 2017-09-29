import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChildService } from '../../service/child/child.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-child-login',
  templateUrl: './child-login.component.html',
  styleUrls: ['./child-login.component.css'],
  providers: [ChildService]
})
export class ChildLoginComponent implements OnInit {

  public childId: String = '';
  public childPwd: String = '';
  public storeName: String = '';

  public reslut: any = null;

  constructor(
    private router: Router,
    private childService: ChildService
  ) { }

  ngOnInit() {
    this.checkUrl();
  }

  /**
   * 檢查網址參數是否正確
   */
  public checkUrl() {

    this.childId = this.router['rawUrlTree']['queryParams']['childid'];
    if (!this.childId) {
      this.router.navigate(["/error"]);
    }

    let storeCookie = JSON.parse(Cookie.get('storeCookie'));
    console.log('storeCookie', storeCookie);
    if (storeCookie) {
      this.storeName = storeCookie.name;
    } else {
      this.router.navigate(["/error"]);
    }
  }

  /**
   * 提交表單資料
   */
  public async childCheck() {
    let body = {
      childId: this.childId,
      childPwd: this.childPwd
    };
    await this.childLogin(body);
  }

  /**
   * 登入
   * @param body 表單參數
   */
  public async childLogin(body: Object) {
    return await this.childService.childLogin(body)
      .subscribe(
      result => {
        this.reslut = result[0][0];
        if (this.reslut) {
          Cookie.set('childCookie', JSON.stringify(this.reslut));
          this.router.navigate(["/childcheck"]);
        }
        else {
          alert('密碼錯誤，請重新嘗試！');
        }
      });
  }


}
