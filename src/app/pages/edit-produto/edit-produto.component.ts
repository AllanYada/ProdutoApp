import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interfaces/Produto';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, } from '@angular/forms';

@Component({
  selector: 'app-edit-produto',
  templateUrl: './edit-produto.component.html',
  styleUrls: ['./edit-produto.component.css']
})
export class EditProdutoComponent implements OnInit {


  produto! : Produto;
  btnText = 'Atualizar'

  constructor(
   private produtoService: ProdutosService,
   private router: Router,
   private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const produtoId = Number(this.route.snapshot.paramMap.get("id"));
    this.produtoService.getProduto(produtoId).subscribe(data => {
      this.produto = data;
    });
  }

  updateHandler(formGroup: FormGroup) {

    const produtoData = formGroup.value;
    console.log(produtoData);

    const produto : Produto = {
      id: produtoData.id,
      nome: produtoData.nome,
      codigo_barras: produtoData.codigo_barras,
      preco: produtoData.preco
     }

     this.produtoService.updateProduto(produto).subscribe(() => {
        this.router.navigate(['/']);
     })
       
  }

}
