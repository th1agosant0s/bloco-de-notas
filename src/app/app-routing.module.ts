import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorpoComponent } from './componentes/corpo/corpo.component';
import { AdicionarNotasComponent } from './componentes/adicionar-notas/adicionar-notas.component';
import { ExcluirNotaComponent } from './componentes/excluir-nota/excluir-nota.component';

const routes: Routes = [
{
  path: 'home',
  component: CorpoComponent,
},
{
  path: 'criar-nota',
  component:AdicionarNotasComponent,
},
{
  path:'',
  redirectTo: 'home',
  pathMatch: 'full',
},
{
  path: 'ExcluirNotaComponent/:id',
  component:ExcluirNotaComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
