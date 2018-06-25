import { ToastrService } from 'ngx-toastr';
import { Referral } from '../../models/referral';
import { ReferralsService } from './../../services/referrals.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: string;
  referral: Referral;
  url: string;

  constructor(private route: ActivatedRoute, private refServ: ReferralsService, private router: Router, private toast: ToastrService) { }

  ngOnInit() {
    this.url = this.router.url;
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.refServ.getReferral(this.id).subscribe(referral => this.referral = referral);

  }

  onDelete() {
    if (confirm('Are you sure you want to delete it?')) {
      this.refServ.deleteReferral(this.id);
      this.toast.info('Referral has been deleted', 'Deteled');
      this.router.navigate(['allreferrals']);
    }
    this.toast.info('No changes were made', 'Canceled');
  }

}

