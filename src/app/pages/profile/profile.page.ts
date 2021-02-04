import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileId: number;
  character: Character;

  character$: Observable<Character>;

  constructor(private activatedRoute: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit() {
    this.profileId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);

    /*this.characterService.getCharacter(this.profileId)
      .subscribe((res: Character) => {
        this.character = res;
      },
      err => {
        console.log(err);
      });*/

      this.character$ = this.characterService.getCharacter(this.profileId);
  }

}
