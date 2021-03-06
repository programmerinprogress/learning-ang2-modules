import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HighlightDirective} from './highlight.directive';
import {TitleComponent} from './title.component'; 
import {ContactComponent} from './contact/contact.component'; 


@NgModule({
  declarations: [
    AppComponent, 
    HighlightDirective, 
    TitleComponent, 
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
