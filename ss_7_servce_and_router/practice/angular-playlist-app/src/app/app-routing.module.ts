import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PlayListComponent} from './play-list/play-list.component';


const routes: Routes = [
  {path: 'youtube', component: PlayListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
