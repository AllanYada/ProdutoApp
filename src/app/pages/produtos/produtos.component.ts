import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interfaces/Produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
 
  produtos: Produto[] = []
  displayedColumns = ['id', 'codigo_barras', 'nome', 'preco'];

  constructor(
    private produtoService: ProdutosService
  ) {}

   ngOnInit(): void {
    this.produtoService.getProdutos().subscribe(data => {
      this.produtos = data;
      console.log(this.produtos);
    });
  }

}
