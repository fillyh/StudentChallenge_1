import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DbCharactersComponent } from './db-characters/db-characters.component';
import { AppRoutingModule } from './/app-routing.module';
import { SaiyansComponent } from './saiyans/saiyans.component';
import { NameksComponent } from './nameks/nameks.component';

@NgModule({
  declarations: [
    AppComponent,
    DbCharactersComponent,
    SaiyansComponent,
    NameksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
