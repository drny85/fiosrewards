import { ToastrModule } from 'ngx-toastr';
import { Sender } from './../models/sender';
import { Referral } from '../models/referral';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class ReferralsService {

  current: any = '';

  referralCollection: AngularFirestoreCollection<Referral>;
  referrals: Observable<Referral[]>;
  referralDoc: AngularFirestoreDocument<Referral>;
  referral: Observable<Referral>;
  // to add a referral by....
  sendersColl: AngularFirestoreCollection<Sender>;
  senderDoc: AngularFirestoreDocument;
  senders: Observable<Sender[]>;

  constructor(private afs: AngularFirestore) {

    this.getReferrals();

  }

  getReferrals() {
    this.referralCollection = this.afs.collection<Referral>('customer', ref => ref.orderBy('moveIn', 'asc'));

      this.referrals = this.referralCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Referral;
          data.id = a.payload.doc.id;
          return data;
        }))
      );

      return this.referrals;
  }

  // get all referrals by name
  getSenders() {
    this.sendersColl = this.afs.collection('senders', ref => ref.orderBy('name'));
    this.senders = this.sendersColl.valueChanges();
    return this.senders;

  }
// add a new referral
  addReferral(referral: Referral) {

    this.referralCollection.add(referral);
  }
// delete a referral
  deleteReferral(id: string) {
    this.referralDoc = this.afs.doc(`customer/${id}`);
    this.referralDoc.delete();
  }
// update a referral
  updateItem(referral: Referral) {
    this.referralDoc = this.afs.doc(`customer/${referral.id}`);
    this.referralDoc.update(referral);
  }
// get just a particular referral
  getReferral(id: string): Observable<Referral> {
    this.referralDoc = this.afs.doc<Referral>(`customer/${id}`);
    this.referral = this.referralDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {

        return null;

      } else {
        const data = action.payload.data() as Referral;
        data.id = action.payload.id;
        return data;
      }
    })
  );
    return this.referral;
  }


}
