import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// 👇 Import Angular Google Maps module
import { GoogleMapsModule } from '@angular/google-maps';

// 👇 Your component import (adjust path if needed)
import { ContactUSComponent } from '../pages/contact-us/contact-us.component';
import { HeaderComponent } from '../pages/header/header.component';
import { FooterComponent } from '../pages/footer/footer.component';
import { MainpageComponent } from '../pages/mainpage/mainpage.component';
import { PrivacyComponent } from '../pages/privacy/privacy.component';
import { TermsComponent } from '../pages/terms/terms.component';
import { AboutusComponent } from '../pages/aboutus/aboutus.component';
import { CareerComponent } from '../pages/career/career.component';
import { CompanioneedComponent } from '../pages/companioneed/companioneed.component';

import { UserAgreementComponent } from '../pages/user-agreement/user-agreement.component';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,FooterComponent,MainpageComponent,PrivacyComponent,TermsComponent,UserAgreementComponent,
    ContactUSComponent,AboutusComponent,CareerComponent,CompanioneedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    GoogleMapsModule  // 👈 Use this instead of AgmCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
