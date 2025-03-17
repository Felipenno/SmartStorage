import { CommonModule } from '@angular/common';
import { Component, inject, input, OnInit, signal } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input-field',
  imports: [
    MatInputModule, 
    MatFormFieldModule, 
    FormsModule,
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
})
export class InputFieldComponent implements ControlValueAccessor, OnInit {
  
  protected ngControl = inject(NgControl, {optional: true});

  hidePassword = signal(true);
  label = input('');
  outline = input(false);
  inputType = input.required<InputType>();

  
  protected onTouched?: () => object;
  protected onChange?: (value:unknown) => void;
  protected inputValue:unknown = '';
  protected isDisabled = false;
  protected labelInput = '';
  
  constructor() {
    if (this.ngControl) { 
      this.ngControl.valueAccessor = this; 
    }
  }

  ngOnInit(): void {
    this.labelInput = this.ngControl?.control?.hasValidator(Validators.required) ? `${this.label()}*` : this.label();
  }

  writeValue(obj: unknown): void {
    this.inputValue = obj;
  }

  registerOnChange(fn: (_: unknown) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => object): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  changePasswordVisibility(event: MouseEvent) {
    this.hidePassword.set(!this.hidePassword());
    event.stopPropagation();
  }

  getErrorMessage() : string {
    let message = '';

    if(this.ngControl?.control?.touched && this.ngControl?.control?.hasError('required')){
      message = 'Campo obrigatório';
    }
    else if(this.ngControl?.control?.touched && this.ngControl?.control?.hasError('email')){
      message = 'E-mail inválido';
    }
    else if(this.ngControl?.control?.touched && this.ngControl?.control?.hasError('minlength')){
      message = `Mínimo de ${this.ngControl?.control?.getError('minlength').requiredLength} caracteres`;
    }
    else if(this.ngControl?.control?.touched && this.ngControl?.control?.hasError('maxlength')){
      message = `Máximo de ${this.ngControl?.control?.getError('maxlength').requiredLength} caracteres`;
    }
    else if(this.ngControl?.control?.touched && this.ngControl?.control?.hasError('passwordsNotMatch')){
      message = 'As senhas estão diferentes';
    }
    else if(this.ngControl?.control?.touched && this.ngControl?.control?.hasError('min')){
      message = `Número mínimo é ${this.ngControl?.control?.getError('min').min}`;
    }
    else if(this.ngControl?.control?.touched && this.ngControl?.control?.hasError('max')){
      message = `Número máximo é ${this.ngControl?.control?.getError('max').max}`;
    }

    return message;
  }
}

export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email',
  NUMBER = 'number'
}