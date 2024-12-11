import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailComponent } from '../../components/character-detail/character-detail.component';

@Component({
  selector: 'app-character-detail-page',
  imports: [CommonModule, CharacterDetailComponent],
  templateUrl: './character-detail-page.component.html',
  styleUrls: ['./character-detail-page.component.scss']
})
export class CharacterDetailPageComponent {}