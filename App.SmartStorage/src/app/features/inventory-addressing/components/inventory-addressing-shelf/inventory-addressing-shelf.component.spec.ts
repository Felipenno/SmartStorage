import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAddressingShelfComponent } from './inventory-addressing-shelf.component';

describe('InventoryAddressingShelfComponent', () => {
  let component: InventoryAddressingShelfComponent;
  let fixture: ComponentFixture<InventoryAddressingShelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryAddressingShelfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryAddressingShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
