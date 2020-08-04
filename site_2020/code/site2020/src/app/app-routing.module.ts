import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarPageComponent } from './components/calendar-page/calendar-page.component';
// à propos
import { ProjetComponent } from './components/projet/projet.component';
import { EquipeComponent } from './components/equipe/equipe.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { BiblioComponent } from './components/biblio/biblio.component';
import { PartenairesComponent } from './components/partenaires/partenaires.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: 'calendrier', component: CalendarComponent },
  { path: 'year/:year', component: CalendarPageComponent },
  { path: 'projet', component: ProjetComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'biblio', component: BiblioComponent },
  { path: 'partenaires', component: PartenairesComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
