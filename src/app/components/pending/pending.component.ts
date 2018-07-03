import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Referral } from './../../models/referral';
import { ReferralsService } from './../../services/referrals.service';


@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

  referrals: Observable<Referral[]>;
  referralList;
  show = false;
  count: number;
  total: number;
  pendingPercent: number;


  constructor(private serv: ReferralsService, private progress: RoundProgressModule) { }

  ngOnInit() {

    this.serv.getReferrals('status', '==', 'pending').subscribe(ref => {
      this.referralList = ref;
      this.count = ref.length;
    });
    this.serv.getReferrals('status', '>', '').subscribe(ref => {
      this.total = ref.length;
      this.pendingPercent = this.count / this.total * 100;
     });
    this.show = true;

}

}

