import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { CardsComponent } from './cards/cards.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoutingEnum } from './models/routing-enum';

const routes: Routes = [{
  path: RoutingEnum.home, children: [
  {path:'home', component:HomeComponent },
  {path:'lista', component: ListComponent},
  {path:'cards', component: CardsComponent},
  {path:'feedback', component: FeedbackComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent}

]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
