import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponentComponent } from './component/menu-component/menu-component.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { GamesListComponentComponent } from './component/games-list-component/games-list-component.component';
import { GameDetailComponentComponent } from './component/game-detail-component/game-detail-component.component';
import { EditGameComponentComponent } from './component/edit-game-component/edit-game-component.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './component/login-component/login-component.component';​
import { AuthGuardService } from './service/auth-guard.service';


const appRoutes: Routes = [​

  { path: 'login', component: LoginComponentComponent},​

  { path: 'home', component: HomeComponentComponent, canActivate: [AuthGuardService]  },​

  { path: 'games-list', component: GamesListComponentComponent , canActivate: [AuthGuardService] },​

  { path: 'game-detail', component: GameDetailComponentComponent , canActivate: [AuthGuardService] },​

  { path: 'edit-game', component: EditGameComponentComponent, canActivate: [AuthGuardService]  }

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
    FormsModule,
    RouterModule.forRoot(​
      appRoutes
    )​
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
