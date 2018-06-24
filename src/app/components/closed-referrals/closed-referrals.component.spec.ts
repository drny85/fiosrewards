import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedReferralsComponent } from './closed-referrals.component';

describe('ClosedReferralsComponent', () => {
  let component: ClosedReferralsComponent;
  let fixture: ComponentFixture<ClosedReferralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedReferralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedReferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
