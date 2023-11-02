import { Component } from '@angular/core';
import { Produto } from 'src/app/interfaces/Produto';
import { ProdutosService } from 'src/app/services/produtos.service';
import { FormGroup, } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-produto',
  templateUrl: './new-produto.component.html',
  styleUrls: ['./new-produto.component.css']
})
export class NewProdutoComponent {

  btnText= 'Cadastrar';

  constructor(
    private produtoService: ProdutosService,
    private router: Router,
    ) {}

  registrarHandler(FormGroup : FormGroup) {

     const produtoData = FormGroup.value;

     const produto : Produto = {
      nome: produtoData.nome,
      codigo_barras: produtoData.codigo_barras,
      preco: produtoData.preco
     }

     this.produtoService.saveProduto(produto).subscribe(() => {
           this.router.navigate(['/']);
     });

  }

}
