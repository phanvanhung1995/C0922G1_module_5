import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DictionayPageComponentComponent} from "./dictionay-page-component/dictionay-page-component.component";
import {DictionaryDetailComponent} from "./dictionary-detail/dictionary-detail.component";


const routes: Routes = [
  {path: 'iword', component: DictionayPageComponentComponent},
  {path: 'detail/:word', component: DictionaryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
