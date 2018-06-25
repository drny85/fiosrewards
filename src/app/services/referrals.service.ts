import { Referral } from '../models/referral';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ReferralsService {

  referralCollection: AngularFirestoreCollection<Referral>;
  referrals: Observable<Referral[]>;
  referralDoc: AngularFirestoreDocument<Referral>;
  referral: Observable<Referral>;

  constructor(private afs: AngularFirestore) {

      this.referralCollection = this.afs.collection<Referral>('customer', ref => ref.orderBy('moveIn', 'asc'));

      this.referrals = this.referralCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Referral;
          data.id = a.payload.doc.id;
          return data;
        }))
      );

  }

  getReferrals() {
    return this.referrals;
  }

  addReferral(referral: Referral) {

    this.referralCollection.add(referral);
  }

  deleteReferral(id: string) {
    this.referralDoc = this.afs.doc(`customer/${id}`);
    this.referralDoc.delete();
  }

  updateItem(referral: Referral) {
    this.referralDoc = this.afs.doc(`customer/${referral.id}`);
    this.referralDoc.update(referral);
  }

  getReferral(id: string): Observable<Referral> {
    this.referralDoc = this.afs.doc<Referral>(`customer/${id}`);
    this.referral = this.referralDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        console.log('info');
        return null;

      } else {
        const data = action.payload.data() as Referral;
        data.id = action.payload.id;
        console.log(data);
        return data;
      }
    })
  );
    console.log(this.referral);
    return this.referral;
  }


}
