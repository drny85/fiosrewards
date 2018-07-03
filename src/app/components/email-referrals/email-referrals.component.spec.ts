import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailReferralsComponent } from './email-referrals.component';

describe('EmailReferralsComponent', () => {
  let component: EmailReferralsComponent;
  let fixture: ComponentFixture<EmailReferralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailReferralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailReferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
