import { Component } from '@angular/core';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent {

  /**
   * listagem dos tipos
   */
  get tipos(): string[] {
    return ['Alimentação','Habitação','Transporte','Educação','Lazer','Viagem'];
  }
}
