import { Component, OnInit } from '@angular/core';
import { Character } from '../../classes/character';
import { CharactersService } from '../../service/characters.service' ;

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
  providers: [CharactersService]
})
export class CharactersListComponent implements OnInit {
  characters:Character[];
  constructor(private CharactersService:CharactersService) { }
  getCharacter():void{
    this.CharactersService.getCharacter().then(charavter => this.characters = charavter);
  }

  ngOnInit() {
    this.getCharacter() ;
  }

}
