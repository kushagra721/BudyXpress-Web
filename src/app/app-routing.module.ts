import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyComponent } from '../pages/privacy/privacy.component';
import { TermsComponent } from '../pages/terms/terms.component';
import { ContactUSComponent } from '../pages/contact-us/contact-us.component';
import { UserAgreementComponent } from '../pages/user-agreement/user-agreement.component';
import { HeaderComponent } from '../pages/header/header.component';
import { FooterComponent } from '../pages/footer/footer.component';
import { MainpageComponent } from '../pages/mainpage/mainpage.component';
import { AboutusComponent } from '../pages/aboutus/aboutus.component';
import { CareerComponent } from '../pages/career/career.component';
import { CompanioneedComponent } from '../pages/companioneed/companioneed.component';

const routes: Routes = [
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'contact', component: ContactUSComponent },
  { path: 'useragreement', component: UserAgreementComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
   { path: 'about', component: AboutusComponent },
    { path: 'career', component: CareerComponent },
     { path: 'companionneed', component: CompanioneedComponent },
  { path: '', component: MainpageComponent },
  // 👈 Add your route here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
