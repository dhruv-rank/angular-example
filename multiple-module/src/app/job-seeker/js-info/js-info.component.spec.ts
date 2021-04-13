import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsInfoComponent } from './js-info.component';

describe('JsInfoComponent', () => {
  let component: JsInfoComponent;
  let fixture: ComponentFixture<JsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
