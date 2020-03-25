import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponentComponent } from './component/menu-component/menu-component.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { GamesListComponentComponent } from './component/games-list-component/games-list-component.component';
import { GameDetailComponentComponent } from './component/game-detail-component/game-detail-component.component';
import { EditGameComponentComponent } from './component/edit-game-component/edit-game-component.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './component/login-component/login-component.component';​

const appRoutes: Routes = [​

  { path: 'login', component: LoginComponentComponent },​

  { path: 'home', component: HomeComponentComponent },​

  { path: 'games-list', component: GamesListComponentComponent },​

  { path: 'game-detail', component: GameDetailComponentComponent },​

  { path: 'edit-game', component: EditGameComponentComponent }

];​

@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    LoginComponentComponent,
    HomeComponentComponent,
    GamesListComponentComponent,
    GameDetailComponentComponent,
    EditGameComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(​
      appRoutes
    )​
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
