import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../environments/environment';
import { AreaModel } from '../models/areaModel';


@Injectable()
export class AreaService {
 // private pathUrlService = environment.urlService;
  protected headers: Headers;
  private baseUrl: string;
  protected requestOptions: RequestOptions;

  constructor(private http: Http,  @Inject('BASE_URL') baseUrl: string) {
    this.headers = new Headers();
    this.baseUrl = baseUrl;
    this.headers.append('Content-Type', 'application/json');
    this.requestOptions = new RequestOptions({ headers: this.headers, withCredentials: true });
  }

  listar(): Observable<any> {
    return this.http.get(this.baseUrl + 'api/Areas').map(res => res.json() );
  }
  combo(): Observable<any> {
    return this.http.get(this.baseUrl + 'combo').map(res => res.json() );
  }

  delete(idCarro: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + idCarro, this.requestOptions).map(res => res.json());
  }

  edit(idCarro: number): Observable<any> {
    return this.http.get(this.baseUrl + '/' + idCarro, this.requestOptions).map(res => res.json());
  }

  salva(areaModel: AreaModel): Observable<any> {
    return this.http.post(this.baseUrl + 'api/Areas', areaModel, this.requestOptions).map(res => res.json());
  }

  // save(contatoModel: AreaModel): Observable<any> {
  //   return this.http.post(this.baseUrl + 'api/Contato', contatoModel, this.requestOptions).map(res => res.json());
  // }


}


