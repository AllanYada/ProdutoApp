import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from 'src/app/interfaces/Produto';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent {

  @Output() onSubmit = new EventEmitter<FormGroup>();
  @Input() btnText!: string;
  @Input() produto: Produto | null = null;

  produtoForm!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.produtoForm = new FormGroup({
    id: new FormControl(this.produto? this.produto.id : ''),
    nome: new FormControl(this.produto? this.produto.nome : '', [Validators.required]),
    codigo_barras: new FormControl(this.produto? this.produto.codigo_barras : '', [Validators.required, Validators.minLength(10)]),
    preco: new FormControl(this.produto? this.produto.preco : '', [Validators.required, Validators.pattern('^[0-9]*$')]),
    });
  }

  get nome() {
    return this.produtoForm.get('nome')!;
  }

  get codigo_barras() {
    return this.produtoForm.get('codigo_barras')!;
  }

  get preco() {
    return this.produtoForm.get('preco')!;
  }

  
  submit() {
    if(this.produtoForm.invalid) {
      return;
    }
    this.onSubmit.emit(this.produtoForm);
  }

}
