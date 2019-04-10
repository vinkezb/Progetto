import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from "@angular/material/icon";
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CardsComponent } from './cards/cards.component';
import { MaterialModule } from './model/MaterialModule';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatMenuModule, MatGridListModule } from '@angular/material';
import { ItemListService } from './Services/item-list.service';
import { DetailComponent } from './detail/detail.component';

import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { RegisterComponent } from './register/register.component';
import { FormFeedbackComponent } from './form-feedback/form-feedback.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    ListComponent,
    FeedbackComponent,
    CardsComponent,
    DetailComponent,
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
    FormsModule,
    MatIconModule,
    MatMenuModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatGridListModule,
    ReactiveFormsModule
  ],
  providers: [ItemListService,
    NgbModule,
    FormsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }

