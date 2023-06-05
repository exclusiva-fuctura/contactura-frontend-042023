import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancamentosRoutingModule } from './lancamentos-routing.module';
import { DespesasComponent } from './despesas/despesas.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DespesasComponent,
    ReceitasComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    LancamentosRoutingModule
  ]
})
export class LancamentosModule { }
