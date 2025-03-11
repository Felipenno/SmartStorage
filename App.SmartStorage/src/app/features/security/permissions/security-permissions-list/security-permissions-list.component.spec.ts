import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityPermissionsListComponent } from './security-permissions-list.component';

describe('SecurityPermissionsListComponent', () => {
  let component: SecurityPermissionsListComponent;
  let fixture: ComponentFixture<SecurityPermissionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityPermissionsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityPermissionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
