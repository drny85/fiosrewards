import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Referral } from './../../models/referral';
import { ReferralsService } from './../../services/referrals.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  referralList;
  show = false;


  constructor(private serv: ReferralsService) { }

  ngOnInit() {

    this.serv.getReferrals('status', '==', 'new').subscribe(newF => {
      this.referralList = newF;
    });
    this.show = true;
  }

  // this.serv.getReferrals('status', '==', 'new').subscribe(newF => {
  //   this.referralList = newF.filter(r => r.name === 'David' || r.name === 'David');
  // });
  // this.show = true;
}
