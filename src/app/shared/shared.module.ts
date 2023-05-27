import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modules
import { MaterialModule } from '../material/material.module';
// services
import { DaoService } from './services/dao.service';
import { MenuService } from './services/menu.service';
import { UsuarioService } from './services/usuario.service';
import { AutenticadorGuard } from './security/autenticador-guard';
import { LancamentosService } from './services/lancamentos.service';
import { AutenticadorService } from './services/autenticador.service';
// components
import { MenuComponent } from './components/menu/menu.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoadingComponent } from './components/loading/loading.component';

const components = [
  MenuComponent,
  LogoutComponent,
  LoadingComponent,
];

@NgModule({
  declarations: [
    components
  ],
  exports: [
    components
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [
    DaoService,
    MenuService,
    UsuarioService,
    LancamentosService,
    AutenticadorService,
    AutenticadorGuard
  ]
})
export class SharedModule { }
