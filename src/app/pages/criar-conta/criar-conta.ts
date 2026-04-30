import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-conta',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './criar-conta.html',
  styleUrl: './criar-conta.css',
})
export class CriarConta {

  http = inject(HttpClient);

  formCriarConta = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
    senhaConfirmacao: new FormControl('', Validators.required)
  });

  //Função executada no submit do formulário
  criarConta() {
    //Imprimindo os valores do formulário no console
    // console.log(this.formCriarConta.value);
    this.http.post('http://localhost:8082/api/usuario/criar', this.formCriarConta.value)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.formCriarConta.reset();
        },
        error: (e) => {
          console.log(e.error);
        }
      });
  }
}
