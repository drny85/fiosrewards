import { Location } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Referral } from './../../models/referral';
import { ReferralsService } from './../../services/referrals.service';




@Component({
  selector: 'app-inprogress',
  templateUrl: './inprogress.component.html',
  styleUrls: ['./inprogress.component.css']
})
export class InprogressComponent implements OnInit {

  referrals: Observable<Referral[]>;
  referralList;
  show = false;
  count: number;


  constructor(private serv: ReferralsService, private location: Location) { }

  ngOnInit() {

    this.serv.getReferrals().subscribe(ref => {
      this.referralList = ref.filter(r => r.status === 'in progress');
      this.count = ref.length;
      this.show = true;
      console.log(this.count);
    });
  }

  goBack() {
    this.location.back();
  }

}
