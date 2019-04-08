import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { CardsComponent } from './cards/cards.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'lista', component: ListComponent},
  {path:'cards', component: CardsComponent},
  {path:'feedback', component: FeedbackComponent},
  {path: 'detail' + '/:itemId', component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
