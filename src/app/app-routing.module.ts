import { AuthGuard } from './guards/auth.guard';
import { AllComponent } from './components/all/all.component';
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
  { path: 'add-referral',      component: AddReferralComponent, canActivate: [AuthGuard] },
  {
    path: 'allreferrals',
    component: AllReferralsComponent
  },
  { path: 'all/details/:id', component: DetailsComponent, canActivate: [AuthGuard] },
  { path: 'closed-referrals', component: ClosedReferralsComponent, canActivate: [AuthGuard] },
  { path: 'pending', component: PendingComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: EditComponent, canActivate: [AuthGuard] },
  { path: 'notsold', component: NotsoldComponent, canActivate: [AuthGuard] },
  { path: 'new', component: NewComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'all', component: AllComponent, canActivate: [AuthGuard] },
  { path: 'inprogress', component: InprogressComponent, canActivate: [AuthGuard] },

  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
