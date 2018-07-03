import { ReferralsService } from './../../services/referrals.service';
import { Referral } from '../../models/referral';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-allreferrals',
  templateUrl: './allreferrals.component.html',
  styleUrls: ['./allreferrals.component.css']
})
export class AllReferralsComponent implements OnInit {

  referrals: Referral[];

  constructor(private refServ: ReferralsService) { }

  ngOnInit() {

    this.refServ.getReferrals('status', '>', '').subscribe(ref =>
      this.referrals = ref
    );

  }

}
