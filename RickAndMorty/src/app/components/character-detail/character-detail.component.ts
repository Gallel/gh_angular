import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-character-detail',
  imports: [CommonModule],
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  character: any;

  constructor(
    private route: ActivatedRoute,
    private rickAndMortyService: RickAndMortyService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.rickAndMortyService.getCharacter(+id).subscribe(data => {
        this.character = data;
      });
    }
  }
}