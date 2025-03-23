import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { InputFieldComponent, InputType } from '@shared/components/input-field/input-field.component';
import { SelectInputOnsModel } from '@shared/models/select-options-model';
import { DateFieldComponent } from "../../../../shared/components/date-field/date-field.component";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductModel } from '@shared/models/product-model';

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
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent implements OnInit {
  
  readonly dialogRef = inject(MatDialogRef<ProductFormComponent>);
  private readonly formBuilder = inject(FormBuilder);
  productData = inject<ProductModel>(MAT_DIALOG_DATA)

  inputTypeText = InputType.TEXT;
  inputTypeNumber = InputType.NUMBER;

  /* protected form = this.formBuilder.group<ProductModel>({
      code:       ['null', [ Validators.required, Validators.maxLength(100), Validators.minLength(5) ]],
      name:       [null, [ Validators.required, Validators.maxLength(240), Validators.minLength(5) ]],
      startDate:  [null, [ Validators.required ]],
      endDate:    new FormControl('', {nonNullable: true}),
  }); */

  protected form = this.formBuilder.group({
    id:       new FormControl(this.productData?.id),
    code:       new FormControl(this.productData?.code, [ Validators.required, Validators.maxLength(100), Validators.minLength(5) ],),
    name:       new FormControl(this.productData?.name, [ Validators.required, Validators.maxLength(240), Validators.minLength(5) ]),
    startDate:  new FormControl(this.productData?.startDate, [ Validators.required ]),
    endDate:    new FormControl(this.productData?.endDate),
});

  readonly selectOptions:SelectInputOnsModel[] = [
      { value: 0, viewValue: 'Ativo' },
      { value: 1, viewValue: 'Inativo' },
  ];

  ngOnInit(): void {
    console.log('productData', this.productData);

    if(this.productData?.id){
      this.form.patchValue(this.productData);
    }
  }

  closeDialog(){
    this.dialogRef.close();
  }

  saveProduct(){
    console.log('saveProduct', this.form.getRawValue())
  }
  
}
