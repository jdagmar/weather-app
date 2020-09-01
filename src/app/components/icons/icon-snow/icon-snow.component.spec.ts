import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSnowComponent } from './icon-snow.component';

describe('IconSnowComponent', () => {
  let component: IconSnowComponent;
  let fixture: ComponentFixture<IconSnowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconSnowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
