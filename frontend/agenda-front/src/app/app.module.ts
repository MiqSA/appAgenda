import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { RegisterComponent } from './register/register.component';
import { NavBarComponent } from './NavBar/navbar.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    ListContactsComponent,
    RegisterComponent,
    NavBarComponent,
    ContactsDetailComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
