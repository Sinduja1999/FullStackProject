import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* we are importing head component and the respective sub components*/
import { CreateBusDetailsComponent } from './create-bus-details/create-bus-details.component';
import { BusInfoComponent } from './bus-info/bus-info.component';
import { BusDetailsListComponent } from './bus-details-list/bus-details-list.component';
import { UpdateBusDetailsComponent } from './update-bus-details/update-bus-details.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './log-out/log-out.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { HomeComponent } from './home/home.component';
import { BusSeatsComponent } from './bus-seats/bus-seats.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBusDetailsComponent,
    BusInfoComponent,
    BusDetailsListComponent,
    UpdateBusDetailsComponent,
    LoginComponent,
    LogoutComponent,
    ContactUsComponent,
    FeedBackComponent,
    SignUpComponent,
    ProfileCardComponent,
    HomeComponent,
    BusSeatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }