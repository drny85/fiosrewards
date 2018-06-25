import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotsoldComponent } from './notsold.component';

describe('NotsoldComponent', () => {
  let component: NotsoldComponent;
  let fixture: ComponentFixture<NotsoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotsoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotsoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
