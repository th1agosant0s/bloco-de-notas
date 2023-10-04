import { Component, Input } from '@angular/core';
import { NotaService } from '../nota.service';
import { Nota } from '../nota';

@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.css']
})
export class CorpoComponent {

  constructor(private service: NotaService) { }

  ngOnInit(): void {
    this.service.listar()
  }

  
  listaNotas:Nota[]=[];

}
