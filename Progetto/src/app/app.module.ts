import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MatIconModule } from "@angular/material/icon";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { RegistratiComponent } from './registrati/registrati.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CardsComponent } from './cards/cards.component';
import { MaterialModule } from './model/MaterialModule';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material';
import { ItemListService } from './Services/item-list.service';
import { DetailComponent } from './detail/detail.component';
import { SearchListComponent } from './search-list/search-list.component';


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
    DetailComponent,
    SearchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [ItemListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

