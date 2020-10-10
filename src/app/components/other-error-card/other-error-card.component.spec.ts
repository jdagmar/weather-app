import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherErrorCardComponent } from './other-error-card.component';

describe('OtherErrorCardComponent', () => {
  let component: OtherErrorCardComponent;
  let fixture: ComponentFixture<OtherErrorCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherErrorCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherErrorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
