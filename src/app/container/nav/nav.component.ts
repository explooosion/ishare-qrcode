import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public isLogin: Boolean = false;
  public welcomeMSG: String = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.checkLogin();
  }

  /**
   * 檢查是否已經登入
   */
  public checkLogin() {
    let cookie = JSON.parse(Cookie.get('storeCookie'));
    console.log(cookie);
    if (cookie) {
      this.isLogin = true;
      this.welcomeMSG = `Hi, ${cookie.name}!`;
    }
  }

  /**
   * 登出（依據流程規範，不給店家自行登出）
   */
  public loginOut() {
    alert('注意！本系統上線後不再提供登出功能！');
    Cookie.delete('storeCookie');
  }

  /**
   * 清除店家紀錄
   *
   * @memberof NavComponent
   */
  public clearAll() {
    Cookie.delete('storeCookie');
  }

}
