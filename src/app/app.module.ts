import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccidentComponent } from './accident/accident.component';
import { LoginComponent } from './login/login.component';
import { ViolationComponent } from './violation/violation.component';
import * as firebase from 'firebase';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatInputModule} from '@angular/material';
import { ViewComponent } from './view/view.component';
import { AgmCoreModule } from '@agm/core';



firebase.initializeApp({
  apiKey: "AIzaSyBK4cPSObIIHgh1VJLkYwKNRdE7-KOgY4I",
  authDomain: "todo-cb3fd.firebaseapp.com",
  databaseURL: "https://todo-cb3fd.firebaseio.com",
  projectId: "todo-cb3fd",
  storageBucket: "todo-cb3fd.appspot.com",
  messagingSenderId: "463615615391"
});


@NgModule({
  declarations: [
    AppComponent,
    AccidentComponent,
    routingComponents,
    LoginComponent,
    ViolationComponent,
    ViewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_Tljz9-CxvTnS1inJqL7JMovHF0rk_ko'
    })
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
