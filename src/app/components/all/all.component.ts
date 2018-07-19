import { async } from '@angular/core/testing';
import { FormsModule } from '@angular/Forms';
import { ReferralsService } from './../../services/referrals.service';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  referralList;

  closed: number;
  total: number;
  closedPercent: number;
  search: string;
  senders;


  constructor( public progress: RoundProgressModule, private serRef: ReferralsService) {

  }

   ngOnInit() {

    this.serRef.getReferrals().subscribe(referrals => this.referralList = referrals.filter(r => r.referredBy !== '0ther'));
    this.serRef.getSenders().subscribe(ref => this.senders = ref);
  }

  getNew() {
    this.serRef.getReferrals().subscribe(referrals => this.referralList = referrals.filter(r => r.status === 'new'));
  }

  getClosed() {
    this.serRef.getReferrals().subscribe(referrals => this.referralList = referrals.filter(r => r.status === 'closed'));
  }

  getPending() {
    this.serRef.getReferrals().subscribe(referrals => this.referralList = referrals.filter(r => r.status === 'pending'));
  }

  getProgress() {
    this.serRef.getReferrals().subscribe(referrals => this.referralList = referrals.filter(r => r.status === 'in progress'));
  }

  getNotSold() {
    this.serRef.getReferrals().subscribe(referrals => this.referralList = referrals.filter(r => r.status === 'not sold'));
  }

  onSearch(e) {
    this.search = e.target.value;
    if ( this.search.length > 0 ) {
      this.serRef.getReferrals().subscribe(ref => {
        this.referralList = ref.filter(status => status.name.toLowerCase().includes(this.search.toLowerCase()) || status.address.apt.includes(this.search.toLowerCase()));

      });
    } else {
      this.serRef.getReferrals().subscribe(ref => this.referralList = ref);
    }
  }

}


