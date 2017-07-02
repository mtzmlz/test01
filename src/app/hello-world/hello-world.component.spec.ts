import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HellpWorldComponent } from './hellp-world.component';

describe('HellpWorldComponent', () => {
  let component: HellpWorldComponent;
  let fixture: ComponentFixture<HellpWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HellpWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HellpWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
