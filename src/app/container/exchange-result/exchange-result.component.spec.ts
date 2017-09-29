import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeResultComponent } from './exchange-result.component';

describe('ExchangeResultComponent', () => {
  let component: ExchangeResultComponent;
  let fixture: ComponentFixture<ExchangeResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
