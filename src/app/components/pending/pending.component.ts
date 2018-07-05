import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { Component, OnInit } from '@angular/core';
import { ReferralsService } from './../../services/referrals.service';


@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

  referralList;
  show = false;
  count: number;
  total: number;
  pendingPercent: number;


  constructor(private serv: ReferralsService, private progress: RoundProgressModule) { }

  ngOnInit() {

    this.serv.getReferrals().subscribe(ref => {
      this.referralList = ref.filter(r => r.status === 'pending');
      this.count = ref.filter(r => r.status === 'pending').length;
      this.total = ref.length;
      this.pendingPercent = this.count / this.total * 100;
      this.show = true;
    });

}

}

