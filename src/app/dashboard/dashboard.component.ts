import { Component } from '@angular/core';
import { MenuTypeEnum } from '../shared/enums/menu-type.enum';
import { MenuService } from '../shared/services/menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  dataSourceDespesas: any[] = [];
  dataSourceReceitas: any[] = [];
  displayedColumns = ['data','valor','tipo','fixo','descricao','acoes'];

  constructor(
    private menuService: MenuService
  ) {
    // notificar ao menu em qual componente estou
    this.menuService.ondeEstou = MenuTypeEnum.DASHBOARD;
   }

}
