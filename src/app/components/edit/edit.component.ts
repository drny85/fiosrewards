import { ReferralsService } from './../../services/referrals.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Referral } from './../../models/referral';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: string;
  customer: Referral;
  show = false;



  constructor(private refServ: ReferralsService, private route: ActivatedRoute,
    private router: Router, private toast: ToastrService) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.refServ.getReferral(this.id).subscribe(changes => this.customer = changes);
    this.show = true;

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
      this.router.navigate(['all']);
      this.toast.success('Referral updated...', 'Updated!' );

    }
  }

}
