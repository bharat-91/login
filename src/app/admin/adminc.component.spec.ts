import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincComponent } from './adminc.component';

describe('AdmincComponent', () => {
  let component: AdmincComponent;
  let fixture: ComponentFixture<AdmincComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmincComponent]
    });
    fixture = TestBed.createComponent(AdmincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
