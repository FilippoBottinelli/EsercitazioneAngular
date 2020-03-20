import { Component, OnInit } from '@angular/core';
import { GameItem } from 'src/app/models/game-item';

@Component({
  selector: 'app-games-list-component',
  templateUrl: './games-list-component.component.html',
  styleUrls: ['./games-list-component.component.scss']
})
export class GamesListComponentComponent implements OnInit {
  //lista di giochi
 lista_giochi : GameItem[] =[
      {
        id : 1,
        nome:'Mortal Kombat 11',
        descrizione : 'Descrizione generica di prova',
        genere : 'Picchiaduro',
        rating : 30,
        prezzo: 70,
        anno_uscita : new Date(2018, 5, 12)
      },
      {
        id : 2,
        nome:'DOOM Eternal',
        descrizione : 'Descrizione generica di prova',
        genere : 'Sparatutto',
        rating : 90,
        prezzo: 50,
        anno_uscita : new Date(2020, 3, 20)
      }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
