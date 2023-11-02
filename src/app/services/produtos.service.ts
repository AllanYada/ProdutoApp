import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../interfaces/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  API = 'http://localhost:8080/api/produtos'

  constructor(private http : HttpClient) { }

  getProdutos() : Observable<Produto[]> {
    return this.http.get<Produto[]>(this.API);
  }

  getProduto(id : number) : Observable<Produto> {
    return this.http.get<Produto>(`${this.API}/${id}`);
  }

 saveProduto(produto : Produto) : Observable<Produto> {
    return this.http.post<Produto>(this.API, produto);
 }

 updateProduto(produto : Produto) : Observable<Produto> {
  return this.http.put<Produto>(this.API, produto);
 }

  removeProduto(id :number) : Observable<any>  {
    return this.http.delete(`${this.API}/${id}`);
  }

}
