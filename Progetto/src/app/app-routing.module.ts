import { NgModule } from '@angular/core';
import { Routes, RouterModule,CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { CardsComponent } from './cards/cards.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent, } from './register/register.component';
import { RoutingEnum } from './models/routing-enum';
import { AuthGuard } from './Guard/auth.guard';

const routes: Routes = [{
  path: RoutingEnum.home, children: [
  {path:'lista', component: ListComponent,},
  {path:'cards', component: CardsComponent,  },
  ],
canActivateChild: [AuthGuard]},

{path:'', component: LoginComponent},
{path:'home', component:HomeComponent},
{path:'login', component: LoginComponent},
{path:'register', component: RegisterComponent},
{path:'feedback', component: FeedbackComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
