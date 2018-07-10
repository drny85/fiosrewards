import { ReferralsService } from './../../services/referrals.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Referral } from './../../models/referral';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  senders;

  customer: Referral = {
    id: '',
    name: '',
    lastName: '',
    address: {
        street: '',
        apt: '',
        city: '',
        zipcode: ''
    },
    phone: '',
    email: '',
    mon: '',
    moveIn: '',
    orderDate: '',
    due: '',
    package: '',
    status: '',
    note: '',
    referredBy: ''

};


  id: string;
  show = false;
  currentRoute = '';
  locationURL: string;
  newZip: string;
  other = false;


  constructor(private refServ: ReferralsService, private route: ActivatedRoute,
    private router: Router, private toast: ToastrService, public location: Location) {
      router.events.subscribe(url => {
        if (location.path() !== '') {
          this.locationURL = location.path();
        } else {
          this.locationURL = '';
        }
      });
     }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.refServ.getReferral(this.id).subscribe(changes => this.customer = changes);
    this.show = true;
    this.currentRoute = this.router.url;
    this.refServ.getSenders().subscribe(ref => this.senders = ref);

  }

  autoFill(e) {
    this.newZip = e.target.value;
    if (this.newZip.length === 3 ) {
      switch ( this.newZip ) {
        case '107': {
          this.customer.address.city = 'Yonkers';
          break;
        }
        case '104': {
          this.customer.address.city = 'Bronx';
          break;
        }
      }
    }
  }

  onSubmit({value, valid}: { value: Referral, valid: boolean}) {
    // this.refServ.addReferral(this.customer);
    // this.route.navigate(['all-referrals']);
    if (!valid) {
      // add error
        console.log('error');

    } else {
      // add referral
      this.refServ.updateItem(this.customer);
      this.router.navigate([`all/details/${this.id}`]);
      this.toast.success('Referral updated...', 'Updated!' );

    }
  }

  setSender(e) {
    if (e === 'other') {
      this.other = true;
      this.customer.referredBy = e;
    } else {
      this.customer.referredBy = e;
      this.other = false;
    }
  }

  setSender2(e) {
    this.customer.referredBy = e.target.value;
    console.log(e.target.value);
  }

}
