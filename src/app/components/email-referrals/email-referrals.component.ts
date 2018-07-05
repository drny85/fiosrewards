import { Location } from '@angular/common';
import { ReferralsService } from './../../services/referrals.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-referrals',
  templateUrl: './email-referrals.component.html',
  styleUrls: ['./email-referrals.component.css']
})
export class EmailReferralsComponent implements OnInit {

  referralList;
  show = false;
  count: number;


  constructor(private serv: ReferralsService, private location: Location) { }

  ngOnInit() {

    this.serv.getReferrals().subscribe(ref => {
      this.referralList = ref.filter(r => r.email.length > 5);
      this.count = ref.length;
      this.show = true;
    });
  }

  goBack() {
    this.location.back();
  }

}
