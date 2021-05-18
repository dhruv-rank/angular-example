import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOnpushComponent } from './manager-onpush.component';

describe('ManagerOnpushComponent', () => {
  let component: ManagerOnpushComponent;
  let fixture: ComponentFixture<ManagerOnpushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerOnpushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerOnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
