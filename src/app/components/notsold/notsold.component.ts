import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Referral } from './../../models/referral';
import { ReferralsService } from './../../services/referrals.service';

@Component({
  selector: 'app-notsold',
  templateUrl: './notsold.component.html',
  styleUrls: ['./notsold.component.css']
})
export class NotsoldComponent implements OnInit {

  referralsCollection: AngularFirestoreCollection<Referral>;
  referrals: Observable<Referral[]>;
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
