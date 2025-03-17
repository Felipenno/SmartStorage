import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAddressingSlotComponent } from './inventory-addressing-slot.component';

describe('InventoryAddressingSlotComponent', () => {
  let component: InventoryAddressingSlotComponent;
  let fixture: ComponentFixture<InventoryAddressingSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryAddressingSlotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryAddressingSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
