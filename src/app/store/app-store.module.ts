import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';


const apiRoot = environment.apiUrlBase + '/';
const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: apiRoot,
  entityHttpResourceUrls: {
    Person: { entityResourceUrl: apiRoot + 'persons/', collectionResourceUrl: apiRoot + 'customers/' },
  }
};

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    environment.production ? [] : StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [ { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig } ]
})
export class AppStoreModule {}
