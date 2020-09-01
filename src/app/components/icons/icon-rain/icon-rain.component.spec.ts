import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconRainComponent } from './icon-rain.component';

describe('IconRainComponent', () => {
  let component: IconRainComponent;
  let fixture: ComponentFixture<IconRainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconRainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconRainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
