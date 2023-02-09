import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BandsComponent } from './bands/bands.component';
import { BandDetailComponent } from './band-detail/band-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BandsComponent,
    BandDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
