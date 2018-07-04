import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Referral } from './../../models/referral';
import { ReferralsService } from './../../services/referrals.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-closed-referrals',
  templateUrl: './closed-referrals.component.html',
  styleUrls: ['./closed-referrals.component.css']
})
export class ClosedReferralsComponent implements OnInit {

  referrals: Observable<Referral[]>;
  referralList;
  show = false;


  constructor(private serv: ReferralsService) { }

  ngOnInit() {

    this.serv.getReferrals('status', '==', 'closed').subscribe(closed => this.referralList = closed );
    this.show = true;

  }

}
