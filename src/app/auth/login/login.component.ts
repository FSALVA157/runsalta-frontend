import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Message } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { LoginService } from '../services/login.service';
import { ILogin } from '../interfaces/login.interface';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      :host ::ng-deep .pi-eye,
      :host ::ng-deep .pi-eye-slash {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
      }
      .form-element{
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
      }      
    `,
  ],
})
export class LoginComponent implements OnInit {
  valCheck: string[] = ['remember'];
  forma!: FormGroup;

  //atributo que llena el modal p-message de primeng
  msgs: Message[] = [];

  

  constructor(
    public layoutService: LayoutService,
    private loginService: LoginService,
    private fb: FormBuilder,
  ) {
    this.crearFormulario();
  }
  ngOnInit(): void {}

  crearFormulario(){
    this.forma = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2)], []],
      password: ['', [Validators.required, Validators.minLength(5)], []],
      remember: ['false']
    });
  }

  //metodo validador de campos del formulario
  isValidField(field: string): boolean | null {
    return (
      this.forma.controls[field].errors && this.forma.controls[field].touched
    );
  }

  showSuccessViaMessages() {
    this.msgs = [];
    this.msgs.push({
      severity: 'success',
      summary: 'Login Exitoso!',
      detail: 'Puede Iniciar Sesión',
    });
  }

  showErrorViaMessages(mensaje: string) {
    this.msgs = [];
    this.msgs.push({
      severity: 'error',
      summary: 'Login Fallido!',
      detail: mensaje,
    });
  }

  submitLogin(){
    const data = this.forma.value
    if(this.forma.invalid){
        this.forma.markAllAsTouched();
        return
    }    
    //quitemos el campo remember de la data
    delete data.remember

    this.loginService.postLogin(this.forma.value).subscribe({
      next: (resultado) => {
        console.log(resultado)
        this.showSuccessViaMessages();
        
      },
      error: (err) => {
        const error_message = err.error.error.message;
        this.showErrorViaMessages(error_message);
      },
    })


  }

  getFieldError(field_name: string): string | null {
    if (!this.forma.controls[field_name]) return null;
    const errors = this.forma.controls[field_name].errors || {};
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'El campo es requerido';
        case 'minlength':
          return `El campo debe de tener al menos  ${errors['minlength'].requiredLength} letras`;
      }
    }
    return '';
  }

  

}
