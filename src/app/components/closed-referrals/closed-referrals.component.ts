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

    this.serv.getReferrals().subscribe(closed => this.referralList = closed.filter(r => r.status === 'closed') );
    this.show = true;

  }

}
