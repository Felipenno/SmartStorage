import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { InputFieldComponent, InputType } from '@shared/components/input-field/input-field.component';
import { SelectFieldComponent } from '@shared/components/select-field/select-field.component';
import { ProductModel } from '@shared/models/product-model';
import { SelectInputOnsModel } from '@shared/models/select-options-model';
import { ProductAddComponent } from '../components/product-add/product-add.component';


const ELEMENT_DATA: ProductModel[] = [
  {id: 1, code: 'Hydrogen', name:'Hydrogen', active: false },
  {id: 2, code: 'Hydrogen', name:'Hydrogen', active: true },
  {id: 1, code: 'Hydrogen', name:'Hydrogen', active: false },
  {id: 1, code: 'Hydrogen', name:'Hydrogen', active: false },
  {id: 1, code: 'Hydrogen', name:'Hydrogen', active: false },
  {id: 1, code: 'Hydrogen', name:'Hydrogen', active: false },
  {id: 133, code: 'aaaa', name:'Hydrdddddogen', active: true },
  {id: 1, code: 'Hydrogen', name:'Hydrogen', active: false },
  {id: 1, code: 'Hydrogen', name:'Hydrogen', active: false },
  {id: 1, code: 'Hydrogen', name:'Hydrogen', active: false },
  {id: 1, code: 'Hydrogen', name:'Hydrogen', active: false },
  {id: 1, code: 'Hydrogen', name:'Hydrogen', active: false },
  {id: 1, code: 'Hydrogen', name:'Hydrogen', active: false },
  {id: 1, code: 'Hydrogen', name:'Hydrogen', active: false },
  {id: 1, code: 'Hydrogen', name:'Hydrogen', active: false },
  {id: 1, code: 'Hydrogen', name:'Hydrogen', active: false },
  {id: 1, code: 'Hydrogen', name:'Hydrogen', active: false },
  {id: 1, code: 'Hydrogen', name:'Hydrogen', active: false },
  {id: 1, code: 'Hydrogen', name:'Hydrogen', active: false },
  {id: 1, code: 'Hydrogen', name:'Hydrogen', active: false },
  {id: 1, code: 'Hydrogen', name:'Hydrogen', active: false },
  {id: 1, code: 'Hydrogen', name:'Hydrogen', active: false },
  {id: 1, code: 'Hydrogen', name:'Hydrogen', active: false },
  {id: 1, code: 'Hydrogen', name:'Hydrogen', active: false },
  {id: 1, code: 'Hydrogen', name:'Hydrogen', active: false },
  {id: 1, code: 'Hydrogen', name:'Hydrogen', active: false },
  {id: 1, code: 'Hydrogen', name:'Hydrogen', active: false },
  {id: 1, code: 'Hydrogen', name:'Hydrogen', active: false },
];

@Component({
  selector: 'app-product-list',
  imports: [
    MatTableModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    InputFieldComponent,
    SelectFieldComponent,
    MatTooltipModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent  {
  
  private readonly formBuilder = inject(FormBuilder);
  readonly dialog = inject(MatDialog);

  inputTypeText = InputType.TEXT;
  inputTypeNumber = InputType.NUMBER;
  
  protected form = this.formBuilder.group({
    id: [null, [ Validators.min(5), Validators.max(100) ]],
    code: [null, [ Validators.maxLength(100), Validators.minLength(5) ]],
    name: [null, [ Validators.maxLength(240), Validators.minLength(5) ]],
    status: [0, [ Validators.required ]],
  });

  readonly selectOptions:SelectInputOnsModel[] = [
    { value: 0, viewValue: 'Ativo' },
    { value: 1, viewValue: 'Inativo' },
    { value: 2, viewValue: 'Todos' }
  ];

  displayedColumns: string[] = ['id', 'code', 'name', 'active', 'edit'];
  dataSource = ELEMENT_DATA;

  dialogRef:unknown

  search() {
    console.log('form', this.form);
    console.log('form value', this.form.getRawValue());
  }

  newProduct(){
    console.log('productId');
    this.dialogRef =  this.dialog.open(ProductAddComponent, {
      disableClose:true,
      minWidth: '500px'
    })
  }

  editProduct(productId:number){
    console.log('productId', productId);
  }
}
