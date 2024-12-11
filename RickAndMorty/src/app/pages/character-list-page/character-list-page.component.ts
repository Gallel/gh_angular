import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from '../../components/character-list/character-list.component';

@Component({
  selector: 'app-character-list-page',
  imports: [CommonModule, CharacterListComponent],
  templateUrl: './character-list-page.component.html',
  styleUrl: './character-list-page.component.scss'
})
export class CharacterListPageComponent {

}
