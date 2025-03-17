import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPickingListComponent } from './order-picking-list.component';

describe('OrderPickingListComponent', () => {
  let component: OrderPickingListComponent;
  let fixture: ComponentFixture<OrderPickingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderPickingListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderPickingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
