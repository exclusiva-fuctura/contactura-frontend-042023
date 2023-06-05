import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { MenuTypeEnum } from 'src/app/shared/enums/menu-type.enum';
import { IReceita } from 'src/app/shared/models/receita.interface';
import { LancamentosService } from 'src/app/shared/services/lancamentos.service';
import { MenuService } from 'src/app/shared/services/menu.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent {

  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private menuService: MenuService,
    private activatedRoute: ActivatedRoute,
    private lancamentosService: LancamentosService
  ) {
    // notificar ao menu em qual componente estou
    this.menuService.ondeEstou = MenuTypeEnum.LANCAMENTO_RECEITA;
    this.iniciarFormulario();

    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.verificarModoEdicao();
    } else {
      this.lancamentosService.modoEdicao = false;
    }
  }

  /**
   * label do botão dinâmico
   */
  get buttonLabel(): string {
    return this.lancamentosService.modoEdicao ? 'Editar' : 'Salvar';
  }

  /**
   * listagem dos tipos
   */
  get tipos(): string[] {
    return ['Salario','Extra','Doação','Emprestimo','Investimento'];
  }

  /**
   * iniciar os campos do formulario
   */
  private iniciarFormulario(): void {
    const hoje = moment().format();
    this.formulario = this.formBuilder.group({
      tipo: ['', Validators.required],
      ehFixo: false,
      data: hoje,
      descricao: ['', Validators.required],
      valor: ['', Validators.required]
    });
  }

  /**
   * Carregar o formulario com a receita enviada
   * @param receita dado enviado para carregar o formulario
   */
  private carregarFormulario(receita: IReceita): void {
    if (receita) {
      const valor = new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2}).format(receita.valor);
      this.formulario.patchValue({
        tipo: receita.tipo,
        descricao: receita.descricao,
        ehFixo: receita.ehFixo,
        data: receita.data,
        valor: valor
      });
    }
  }

  /**
   * verificar se a chamada está no modo de ediçao e carregar o formulario com os dados da receita
   */
  private verificarModoEdicao(): void {
    if (this.lancamentosService.modoEdicao) {
      const receita = this.lancamentosService.receitaSelecionada;
      this.carregarFormulario(receita);
    }
  }

  /**
   * Criar uma receita
   * @param receita objeto para ser criado
   */
  private salvar(receita: IReceita): void {
    this.lancamentosService.criarReceita(receita).subscribe({
      next: (resp) => {
        const receitaStored = resp.body;
        Swal.fire(
          'SUCESSO: Criar Receita',
          `Receita criada com sucesso. Código: '${receitaStored?.id}'`,
          'success'
          );
        // limpar os campos do formulario
        this.onLimpar();
      },
      error: (err: HttpErrorResponse) => {
        let msg = err.error.error;
        if (err.status === HttpStatusCode.BadRequest && err.error.error.includes('Bad Request')) {
          msg = 'Usuario não autenticado';
        }
        Swal.fire(
          'ALERTA: Criar Receita',
          err.error.mensagem ? err.error.mensagem : 'Ocorreu um erro inesperado. [ ' + msg + ' ]',
          'warning'
          );
      }
    });
  }

  /**
   * Realizar atualização da despesa
   * @param receita objeto para ser atualizado
   */
  private atualizar(receita: IReceita): void {
    this.lancamentosService.atualizarReceita(receita).subscribe({
      next: (resp) => {
        if (resp.status === HttpStatusCode.Ok){
          // limpar o formulario
          this.formulario.reset();
          // mensagem
          Swal.fire(
            'Atualizar Receita',
            'Receita atualizada com sucesso!',
            'success'
            );
        }
      },
      error: (err) => {
        Swal.fire(
          'ALERTA: Atualizar Receita',
          err.error.mensagem ? err.error.mensagem : 'Ocorreu um erro inesperado. [ ' + err.error.error + ' ]',
          'warning'
          );
      }
    });
  }

  /**
   * evento do botao salvar
   */
  onSalvar(): void {
    const receita: IReceita = this.formulario.value;
    // formatar o valor
    receita.valor = +(receita.valor.toString().replace('.','').replace(',','.'));
    // formatar a data
    receita.data = moment(receita.data).format('YYYY-MM-DD');
    // verificar se o formulário esta em modo de edição
    if (this.lancamentosService.modoEdicao) {
      receita.id = this.lancamentosService.receitaSelecionada.id;
      this.atualizar(receita);
    } else {
      this.salvar(receita);
    }
  }

  /**
   * evento do botao limpar
   */
  onLimpar(): void {
    this.formulario.reset();
    this.formulario.patchValue({
      data: moment().format(),
      ehFixo: false
    });
  }
}
