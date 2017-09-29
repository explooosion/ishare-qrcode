import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

/* component */
import { AppComponent } from './app.component';
import { FooterComponent } from './container/footer/footer.component';
import { NavComponent } from './container/nav/nav.component';
import { QrcodeComponent } from './container/qrcode/qrcode.component';
import { StoreLoginComponent } from './container/store-login/store-login.component';
import { ChildLoginComponent } from './container/child-login/child-login.component';
import { ChildCheckComponent } from './container/child-check/child-check.component';
import { ExchangeResultComponent } from './container/exchange-result/exchange-result.component';
import { ErrorComponent } from './container/error/error.component';

/* plugin */

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    StoreLoginComponent,
    ChildLoginComponent,
    ErrorComponent,
    ChildCheckComponent,
    ExchangeResultComponent,
    QrcodeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
