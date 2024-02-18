import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { RecrutementComponent } from './page/recrutement/recrutement.component';
import { AffichageComponent } from './page/recrutement/affichage/affichage.component';
import { AuthentificationComponent } from './page/authentification/authentification.component';
import { DevisComponent } from './page/devis/devis.component';
import { CreateOffreComponent } from './page/recrutement/create-offre/create-offre.component';
import { UserComponent } from './page/user/user.component';
import { InscriptionComponent } from './page/inscription/inscription.component';
import { HeaderComponent } from './header/header.component';
import { VerifemailComponent } from './page/inscription/verifemail/verifemail.component';
import { DevisadminComponent } from './admin/devisadmin/devisadmin.component';
import { OffreavaliderComponent } from './admin/offreavalider/offreavalider.component';
import { CandidatComponent } from './admin/candidat/candidat.component';
import { MessageadminComponent } from './admin/messageadmin/messageadmin.component';
import { ActivityComponent } from './page/activity/activity.component';
import { PortfolioComponent } from './page/portfolio/portfolio.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'recrutement', component: RecrutementComponent},
  { path: 'detailRecrutement/:id', component: AffichageComponent},
  { path: 'auth', component: AuthentificationComponent},
  { path: 'devis', component: DevisComponent},
  { path: 'createOffre', component: CreateOffreComponent},
  { path: 'user', component: UserComponent},
  { path: 'inscription', component: InscriptionComponent},
  { path: 'header', component: HeaderComponent  },
  { path: 'verifemail', component: VerifemailComponent},
  { path: 'devis/admin', component: DevisadminComponent},
  { path: 'offreemploi', component: OffreavaliderComponent},
  { path: 'candidat', component: CandidatComponent},
  { path: 'message/admin', component: MessageadminComponent},
  { path: 'activity', component: ActivityComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: '**', component: HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
