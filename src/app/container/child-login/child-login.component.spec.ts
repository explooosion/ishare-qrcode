import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLoginComponent } from './child-login.component';

describe('ChildLoginComponent', () => {
  let component: ChildLoginComponent;
  let fixture: ComponentFixture<ChildLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
