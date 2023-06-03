import { Component } from '@angular/core';
import { MenuTypeEnum } from 'src/app/shared/enums/menu-type.enum';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent {

  constructor(
    private menuService: MenuService
  ) {
    // notificar ao menu em qual componente estou
    this.menuService.ondeEstou = MenuTypeEnum.LANCAMENTO_RECEITA;
   }

  /**
   * listagem dos tipos
   */
  get tipos(): string[] {
    return ['Alimentação','Habitação','Transporte','Educação','Lazer','Viagem'];
  }
}
