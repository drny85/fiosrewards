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

  constructor(private route: ActivatedRoute, private refServ: ReferralsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.refServ.getReferral(this.id).subscribe(referral => this.referral = referral);

  }

}

