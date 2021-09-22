import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';
import { CollapseModule } from 'ngx-bootstrap';
import { NavbarComponent } from '../core/navbar/navbar.component';
import { JumbotronComponent } from '../core/jumbotron/jumbotron.component';
import { EventcardComponent } from '../event/eventcard/eventcard.component';
import { FooterComponent } from '../core/footer/footer.component';
import { EventComponent } from '../event/event.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { EventDetailComponent } from '../event/event-detail/event-detail.component';
import { EventListComponent } from '../event/event-list/event-list.component';
import { PageNotFoundComponent } from '../core/page-not-found/page-not-found.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { BidComponent } from '../ticket/bid/bid.component';
import { TicketDetailComponent } from '../ticket/ticket-detail/ticket-detail.component';
import { TicketListComponent } from '../ticket/ticket-list/ticket-list.component';
import { TicketComponent } from '../ticket/ticket.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    EventcardComponent,
    FooterComponent,
    
    ...AppRoutingModule.routableComponents
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
