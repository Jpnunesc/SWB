import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../environments/environment';
import { AreaModel } from '../models/areaModel';
import { EmpresaModel } from '../models/empresaModel';


@Injectable()
export class EmpresaService {
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
    return this.http.get(this.baseUrl + 'api/Empresa').map(res => res.json() );
  }
  combo(): Observable<any> {
    return this.http.get(this.baseUrl + 'combo').map(res => res.json() );
  }
  salva(empresaModel: EmpresaModel): Observable<any> {
    return this.http.post(this.baseUrl + 'api/Empresa', empresaModel, this.requestOptions).map(res => res.json());
  }
}
