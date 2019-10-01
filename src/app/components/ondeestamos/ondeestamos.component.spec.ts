import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OndeestamosComponent } from './ondeestamos.component';

describe('OndeestamosComponent', () => {
  let component: OndeestamosComponent;
  let fixture: ComponentFixture<OndeestamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OndeestamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OndeestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
