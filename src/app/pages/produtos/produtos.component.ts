import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interfaces/Produto';
import { ProdutosService } from 'src/app/services/produtos.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { ErrorDialogComponent } from 'src/app/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
 
  produtos: Produto[] = []
  displayedColumns = ['nome', 'codigo_barras', 'preco', 'acoes'];

  constructor(
    private produtoService: ProdutosService,
    private dialog: MatDialog
  ) {}

   ngOnInit(): void {
    this.produtoService.getProdutos().subscribe({
      next: (data) => {
        this.produtos = data
      },
      error: (error) => {
      this.dialog.open(ErrorDialogComponent, {
        data: "Error no servidor!"
      })
      }
    });
  }


  removeProduto(id: number) {
    
      const dialog = this.dialog.open(ConfirmDialogComponent, {
        data: 'Você deseja excluir esse produto?',
      });
  
      dialog.afterClosed().subscribe(result => {  
        if(result == 'yes' ) {
          this.produtoService.removeProduto(id).subscribe(() => {
            this.produtoService.getProdutos().subscribe(data =>this.produtos = data);
          });
        
        }
  
      });
  
   
}

}
