import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ChildService {

  private api: string = '/api/user/login';

  constructor(private http: Http) { }

  public childLogin(body: Object) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.api, body)
      .map((res) => {
        return res.json() || {}
      });
  }
}
