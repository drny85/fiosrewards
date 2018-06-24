import { ReferralsService } from './../../services/referrals.service';
import { Referral } from '../../models/referral';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-all-referrals',
  templateUrl: './all-referrals.component.html',
  styleUrls: ['./all-referrals.component.css']
})
export class AllReferralsComponent implements OnInit {

  referrals: Referral[];

  constructor(private refServ: ReferralsService) { }

  ngOnInit() {

    this.refServ.getReferrals().subscribe(ref =>
      this.referrals = ref
    );

  }

}
