import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CardsComponent } from './cards/cards.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { RegisterComponent } from './register/register.component';
import { FormFeedbackComponent } from './form-feedback/form-feedback.component';
import { FormRegisterComponent } from './form-register/form-register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    ListComponent,
    FeedbackComponent,
    CardsComponent,
    ProfileComponent,
    FooterComponent,
    
    FormComponent,
    FormGroupComponent,
    FormBuilderComponent,
    RegisterComponent,
    FormFeedbackComponent,
    FormRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [AlertModule.forRoot()],
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
