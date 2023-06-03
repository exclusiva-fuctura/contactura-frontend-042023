import { IDespesa } from "./shared/models/despesa.interface";
import { IReceita } from "./shared/models/receita.interface";
import { OperacaoTypeEnum } from "./shared/operacao-type.enum";

export class AppState {

  token = '';
  operacao = OperacaoTypeEnum.SALVAR;

  // lancamentos selecionados
  despesaSelecionada!: IDespesa;
  receitaSelecionada!: IReceita;
}
