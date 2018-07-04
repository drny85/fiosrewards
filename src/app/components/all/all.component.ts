import { ReferralsService } from './../../services/referrals.service';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Referral } from './../../models/referral';



@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  referrals: Observable<Referral[]>;
  tempR: Observable<Referral[]>;
  referralList;

  closed: number;
  total: number;
  closedPercent: number;


  constructor( public progress: RoundProgressModule, private serRef: ReferralsService) {

  }

  ngOnInit() {
    this.serRef.getReferrals('status', '>', '').subscribe(referrals => this.referralList = referrals);

  }

  getNew() {
    this.serRef.getReferrals('status', '==', 'new').subscribe(referrals => this.referralList = referrals);
  }

  getClosed() {
    this.serRef.getReferrals('status', '==', 'closed').subscribe(referrals => this.referralList = referrals);
  }

  getPending() {
    this.serRef.getReferrals('status', '==', 'pending').subscribe(referrals => this.referralList = referrals);
  }

  getProgress() {
    this.serRef.getReferrals('status', '==', 'in progress').subscribe(referrals => this.referralList = referrals);
  }

  getNotSold() {
    this.serRef.getReferrals('status', '==', 'not sold').subscribe(referrals => this.referralList = referrals);
  }


}


