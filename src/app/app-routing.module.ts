import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { NewProdutoComponent } from './pages/new-produto/new-produto.component';
import { EditProdutoComponent } from './pages/edit-produto/edit-produto.component';

const routes: Routes = [
  { path: '', component: ProdutosComponent},
  { path: 'produtos', component: ProdutosComponent},
  { path: 'produtos/new', component: NewProdutoComponent},
  { path: 'produtos/edit/:id', component: EditProdutoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
