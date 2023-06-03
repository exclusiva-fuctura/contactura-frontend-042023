import { Component } from '@angular/core';
import { MenuTypeEnum } from 'src/app/shared/enums/menu-type.enum';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent {

  dataSource: any[] = [];
  displayedColumns = ['data','valor','tipo','fixo','descricao','acoes'];
  constructor(
    private menuService: MenuService
  ) {
    // notificar ao menu em qual componente estou
    this.menuService.ondeEstou = MenuTypeEnum.RELATORIO_DESPESA;
   }
}
