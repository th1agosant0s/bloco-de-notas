import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { CorpoComponent } from './componentes/corpo/corpo.component';

import { AdicionarNotasComponent } from './componentes/adicionar-notas/adicionar-notas.component';
import { ExcluirNotaComponent } from './componentes/excluir-nota/excluir-nota.component';
import { NotaComponent } from './componentes/nota/nota.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    CorpoComponent,
    NotaComponent,
    AdicionarNotasComponent,
    ExcluirNotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
