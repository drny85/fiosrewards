import { ReferralsService } from './../../services/referrals.service';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Referral } from './../../models/referral';



@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  referralsCollection: AngularFirestoreCollection<Referral>;
  referrals: Observable<Referral[]>;
  tempR: Observable<Referral[]>;
  referralList;

  closed: number;
  total: number;
  closedPercent: number;


  constructor(private afs: AngularFirestore, public progress: RoundProgressModule, private serRef: ReferralsService) {

  }

  ngOnInit() {
    this.referralsCollection = this.afs.collection('customer', ref => {
      ref.where('status', '==', 'closed').get().then(c => this.closed = c.size);
      ref.get().then(total => {
        this.total = total.size;
        this.closedPercent = this.closed / this.total * 100;
      });
      return ref.orderBy('moveIn');


    });
    this.referralsCollection.snapshotChanges().pipe(map(changes => changes.map(
      a => {const data = a.payload.doc.data();
          data.id = a.payload.doc.id;
          return data;
        }
    ))).subscribe(referral => this.referralList = referral);


  }



}


