import { Component, OnInit, Input, Inject } from '@angular/core';
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
  providers: [{ provide: Window, useValue: window }],
})
export class PersonComponent implements OnInit {
	private isDragging = false;
  private openDialog: MatDialogRef<PersonDetailsComponent>;
  private maxAge: number;
  private maxWeight: number;

	@Input() person: Person;

  public position = {
    left: 0,
    top: 0,
  }
	public isShowDetails = false;
	public isSelected$ = this.bioService.selectedPerson$.pipe(
		map((p: Person) => p?.id === this.person.id),
    tap((selected: boolean) => {
      if (selected) {
        this.dialog.closeAll();
        this.openDialog = this.dialog.open(PersonDetailsComponent, {
          data: this.person,
        });
      }
    })
	);

	constructor(private bioService: BiosphereService, private dialog: MatDialog, @Inject(Window) private window: Window) {
    this.maxAge = 70 + utils.getRandomNumber(15) + utils.getRandomNumber(15);
    this.maxWeight = 400 + utils.getRandomNumber(150);
    // this.openDialog.afterClosed();
	}

	ngOnInit() {
    this.position.left = utils.getRandomNumber(this.window.innerWidth);
    this.position.top = utils.getRandomNumber(this.window.innerHeight - 100);
  }

	onClick(evt) {
    evt.preventDefault();
		if (!this.isDragging) {
			this.bioService.selectPerson(this.person);
		}
	}

	onDragReleased() {
		this.isDragging = false;
	}

	onDragStart(evt: CdkDragStart) {
		this.isDragging = true;
	}
}
