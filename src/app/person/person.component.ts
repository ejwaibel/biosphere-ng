import { Component, OnInit, Input } from '@angular/core';
import { BiosphereService } from '../biosphere/biosphere.service';
import { Person } from '../core/model/person.model';
import utils from '../utils';
import { map, tap, switchMap } from 'rxjs/operators';
import { CdkDragStart } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PersonDetailsComponent } from './person-details/person-details.component';

@Component({
	selector: 'app-person',
	templateUrl: './person.component.html',
	styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
	private _maxAge: number;
	private isDragging = false;
  private openDialog: MatDialogRef<PersonDetailsComponent>;

	@Input() person: Person;

	public isShowDetails = false;
	public isSelected$ = this.bioService.selectedPerson$.pipe(
		map((p: Person) => p?.id === this.person.id),
    tap((selected: boolean) => {
      if (selected) {
        this.openDialog = this.dialog.open(PersonDetailsComponent, {
          data: this.person,
        });
      }
    })
	);

	constructor(private bioService: BiosphereService, private dialog: MatDialog) {
		this._maxAge = 70 + utils.getRandomNumber(15) + utils.getRandomNumber(15);

    // this.openDialog.afterClosed();
	}

	ngOnInit() {}

	onClick() {
		if (!this.isDragging) {
			this.bioService.selectPerson(this.person);
		}
	}

	onDragEnd() {
		this.isDragging = false;
	}

	onDragStart(evt: CdkDragStart) {
		this.isDragging = true;
	}
}
