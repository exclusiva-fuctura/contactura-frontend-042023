import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DespesasComponent } from './relatorios/despesas/despesas.component';
import { ReceitasComponent } from './relatorios/receitas/receitas.component';
import { AutenticadorGuard } from './shared/security/autenticador-guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent, canActivate: [AutenticadorGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AutenticadorGuard] },
  { path: 'relatorio-despesa', component: DespesasComponent },
  { path: 'relatorio-receita', component: ReceitasComponent },
  { path: 'lancamentos', loadChildren: () => import('./lancamentos/lancamentos.module').then(m => m.LancamentosModule) },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
