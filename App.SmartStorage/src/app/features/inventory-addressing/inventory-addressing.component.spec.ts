import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAddressingComponent } from './inventory-addressing.component';

describe('InventoryAddressingComponent', () => {
  let component: InventoryAddressingComponent;
  let fixture: ComponentFixture<InventoryAddressingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryAddressingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryAddressingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
