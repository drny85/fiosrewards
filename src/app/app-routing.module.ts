import { ClosedReferralsComponent } from './components/closed-referrals/closed-referrals.component';
import { DeleteComponent } from './components/delete/delete.component';
import { EditComponent } from './components/edit/edit.component';
import { DetailsComponent } from './components/details/details.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AddReferralComponent } from './components/add-referral/add-referral.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllReferralsComponent } from './components/all-referrals/all-referrals.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-referral',      component: AddReferralComponent },
  {
    path: 'all-referrals',
    component: AllReferralsComponent
  },
  { path: 'all-referrals/details/:id', component: DetailsComponent },
  { path: 'closed-referrals', component: ClosedReferralsComponent },
  { path: 'delete/:id', component: DeleteComponent },
  { path: 'edit/:id', component: EditComponent },

  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
