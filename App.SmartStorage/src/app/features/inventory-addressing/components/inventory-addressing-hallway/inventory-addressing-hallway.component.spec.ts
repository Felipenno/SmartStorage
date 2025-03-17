import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAddressingHallwayComponent } from './inventory-addressing-hallway.component';

describe('InventoryAddressingHallwayComponent', () => {
  let component: InventoryAddressingHallwayComponent;
  let fixture: ComponentFixture<InventoryAddressingHallwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryAddressingHallwayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryAddressingHallwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
