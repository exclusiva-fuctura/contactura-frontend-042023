import { UsuarioService } from './../shared/services/usuario.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticadorService } from '../shared/services/autenticador.service';
import { ILogin } from '../shared/models/login.interface';
import { HttpStatusCode } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario!: FormGroup;
  showLoading = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private autenticadorService: AutenticadorService
  ){
    this.initFormulario();
  }

  private initFormulario(): void {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required ,Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  private autenticacao(): void {
    const login: ILogin = this.formulario.value;
    this.autenticadorService.autenticacao(login).subscribe({
      next: (response) => {
        if (response.status === HttpStatusCode.Created) {
          this.usuarioService.token = response.headers.get('authorization');
          this.router.navigate(['/dashboard']);
        }
      },
      error: (err) => {
        Swal.fire('ALERTA!', err.error.mensagem, 'warning');
        this.showLoading = false;
      }
    });
  }

  onEntrar(): void {
    this.showLoading = true;
    this.autenticacao();
  }

  onCadastro(): void {
    this.router.navigate(['cadastro']);
  }
}
