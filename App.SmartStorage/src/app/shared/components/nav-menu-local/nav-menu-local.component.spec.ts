import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuLocalComponent } from './nav-menu-local.component';

describe('NavMenuLocalComponent', () => {
  let component: NavMenuLocalComponent;
  let fixture: ComponentFixture<NavMenuLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMenuLocalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMenuLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
