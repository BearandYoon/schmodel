import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { LocalStorageService } from 'ngx-webstorage';
import { environment } from '../../environments/environment';

@Injectable()
export class HttpHelperService {
  constructor(private http: Http, private localStorage: LocalStorageService) {}

 
  private checkAuthHeader(response: Response) {
    let res;
    const authorizationHeader =  response.headers.toJSON()['authorization'];

    if (authorizationHeader) {
      this.localStorage.store(environment.localStorage.token, authorizationHeader[0]);
    }
    try {
      res = response.json();
    } catch (e) {
      res = {};
    }
    return res;
  }
 
  /***
   * generate request options
   * @param isUrlEncoded
   * @param requiredAuth
   * @param customHeader
   * @param customParam
   * @returns {RequestOptions}
   */
  private generateReqOptions(
    isUrlEncoded = false,
    requiredAuth = false,
    customHeader?: Headers,
    customParam?: Object
  ): RequestOptions {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    const search = new URLSearchParams();

    if (isUrlEncoded) {
      headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
      });
    }

    if (requiredAuth) {
      const token = this.localStorage.retrieve(
        environment.localStorage.token
      );
      headers.append('Authorization', `${token}`);
 
    }

    if (customHeader) {
      customHeader.forEach((value, key) => {
        headers.append(key, value[0]);
      });
    }

    if (customParam) {
      // tslint:disable-next-line:forin
      for (const key in customParam) {
        search.set(key, customParam[key]);
      }
    }

    return new RequestOptions({ headers, withCredentials: true, search });
  }

  /***
   * http get helper
   * @param url
   * @param query
   * @param requiredAuth
   * @param headers
   * @returns {Observable<Response>}
   */
  get(
    url: string,
    query: Object,
    requiredAuth = false,
    headers?: Headers
  ): Observable<any> {
    return this.http
      .get(url, this.generateReqOptions(false, requiredAuth, headers, query))
      .map((response: Response) => {
        return this.checkAuthHeader(response);
      })
      .catch(this.handleError);
  }

  /***
   * http post helper
   * @param url
   * @param body
   * @param isUrlEncoded
   * @param requiredAuth
   * @param headers
   * @returns {Observable<R|T>}
   */
  post(
    url: string,
    body: any,
    isUrlEncoded = false,
    requiredAuth = false,
    headers?: Headers
  ): Observable<any> {
    if (isUrlEncoded) {
      const urlSearchParams = new URLSearchParams();
      Object.keys(body).forEach(key => {
        urlSearchParams.append(key, body[key]);
      });
      body = urlSearchParams.toString();
    }
    return this.http
      .post( url, body, this.generateReqOptions(isUrlEncoded, requiredAuth, headers))
      .map((response: Response) => {
        return this.checkAuthHeader(response);
      })
      .catch(this.handleError);
  }

  /***
   * http patch helper
   * @param url
   * @param body
   * @param isUrlEncoded
   * @param requiredAuth
   * @param headers
   * @returns {Observable<R|T>}
   */
  patch(
    url: string,
    body: any,
    isUrlEncoded = false,
    requiredAuth = false,
    headers?: Headers
  ): Observable<any> {
    if (isUrlEncoded) {
      const urlSearchParams = new URLSearchParams();
      Object.keys(body).forEach(key => {
        urlSearchParams.append(key, body[key]);
      });
      body = urlSearchParams.toString();
    }
    return this.http
      .patch( url, body, this.generateReqOptions(isUrlEncoded, requiredAuth, headers))
      .map((response: Response) => {
        return this.checkAuthHeader(response);
      })
      .catch(this.handleError);
  }

  /***
   * http put helper
   * @param url
   * @param body
   * @param isUrlEncoded
   * @param requiredAuth
   * @param headers
   * @returns {Observable<R|T>}
   */
  put(
    url: string,
    body: any,
    isUrlEncoded = false,
    requiredAuth = false,
    headers?: Headers
  ): Observable<any> {
    if (isUrlEncoded) {
      const urlSearchParams = new URLSearchParams();
      Object.keys(body).forEach(key => {
        urlSearchParams.append(key, body[key]);
      });
      body = urlSearchParams.toString();
    }
    return this.http
      .put( url, body, this.generateReqOptions(isUrlEncoded, requiredAuth, headers))
      .map((response: Response) => {
        return this.checkAuthHeader(response);
      })
      .catch(this.handleError);
  }

  /***
   * http delete helper
   * @param url
   * @param query
   * @param requiredAuth
   * @param headers
   * @returns {Observable<Response>}
   */
  delete(
    url: string,
    query: Object,
    requiredAuth = false,
    headers?: Headers
  ): Observable<any> {
    return this.http
      .delete(url, this.generateReqOptions(false, requiredAuth, headers, query))
      .map((response: Response) => {
        return this.checkAuthHeader(response);
      })
      .catch(this.handleError);
  }

  /***
   * http exception handler
   * @param error
   * @returns {any}
   */
  private handleError(error: Response | any) {
    // let errMsg: string;
    // if (error instanceof Response) {
    //   const body = error.json() || '';
    //   errMsg = '';
    //
    //   if (body.errors) {
    //     body.errors.forEach(_err => {
    //       errMsg += _err.field + ' ' + _err.massage;
    //     });
    //   } else {
    //     errMsg = error.message ? error.message : error.toString();
    //   }
    // }
    return Observable.throw(error);
  }
}
