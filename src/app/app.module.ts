import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './page/contact/contact.component';
import { HomeComponent } from './page/home/home.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailmessComponent } from './page/contact/detailmess/detailmess.component';
import { RecrutementComponent } from './page/recrutement/recrutement.component';
import { AffichageComponent } from './page/recrutement/affichage/affichage.component';
import { AuthentificationComponent } from './page/authentification/authentification.component';
import { DevisComponent } from './page/devis/devis.component';
import { CreateOffreComponent } from './page/recrutement/create-offre/create-offre.component';
import { InscriptionComponent } from './page/inscription/inscription.component';
import { UserComponent } from './page/user/user.component';
import { VerifemailComponent } from './page/inscription/verifemail/verifemail.component';
import { OffreavaliderComponent } from './admin/offreavalider/offreavalider.component';
import { CandidatComponent } from './admin/candidat/candidat.component';
import { DevisadminComponent } from './admin/devisadmin/devisadmin.component';
import { MessageadminComponent } from './admin/messageadmin/messageadmin.component';
import { ActivityComponent } from './page/activity/activity.component';
import { PortfolioComponent } from './page/portfolio/portfolio.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    AdminComponent,
    DetailmessComponent,
    RecrutementComponent,
    AffichageComponent,
    AuthentificationComponent,
    DevisComponent,
    CreateOffreComponent,
    InscriptionComponent,
    UserComponent,
    VerifemailComponent,
    OffreavaliderComponent,
    CandidatComponent,
    DevisadminComponent,
    MessageadminComponent,
    ActivityComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [RecrutementComponent,AdminComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
