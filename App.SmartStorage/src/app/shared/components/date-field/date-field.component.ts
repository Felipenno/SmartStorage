import { CommonModule } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-date-field',
  imports: [
    MatFormFieldModule, 
    FormsModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule
  ],
  templateUrl: './date-field.component.html',
  styleUrl: './date-field.component.scss'
})
export class DateFieldComponent implements ControlValueAccessor, OnInit  {

  protected ngControl = inject(NgControl, {optional: true});
    
  label = input('');

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

  getErrorMessage() : string {
    let message = '';

    if(this.ngControl?.control?.touched && this.ngControl?.control?.hasError('required')){
      message = 'Campo obrigatório';
    }

    return message;
  }
}
