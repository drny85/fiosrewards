import { AuthService } from './services/auth.service';
import { environment } from './../environments/environment';
import { ReferralsService } from './services/referrals.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddReferralComponent } from './components/add-referral/add-referral.component';
import { AllReferralsComponent } from './components/allreferrals/allreferrals.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/Forms';
import { DetailsComponent } from './components/details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { EditComponent } from './components/edit/edit.component';
import { ClosedReferralsComponent } from './components/closed-referrals/closed-referrals.component';
import { PendingComponent } from './components/pending/pending.component';
import { NotsoldComponent } from './components/notsold/notsold.component';
import { NewComponent } from './components/new/new.component';
import { InprogressComponent } from './components/inprogress/inprogress.component';
import { LoginComponent } from './components/login/login.component';
import { AllComponent } from './components/all/all.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddReferralComponent,
    AllReferralsComponent,
    HomeComponent,
    PagenotfoundComponent,
    DetailsComponent,
    EditComponent,
    ClosedReferralsComponent,
    PendingComponent,
    NotsoldComponent,
    NewComponent,
    InprogressComponent,
    LoginComponent,
    AllComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'fiosrewards'),
    AngularFirestoreModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AngularFireAuthModule


  ],

  providers: [ ReferralsService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
