import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharacterListPageComponent } from './pages/character-list-page/character-list-page.component';
import { CharacterDetailPageComponent } from './pages/character-detail-page/character-detail-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'personatges', component: CharacterListPageComponent },
  { path: 'personatges/:id/:name', component: CharacterDetailPageComponent },
  { path: 'calendar', component: CalendarPageComponent },
  { path: '**', component: NotFoundComponent }
];