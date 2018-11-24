import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ContatoModel } from '../models/contatoModel';


@Injectable()
export class ContatoService {
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
    return this.http.get(this.baseUrl + 'api/Contato').map(res => res.json() );
  }
  save(contatoModel: ContatoModel): Observable<any> {
    return this.http.post(this.baseUrl + 'api/Contato', contatoModel, this.requestOptions).map(res => res.json());
  }
  editar(id): Observable<any> {
    return this.http.get(this.baseUrl + 'api/Contato/' + id, this.requestOptions).map(res => res.json());
  }
  excluir(id): Observable<any> {
    debugger;
    return this.http.delete(this.baseUrl + 'api/Contato//' + id, this.requestOptions).map(res => res.json());
  }

}
