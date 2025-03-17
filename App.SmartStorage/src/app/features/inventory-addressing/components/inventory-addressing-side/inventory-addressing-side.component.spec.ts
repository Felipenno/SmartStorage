import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAddressingSideComponent } from './inventory-addressing-side.component';

describe('InventoryAddressingSideComponent', () => {
  let component: InventoryAddressingSideComponent;
  let fixture: ComponentFixture<InventoryAddressingSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryAddressingSideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryAddressingSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
