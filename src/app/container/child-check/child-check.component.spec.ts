import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCheckComponent } from './child-check.component';

describe('ChildCheckComponent', () => {
  let component: ChildCheckComponent;
  let fixture: ComponentFixture<ChildCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
