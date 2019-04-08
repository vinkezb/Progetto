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
  {path:'lista', component: ListComponent},
  {path:'cards', component: CardsComponent},
  {path:'feedback', component: FeedbackComponent},
  {path: 'detail' + '/:itemId', component: DetailComponent},
  {path:'profile', component: ProfileComponent},
  {path:'register', component: RegisterComponent}
]
},
{path:'login', component: LoginComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
