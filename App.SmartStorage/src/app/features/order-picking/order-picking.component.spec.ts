import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPickingComponent } from './order-picking.component';

describe('OrderPickingComponent', () => {
  let component: OrderPickingComponent;
  let fixture: ComponentFixture<OrderPickingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderPickingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderPickingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
