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
import { AuthGuard } from './Services/Auth-guard';



const routes: Routes = [
  {
    path: RoutingEnum.home,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: RoutingEnum.lista, component: ListComponent },
      { path: RoutingEnum.cards, component: CardsComponent, },
      { path: 'detail' + '/:itemId', component: DetailComponent },
      { path: RoutingEnum.feedback, component: FeedbackComponent },
    ],
    canActivateChild: [AuthGuard]
  },
  { path: RoutingEnum.home1, component: HomeComponent },
  { path: RoutingEnum.login, component: LoginComponent },
  { path: RoutingEnum.register,component:RegisterComponent },
  { path: '', redirectTo: '/' + RoutingEnum.home1, pathMatch: 'full' },
  { path: '**', component: HomeComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
