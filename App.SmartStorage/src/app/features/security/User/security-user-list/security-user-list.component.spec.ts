import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityUserListComponent } from './security-user-list.component';

describe('SecurityUserListComponent', () => {
  let component: SecurityUserListComponent;
  let fixture: ComponentFixture<SecurityUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityUserListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
