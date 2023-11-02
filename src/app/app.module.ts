import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table'
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { EditProdutoComponent } from './pages/edit-produto/edit-produto.component';
import { NewProdutoComponent } from './pages/new-produto/new-produto.component';
import { ProdutoFormComponent } from './components/produto-form/produto-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProdutosComponent,
    ConfirmDialogComponent,
    EditProdutoComponent,
    NewProdutoComponent,
    ProdutoFormComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
