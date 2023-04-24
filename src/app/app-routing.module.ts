import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBusDetailsComponent } from './create-bus-details/create-bus-details.component';
import { BusInfoComponent } from './bus-info/bus-info.component';
import { BusDetailsListComponent } from './bus-details-list/bus-details-list.component';
import { UpdateBusDetailsComponent } from './update-bus-details/update-bus-details.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { LogoutComponent } from './log-out/log-out.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { HomeComponent } from './home/home.component';
import { BusSeatsComponent } from './bus-seats/bus-seats.component';



/* there are the path for the sub components and we are importing the respective components*/
const routes: Routes = [
  
  {path: 'busDetails', component: BusDetailsListComponent,canActivate:[AuthGaurdService]},
  {path: 'create-bus-details', component: CreateBusDetailsComponent,canActivate:[AuthGaurdService]},
  {path: '', redirectTo: 'app-login', pathMatch: 'full'},
  {path:'app-login',component: LoginComponent},
  {path:'app-contact-us',component: ContactUsComponent,canActivate:[AuthGaurdService]},
  {path:'app-feed-back',component: FeedBackComponent,canActivate:[AuthGaurdService]},
  {path:'app-sign-up',component: SignUpComponent},
  {path:'app-profile-card',component:ProfileCardComponent,canActivate:[AuthGaurdService]},
  {path: 'updateBusDetails/:busId', component: UpdateBusDetailsComponent,canActivate:[AuthGaurdService]},
  {path: 'busDetails/:busId', component:  BusInfoComponent,canActivate:[AuthGaurdService]},
  {path: 'app-logout', component:  LogoutComponent,canActivate:[AuthGaurdService]},
  {path: 'app-home', component:  HomeComponent,canActivate:[AuthGaurdService]},
  {path: 'app-bus-seats/:busId', component:  BusSeatsComponent,canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }