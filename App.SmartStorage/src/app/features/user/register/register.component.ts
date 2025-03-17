import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private readonly formBuilder = inject(FormBuilder);
  
  form = this.formBuilder.group({
    name: ['', [Validators.required,Validators.maxLength(240), Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(240), Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(5)]],
    password_same: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(5)]]
  });
}
