import { NgModule } from '@angular/core';


import { BiosphereComponent } from './biosphere.component';

import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PersonModule } from '../person/person.module';

@NgModule({
	declarations: [
		BiosphereComponent,
	],
	imports: [
    CommonModule,
		CoreModule,
    SharedModule,
    PersonModule,
	],
	exports: [
    BiosphereComponent,
  ],
	providers: [],
})
export class BiosphereModule {
	constructor() {}
}
