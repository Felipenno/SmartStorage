import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { InputFieldComponent, InputType } from '@shared/components/input-field/input-field.component';
import { SelectFieldComponent } from '@shared/components/select-field/select-field.component';
import { ProductModel } from '@shared/models/product-model';
import { SelectInputOnsModel } from '@shared/models/select-options-model';
import { ProductFormComponent } from '../components/product-form/product-form.component';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { GlobalLoadingService } from '@core/services/global-loading/global-loading.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalMessageService } from '@core/services/global-message/global-message.service';


const ELEMENT_DATA: ProductModel[] = [
  {id: 789090, code: 'sgsgesgedg', name:'5765jgfdhdser', active: false, startDate : new Date(), endDate: undefined },
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
    MatTooltipModule,
    MatPaginatorModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  
  private readonly globalLoading = inject(GlobalLoadingService);
  private readonly msgService = inject(GlobalMessageService);

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
  dataSource:ProductModel[] = [];

  readonly pageSizeOptions = [10, 15, 20];
  itemsPerPage = 15;
  length = 0;
  pageIndex = 0;
  //dialogRef:unknown

  ngOnInit(): void {
    this.search();
    
  }

  search() {
    //console.log('form', this.form);
    //console.log('form value', this.form.getRawValue());

    this.length = ELEMENT_DATA.length;
    const currentIndex = (this.pageIndex) * this.itemsPerPage;

    this.dataSource = ELEMENT_DATA.slice(currentIndex, currentIndex + this.itemsPerPage);

    this.globalLoading.showLoading();

    setTimeout(() => {
      this.globalLoading.hideLoading();
    }, 2000);
  }

  newProduct(){
    console.log('productId');
    this.dialog.open(ProductFormComponent, {
      disableClose:true,
      minWidth: '500px'
    }).afterClosed().subscribe( () => console.log('newProduct fechado!!'))




    this.msgService.success('Produto criado com sucesso');

  }

  editProduct(productId:number){
    console.log('productId');
    this.dialog.open(ProductFormComponent, {
      disableClose:true,
      minWidth: '500px',
      data: this.dataSource.find(x => x.id === productId)
    }).afterClosed().subscribe( () => console.log('newProduct fechado!!'))
  }

  handlePageEvent(e: PageEvent) {
    //this.pageEvent = e;
    this.itemsPerPage = e.pageSize;
    //this.length = e.length;
    this.pageIndex = e.pageIndex;

    console.log('handlePageEvent', e);

    this.search();
  }

}