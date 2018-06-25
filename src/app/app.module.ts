import { environment } from './../environments/environment';
import { ReferralsService } from './services/referrals.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddReferralComponent } from './components/add-referral/add-referral.component';
import { AllReferralsComponent } from './components/all-referrals/all-referrals.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/Forms';
import { DetailsComponent } from './components/details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { EditComponent } from './components/edit/edit.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ClosedReferralsComponent } from './components/closed-referrals/closed-referrals.component';
import { PendingComponent } from './components/pending/pending.component';
import { NotsoldComponent } from './components/notsold/notsold.component';
import { NewComponent } from './components/new/new.component';
import { InprogressComponent } from './components/inprogress/inprogress.component';



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
    DeleteComponent,
    ClosedReferralsComponent,
    PendingComponent,
    NotsoldComponent,
    NewComponent,
    InprogressComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'fiosrewards'),
    AngularFirestoreModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added

  ],
  providers: [ ReferralsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
