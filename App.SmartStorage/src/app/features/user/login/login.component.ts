import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { InputFieldComponent, InputType } from '@shared/components/input-field/input-field.component';

@Component({
  selector: 'app-login',
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterLink,
    InputFieldComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  private readonly formBuilder = inject(FormBuilder);

  inputTypePassword = InputType.PASSWORD;
  inputTypeEmail = InputType.EMAIL;

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email, Validators.maxLength(240), Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(5)]]
  });
}
