import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatIconModule,
  MatGridListModule,
  MatListModule,
  MatSidenavModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonComponent } from './person/person.component';
import { ActionsBarComponent } from './actions-bar/actions-bar.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { BiosphereComponent } from './biosphere/biosphere.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PersonComponent,
    ActionsBarComponent,
    PersonDetailsComponent,
    BiosphereComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
