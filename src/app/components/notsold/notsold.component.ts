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


  constructor(private afs: AngularFirestore) { }

  ngOnInit() {

    this.referralsCollection = this.afs.collection('customer', ref => {
      return ref.where('status', '==', 'not sold');

    });
    this.referralsCollection.snapshotChanges().pipe(map(changes => changes.map(
      a => {const data = a.payload.doc.data();
          data.id = a.payload.doc.id;
          if ( data.name !== '' || data.name != null) {
            this.show = true;
        }
          return data;
        }
    ))).subscribe(referral => this.referralList = referral);


  }


}
