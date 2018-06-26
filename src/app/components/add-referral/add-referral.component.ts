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
    moveIn: '',
    status: '',
    note: ''

};


  constructor(private refServ: ReferralsService, private route: Router, private toast: ToastrService) {
  }

  ngOnInit() {
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
      this.route.navigate(['allreferrals']);
      this.toast.success('Referral Added...', 'Added!' );

    }
  }

}
