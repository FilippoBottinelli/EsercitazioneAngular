import { Component, OnInit } from '@angular/core';
import { EditGameComponentComponent } from '../edit-game-component/edit-game-component.component';

@Component({
  selector: 'mio-app-component',
  templateUrl: './app-component.component.html',
  styleUrls: ['./app-component.component.scss']
})
export class AppComponentComponent implements OnInit {

  nome : String ;

  constructor() { 
 
        this.nome='Mortal Kombat 11';
  }

  ngOnInit(): void {
  }

}
