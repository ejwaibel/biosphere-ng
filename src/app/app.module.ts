import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PersonComponent } from './person/person.component';
import { ActionsBarComponent } from './actions-bar/actions-bar.component';
import { PersonDetailsComponent } from './person/person-details/person-details.component';
import { BiosphereComponent } from './biosphere/biosphere.component';
import { HeaderComponent } from './header/header.component';
import { CoreModule } from './core/core.module';
import { AppStoreModule } from './store/app-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';


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
    AppStoreModule,
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DragDropModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
