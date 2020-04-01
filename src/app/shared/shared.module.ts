import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DragDropModule,
    MatButtonModule,
		MatGridListModule,
    MatIconModule,
		MatListModule,
		MatTooltipModule,
  ],
  exports: [
    DragDropModule,
    MatButtonModule,
		MatGridListModule,
    MatIconModule,
		MatListModule,
		MatTooltipModule,
  ],
})
export class SharedModule { }
