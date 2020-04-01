import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PersonComponent, PersonDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [PersonComponent],
})
export class PersonModule { }
