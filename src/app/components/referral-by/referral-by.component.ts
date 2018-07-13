import { ReferralsService } from './../../services/referrals.service';
import { Component, OnInit } from '@angular/core';
import { Sender } from '../../models/sender';

@Component({
  selector: 'app-referral-by',
  templateUrl: './referral-by.component.html',
  styleUrls: ['./referral-by.component.css']
})
export class ReferralByComponent implements OnInit {

  referralList;
  show = false;
  count: number;
  senders: Sender[];

  constructor(private serv: ReferralsService ) { }

  ngOnInit() {

    this.serv.getSenders().subscribe(ref => this.senders = ref);
  }

  filterBy(e) {
    const name: string = e.target.innerText;
    if ( name !== undefined ) {
    console.log(e.target.innertext);
    this.serv.getReferrals().subscribe(ref => this.referralList = ref.filter(r => r.referredBy === name));
    this.show = true;

    } else {
      this.serv.getReferrals().subscribe(ref => this.referralList = ref.filter(r => r.referredBy === 'anthony williams'));
      this.show = true;
    }
  }

}
