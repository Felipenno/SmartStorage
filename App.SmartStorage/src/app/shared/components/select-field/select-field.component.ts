import { Component, inject, input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SelectInputOnsModel } from '@shared/models/select-options-model';

@Component({
  selector: 'app-select-field',
  imports: [
      MatInputModule, 
      MatFormFieldModule, 
      FormsModule,
      MatSelectModule
    ],
  templateUrl: './select-field.component.html',
  styleUrl: './select-field.component.scss'
})
export class SelectFieldComponent implements ControlValueAccessor, OnInit{

    protected ngControl = inject(NgControl, {optional: true});
  
    label = input('');
    options = input.required<SelectInputOnsModel[]>();

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
