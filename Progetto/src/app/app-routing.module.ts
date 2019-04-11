import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { CardsComponent } from './cards/cards.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { DetailComponent } from './detail/detail.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoutingEnum } from './models/routing-enum';

const routes: Routes = [{
  path: RoutingEnum.home, children: [
    { path: RoutingEnum.home, component: HomeComponent},
    { path: RoutingEnum.lista, component: ListComponent },
    { path: RoutingEnum.cards, component: CardsComponent },
    { path: 'detail' + '/:itemId', component: DetailComponent },
  ]
  
},

{ path: 'login', component: LoginComponent },
{ path: RoutingEnum.register, component: RegisterComponent },
{ path: RoutingEnum.feedback, component: FeedbackComponent },
{ path: 'profile', component: ProfileComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
