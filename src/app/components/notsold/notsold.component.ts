import { Component, OnInit } from '@angular/core';
import { ReferralsService } from './../../services/referrals.service';

@Component({
  selector: 'app-notsold',
  templateUrl: './notsold.component.html',
  styleUrls: ['./notsold.component.css']
})
export class NotsoldComponent implements OnInit {

  referralList;
  show = false;


  constructor(private serv: ReferralsService) { }

  ngOnInit() {

   this.serv.getReferrals().subscribe(ref => {
     this.referralList = ref.filter(r => r.status === 'not sold');
     this.show = true;
    });
  }


}
