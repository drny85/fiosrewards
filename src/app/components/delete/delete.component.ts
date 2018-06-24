import { ReferralsService } from './../../services/referrals.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  id: string;

  constructor(private refServ: ReferralsService, private route: ActivatedRoute, routerDirect: Router) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    this.refServ.getReferral(this.id);


    }
  }


