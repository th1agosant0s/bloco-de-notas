import { Component } from '@angular/core';
import { NotaService } from '../nota.service';
import { Nota } from '../nota';

@Component({
  selector: 'app-adicionar-notas',
  templateUrl: './adicionar-notas.component.html',
  styleUrls: ['./adicionar-notas.component.css']
})
export class AdicionarNotasComponent {

  constructor( private service: NotaService ){}


  nota: Nota= {
  
    conteudo: '',
    tipo: 'tipo1'
  }


  criarNota(){
    this.service.criar(this.nota).subscribe()
  }

  


}



