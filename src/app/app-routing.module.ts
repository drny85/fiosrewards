import { LoginComponent } from './components/login/login.component';
import { PendingComponent } from './components/pending/pending.component';
import { ClosedReferralsComponent } from './components/closed-referrals/closed-referrals.component';
import { EditComponent } from './components/edit/edit.component';
import { DetailsComponent } from './components/details/details.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AddReferralComponent } from './components/add-referral/add-referral.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllReferralsComponent } from './components/allreferrals/allreferrals.component';
import { NotsoldComponent } from './components/notsold/notsold.component';
import { NewComponent } from './components/new/new.component';
import { InprogressComponent } from './components/inprogress/inprogress.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-referral',      component: AddReferralComponent },
  {
    path: 'allreferrals',
    component: AllReferralsComponent
  },
  { path: 'allreferrals/details/:id', component: DetailsComponent },
  { path: 'closed-referrals', component: ClosedReferralsComponent },
  { path: 'pending', component: PendingComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'notsold', component: NotsoldComponent },
  { path: 'new', component: NewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inprogress', component: InprogressComponent },

  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
