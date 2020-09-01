import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDrizzleComponent } from './icon-drizzle.component';

describe('IconDrizzleComponent', () => {
  let component: IconDrizzleComponent;
  let fixture: ComponentFixture<IconDrizzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconDrizzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDrizzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
