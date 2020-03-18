import { Component, OnInit } from '@angular/core';
import { EditGameComponentComponent } from '../edit-game-component/edit-game-component.component';

@Component({
  selector: 'app-app-component',
  templateUrl: './app-component.component.html',
  styleUrls: ['./app-component.component.scss']
})
export class AppComponentComponent implements OnInit {

  constructor() { 
        var list = [
          {MortalKombatX : EditGameComponentComponent},
          {MortalKombat11 : EditGameComponentComponent},
          {Injustice2 : EditGameComponentComponent},
          {Cuphead : EditGameComponentComponent},
          {DarkSouls3 : EditGameComponentComponent}
        ];
  }

  ngOnInit(): void {
  }

}
