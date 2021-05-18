import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOnpushComponent } from './customer-onpush.component';

describe('CustomerOnpushComponent', () => {
  let component: CustomerOnpushComponent;
  let fixture: ComponentFixture<CustomerOnpushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerOnpushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
