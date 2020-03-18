import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppComponentComponent } from './component/app-component/app-component.component';
import { MenuComponentComponent } from './component/menu-component/menu-component.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { GamesListComponentComponent } from './component/games-list-component/games-list-component.component';
import { GameDetailComponentComponent } from './component/game-detail-component/game-detail-component.component';
import { EditGameComponentComponent } from './component/edit-game-component/edit-game-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponentComponent,
    MenuComponentComponent,
    HomeComponentComponent,
    GamesListComponentComponent,
    GameDetailComponentComponent,
    EditGameComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
