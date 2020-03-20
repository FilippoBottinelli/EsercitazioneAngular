import { Component, OnInit } from '@angular/core';
import { GameItem } from 'src/app/models/game-item';

@Component({
  selector: 'app-games-list-component',
  templateUrl: './games-list-component.component.html',
  styleUrls: ['./games-list-component.component.scss']
})
export class GamesListComponentComponent implements OnInit {
  listaGiochi : GameItem [] =[
    {
      id : 1,
      nome:'Mortal Kombat 11',
      descrizione : 'Descrizione generica di prova',
      genere : 'Picchiaduro',
      rating : 30,
      prezzo: 70,
      anno_uscita : new Date(1979, 5, 12)
    },
    {
      id : 2,
      nome:'DOOM Eternal',
      descrizione : 'Descrizione generica di prova',
      genere : 'Sparatutto',
      rating : 90,
      prezzo: 50,
      anno_uscita : new Date(2020, 3, 20)
    },
    {
      id : 3,
      nome:'Injustice 2',
      descrizione : 'Descrizione generica di prova',
      genere : 'Picchiaduro',
      rating : 80,
      prezzo: 60,
      anno_uscita : new Date(2020, 3, 20)
    },
  ];
  constructor() { 
  }

  ngOnInit(): void {
  }

}
