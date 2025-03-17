import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAddressingMapComponent } from './inventory-addressing-map.component';

describe('InventoryAddressingMapComponent', () => {
  let component: InventoryAddressingMapComponent;
  let fixture: ComponentFixture<InventoryAddressingMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryAddressingMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryAddressingMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
