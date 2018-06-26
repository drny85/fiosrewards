import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Referral } from './../../models/referral';
import { ReferralsService } from './../../services/referrals.service';


@Component({
  selector: 'app-inprogress',
  templateUrl: './inprogress.component.html',
  styleUrls: ['./inprogress.component.css']
})
export class InprogressComponent implements OnInit {

  referralsCollection: AngularFirestoreCollection<Referral>;
  referrals: Observable<Referral[]>;
  referralList;
  n: string;


  constructor(private afs: AngularFirestore) { }

  ngOnInit() {

    this.referralsCollection = this.afs.collection('customer', ref => {
      return ref.where('status', '==', 'in progress');

    });
    this.referralsCollection.snapshotChanges().pipe(map(changes => changes.map(
      a => {const data = a.payload.doc.data();
          data.id = a.payload.doc.id;
          data.name = this.n;
          return data;
        }
    ))).subscribe(referral => this.referralList = referral);


  }

}
