import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatSidenavModule } from '@angular/material/sidenav';

import { AppStoreModule } from './store/app-store.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppStoreModule,
    CoreModule,
    HttpClientModule,
		MatSidenavModule,
  ],
  // exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
