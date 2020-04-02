import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiosphereComponent } from './biosphere.component';

import { SharedModule } from '../shared/shared.module';
import { PersonModule } from '../person/person.module';

@NgModule({
	declarations: [
		BiosphereComponent,
	],
	imports: [
    CommonModule,
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
