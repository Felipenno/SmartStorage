import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityFunctionalityListComponent } from './security-functionality-list.component';

describe('SecurityFunctionalityListComponent', () => {
  let component: SecurityFunctionalityListComponent;
  let fixture: ComponentFixture<SecurityFunctionalityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityFunctionalityListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityFunctionalityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
