import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  urlListaCatalogo : string = environment.API_LISTA_PRODUCTOS;

  constructor(private http: HttpClient) { }

  listarCatalogo():Observable<any>{
    return this.http.get(this.urlListaCatalogo); 
  }
}
