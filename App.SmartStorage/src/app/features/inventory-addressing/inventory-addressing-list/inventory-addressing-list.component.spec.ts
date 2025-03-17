import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAddressingListComponent } from './inventory-addressing-list.component';

describe('InventoryAddressingListComponent', () => {
  let component: InventoryAddressingListComponent;
  let fixture: ComponentFixture<InventoryAddressingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryAddressingListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryAddressingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
