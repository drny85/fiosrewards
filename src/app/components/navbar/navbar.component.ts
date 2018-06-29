
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn: boolean;
  currentUserName: string;
  curretnUserEmail: string;

  constructor( private router: Router,
               private auth: AuthService,
              private msg: ToastrService ) { }

  ngOnInit() {
    this.auth.getAuth().subscribe(auth => {
      if (auth ) {
        this.loggedIn = true;
        this.currentUserName = auth.displayName;
        this.curretnUserEmail = auth.email;
        console.log(this.loggedIn, this.currentUserName, this.curretnUserEmail);
      } else {
        this.loggedIn = false;
      }
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }


}
