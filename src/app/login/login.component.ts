import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ){
    this.initFormulario();
  }

  private initFormulario(): void {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required ,Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onEntrar(): void {
    this.router.navigate(['/dashboard']);
  }
}
