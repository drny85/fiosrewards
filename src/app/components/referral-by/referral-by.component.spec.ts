import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralByComponent } from './referral-by.component';

describe('ReferralByComponent', () => {
  let component: ReferralByComponent;
  let fixture: ComponentFixture<ReferralByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
