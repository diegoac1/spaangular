import { Component, OnInit } from '@angular/core';
import { alunos } from '../model/alunos'
@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor: number = 0;
  exibeTabela: boolean = false;

  listaAlunos: alunos[] = [
    { nome: 'Camila', idade: 27, email: 'camila.taruma@gmail.com', curso: 'Ciência da Computação'},
    { nome: 'Diego', idade: 33, email: 'diego.taruma@gmail.com', curso: 'Sistemas de Informação'},
    { nome: 'Pedro', idade: 22, email: 'pedro.taruma@gmail.com', curso: 'Ciência da Computação'},
    { nome: 'João', idade: 19, email: 'joao.taruma@gmail.com', curso: 'Ciência da Computação'}
  ];

  displayedColumns: string[] = ['Nome', 'Idade', 'E-mail', 'Curso'];

  ngOnInit(): void {
    this.valor = 5;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirTabela() {
    this.exibeTabela = true;
  }
}
