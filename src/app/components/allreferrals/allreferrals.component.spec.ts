import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReferralsComponent } from './allreferrals.component';

describe('AllReferralsComponent', () => {
  let component: AllReferralsComponent;
  let fixture: ComponentFixture<AllReferralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllReferralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllReferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
