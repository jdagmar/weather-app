import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconThunderstormComponent } from './icon-thunderstorm.component';

describe('IconThunderstormComponent', () => {
  let component: IconThunderstormComponent;
  let fixture: ComponentFixture<IconThunderstormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconThunderstormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconThunderstormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
