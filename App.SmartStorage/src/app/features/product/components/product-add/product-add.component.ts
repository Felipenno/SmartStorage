import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { InputFieldComponent, InputType } from '@shared/components/input-field/input-field.component';
import { SelectInputOnsModel } from '@shared/models/select-options-model';
import { DateFieldComponent } from "../../../../shared/components/date-field/date-field.component";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-add',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    InputFieldComponent,
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule,
    DateFieldComponent,
],
  providers: [provideNativeDateAdapter()],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.scss'
})
export class ProductAddComponent {

  readonly dialogRef = inject(MatDialogRef<ProductAddComponent>);
  private readonly formBuilder = inject(FormBuilder);

  inputTypeText = InputType.TEXT;
  inputTypeNumber = InputType.NUMBER;

  protected form = this.formBuilder.group({
      code:       [null, [ Validators.required, Validators.maxLength(100), Validators.minLength(5) ]],
      name:       [null, [ Validators.required, Validators.maxLength(240), Validators.minLength(5) ]],
      startDate:  [null, [ Validators.required ]],
      endDate:    [null, [ Validators.required ]],
  });

  readonly selectOptions:SelectInputOnsModel[] = [
      { value: 0, viewValue: 'Ativo' },
      { value: 1, viewValue: 'Inativo' },
  ];

  closeDialog(){
    this.dialogRef.close();
  }
  
}
