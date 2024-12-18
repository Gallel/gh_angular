import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { startOfDay } from 'date-fns';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule, MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  encapsulation: ViewEncapsulation.None, // Deshabilita l'encapsulació
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  events: { date: Date, title: string }[] = [];
  selectedEvent: string | null = null;
  selectedDate: Date = new Date(); // Inicialitzar amb la data actual

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.rickAndMortyService.getEpisodes().subscribe(episodes => {
      this.events = episodes.map(episode => ({
        date: startOfDay(new Date(episode.air_date)),
        title: `${episode.episode} - ${episode.name}`
      }));
    });
  }

  onDateChange(date: Date | null): void {
    if (date) {
      this.selectedDate = date;
      this.selectedEvent = this.getEventTitle(date);
    }
  }

  getEventTitle(date: Date): string | null {
    const event = this.events.find(e => e.date.getTime() === date.getTime());
    return event ? event.title : null;
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const event = this.events.find(e => e.date.getTime() === cellDate.getTime());
      return event ? 'event-date' : '';
    }
    return '';
  };
}