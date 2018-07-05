import { ReferralsService } from './../../services/referrals.service';
import { Component, OnInit } from '@angular/core';
import { RoundProgressModule } from 'angular-svg-round-progressbar';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  closed = 0;
  total = 0;
  pending = 0;
  inProgress = 0;
  notSold = 0;
  newReferral = 0;
  closedReferralTotal;
  newReferralTotal;
  pendingReferralTotal;
  inProgressReferralTotal;
  notSoldReferralTotal;

  constructor(private serv: ReferralsService, private progress: RoundProgressModule) {
  }

  ngOnInit() {
    this.serv.getReferrals().forEach((r) => {
      this.total = r.length;
      r.forEach((referral => {
        if (referral.status === 'closed') {
          this.closed++;
          this.closedReferralTotal = this.closed / this.total * 100;
        }
        if (referral.status === 'pending') {
          this.pending++;
          this.pendingReferralTotal = this.pending / this.total * 100;
        }
        if (referral.status === 'in progress') {
          this.inProgress++;
          this.inProgressReferralTotal = this.inProgress / this.total * 100;
        }
        if (referral.status === 'not sold') {
           this.notSold++;
           this.notSoldReferralTotal = this.notSold / this.total * 100;
        }
        if (referral.status === 'new') {
          this.newReferral++;
          this.newReferralTotal = this.newReferral / this.total * 100;
        }

      }));
    });
  }

}
