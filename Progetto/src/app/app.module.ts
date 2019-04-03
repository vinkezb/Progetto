import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { RegistratiComponent } from './registrati/registrati.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    ListComponent,
    RegistratiComponent,
    FeedbackComponent,
    CardsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [AlertModule.forRoot()],
    NgbModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
