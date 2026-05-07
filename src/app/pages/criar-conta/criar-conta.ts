import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-conta',
  imports: [
    CommonModule, //diretivas básicas do Angular
    FormsModule, //suporte para formulários
    ReactiveFormsModule //suporte para formulários reativos
  ],
  templateUrl: './criar-conta.html',
  styleUrl: './criar-conta.css',
})
export class CriarConta {

    //Atributo para usar a biblioteca HttpClient
    http = inject(HttpClient);

    //Atributos para armazenar as mensagens de sucesso e de erro
    mensagemSucesso = signal<string>('');
    mensagemErro = signal<string>('');


    //Declarando o formulário
    formCriarConta = new FormGroup({
      nome : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required]),
      senha : new FormControl('', [Validators.required]),
      senhaConfirmacao : new FormControl('', [Validators.required])
    });

    //Função executada no submit do formulário
    criarConta() {

        // limpar mensagens
        this.mensagemSucesso.set('');
        this.mensagemErro.set('');
        



        //Fazendo uma requisição POST para a API de criação de usuário
        this.http.post('http://localhost:8082/api/usuario/criar', this.formCriarConta.value)
          .subscribe({
            next: (data) => { //capturando resposta de sucesso
              console.log(data); //exibindo resposta no console para verificar o que a API retornou
              this.mensagemSucesso.set('data.nome + , sua conta foi criada com sucesso!')
              this.formCriarConta.reset(); //limpando o formulário após criação bem-sucedida
            },
            error: (e) => { //capturando resposta de erro
              this.mensagemErro.set(e.error);
            }
          });
    }

}
