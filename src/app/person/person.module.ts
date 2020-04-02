import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonComponent } from './person.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { ActionsBarComponent } from '../person/actions-bar/actions-bar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ActionsBarComponent, PersonComponent, PersonDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [PersonComponent],
})
export class PersonModule { }
