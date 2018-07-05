import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ReferralsService } from './../../services/referrals.service';
import { Referral } from './../../models/referral';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-add-referral',
  templateUrl: './add-referral.component.html',
  styleUrls: ['./add-referral.component.css']
})
export class AddReferralComponent implements OnInit {


  customer: Referral = {

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

senders: any[] = [{name: 'Keith Thompson' }, {name: 'Anthony Williams' }, {name: 'Arthur Pepaj' }, {name: 'Manny Silberberg' }];
newZip: string;
other = false;


  constructor(private refServ: ReferralsService, private route: Router, private toast: ToastrService) {

  }

  ngOnInit() {
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
    console.log(value, valid);

    if (!valid) {
      // add error
        console.log('error');

    } else {
      // add referral
      this.refServ.addReferral(this.customer);
      this.route.navigate(['new']);
      this.toast.success('Referral Added...', 'Added!' );

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
