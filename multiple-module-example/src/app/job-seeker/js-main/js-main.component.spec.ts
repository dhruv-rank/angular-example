import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsMainComponent } from './js-main.component';

describe('JsMainComponent', () => {
  let component: JsMainComponent;
  let fixture: ComponentFixture<JsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
