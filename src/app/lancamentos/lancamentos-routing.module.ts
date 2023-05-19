import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespesasComponent } from './despesas/despesas.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { AutenticadorGuard } from '../shared/security/autenticador-guard';

const routes: Routes = [
  { path: 'despesa', component: DespesasComponent },
  { path: 'receita', component: ReceitasComponent, canActivate: [AutenticadorGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancamentosRoutingModule { }
