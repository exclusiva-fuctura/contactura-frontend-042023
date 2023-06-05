import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';
import { DinheiroDirective } from './directives/dinheiro.directive';
import { MaiusculoDirective } from './directives/maiusculo.directive';
// currency options
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

const components = [
  MenuComponent,
  LogoutComponent,
  LoadingComponent,
];

const directives = [
  DinheiroDirective,
  MaiusculoDirective
];


@NgModule({
  declarations: [
    components,
    directives
  ],
  exports: [
    components,
    directives
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [
    DaoService,
    MenuService,
    UsuarioService,
    LancamentosService,
    AutenticadorService,
    AutenticadorGuard,
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ]
})
export class SharedModule { }
