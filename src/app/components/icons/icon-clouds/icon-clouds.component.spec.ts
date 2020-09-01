import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCloudsComponent } from './icon-clouds.component';

describe('IconCloudsComponent', () => {
  let component: IconCloudsComponent;
  let fixture: ComponentFixture<IconCloudsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconCloudsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCloudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
