import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';


@NgModule({
  imports: [  RouterModule.forChild([
    { path: '', component: GameComponent }
  ])],


  exports: [RouterModule]
})
export class GameRoutingModule { }
