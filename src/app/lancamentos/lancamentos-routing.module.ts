import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespesasComponent } from './despesas/despesas.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { AutenticadorGuard } from '../shared/security/autenticador-guard';

const routes: Routes = [
  { path: 'despesa', component: DespesasComponent, canActivate: [AutenticadorGuard] },
  { path: 'receita', component: ReceitasComponent, canActivate: [AutenticadorGuard] },
  { path: 'despesa/:id', component: DespesasComponent, canActivate: [AutenticadorGuard] },
  { path: 'receita/:id', component: ReceitasComponent, canActivate: [AutenticadorGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancamentosRoutingModule { }
