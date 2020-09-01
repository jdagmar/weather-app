import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAtmosphereComponent } from './icon-atmosphere.component';

describe('IconAtmosphereComponent', () => {
  let component: IconAtmosphereComponent;
  let fixture: ComponentFixture<IconAtmosphereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconAtmosphereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconAtmosphereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
