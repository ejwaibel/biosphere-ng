import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { BiosphereModule } from '../biosphere/biosphere.module';
import { SharedModule } from '../shared/shared.module';

export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
	if (parentModule) {
		const msg = `${moduleName} has already been loaded. Import Core modules in the AppModule only.`;
		throw new Error(msg);
	}
}

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
  ],
	imports: [
    BiosphereModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    SharedModule,
  ],
  exports: [
    BiosphereModule,
    HeaderComponent,
    SidebarComponent,
    SharedModule,
  ],
	providers: [],
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		throwIfAlreadyLoaded(parentModule, 'CoreModule');
	}
}
