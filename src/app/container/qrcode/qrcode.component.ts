import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.checkUrl();
  }

  /**
   * http://localhost:4200/qrcode?childid=jason123
   * 檢查網址是否來自 QRcode 的標準格式
   */
  public checkUrl() {
    const id = this.router['rawUrlTree']['queryParams']['childid'];
    console.log(id);
    if (id) {
      Cookie.set('qrcodeCookie', id);

      let router = this.router;
      this.router.navigate(["/storelogin"]);

    } else {
      this.router.navigate(["/error"]);
    }
  }

}
