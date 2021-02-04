import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { CharacterResults } from 'src/app/models/character-results';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  characters: Character[] = [];

  constructor(private _character: CharacterService) {
    this._character.getcharacters().subscribe(res => {
      this.characters = res.results;
    });
  }

  ngOnInit() {
    this._character.getcharacters()
      .subscribe( (res: CharacterResults) => {
        const temp: CharacterResults = res;
        this.characters = temp.results;
      },
      err => {
        console.log(err);
      });
  }

}
