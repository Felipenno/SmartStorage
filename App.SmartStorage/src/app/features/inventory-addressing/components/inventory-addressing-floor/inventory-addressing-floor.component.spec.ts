import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAddressingFloorComponent } from './inventory-addressing-floor.component';

describe('InventoryAddressingFloorComponent', () => {
  let component: InventoryAddressingFloorComponent;
  let fixture: ComponentFixture<InventoryAddressingFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryAddressingFloorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryAddressingFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
