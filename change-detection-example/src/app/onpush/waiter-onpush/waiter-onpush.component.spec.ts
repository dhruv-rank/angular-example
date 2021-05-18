import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterOnpushComponent } from './waiter-onpush.component';

describe('WaiterOnpushComponent', () => {
  let component: WaiterOnpushComponent;
  let fixture: ComponentFixture<WaiterOnpushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaiterOnpushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiterOnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
