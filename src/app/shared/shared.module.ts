import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MenuComponent } from './components/menu/menu.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MenuService } from './services/menu.service';

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
    MenuService
  ]
})
export class SharedModule { }
