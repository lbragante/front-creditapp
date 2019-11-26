import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreditsComponent } from './credits/credits.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SolicitationsComponent } from './solicitations/solicitations.component';
import { CreditDetailComponent } from './credit-detail/credit-detail.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', redirectTo: '/solicitations', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: '', component: NavbarComponent,
    children: [
      { path: 'credits', component: CreditsComponent },
      { path: 'solicitations', component: SolicitationsComponent },
      { path: 'credits/:id', component: CreditDetailComponent },
      { path: 'profile', component: ProfileComponent }
    ],
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
