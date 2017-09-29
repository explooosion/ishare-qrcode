import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class StoreService {

  private api: string = '/api/store/login';

  constructor(private http: Http) { }

  public storeLogin(body: Object) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.api, body)
      .map((res) => {
        return res.json() || {}
      });
  }
}
