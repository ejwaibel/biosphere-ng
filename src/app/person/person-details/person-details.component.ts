import { Component, OnInit, Input, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Person } from '../../core/model/person.model';

@Component({
	selector: 'app-person-details',
	templateUrl: './person-details.component.html',
	styleUrls: ['./person-details.component.scss'],
})
export class PersonDetailsComponent implements OnInit {
	@Input() person: Person;

	public displayData = {
		id: {
			icon: '',
			label: 'Identification',
		},
		age: {
			icon: '',
			label: 'Age',
		},
		gender: {
			icon: '',
			label: 'Gender',
		},
		clothing: {
			icon: '',
			label: 'Clothing',
		},
		isMute: {
			icon: '',
			label: 'Mute?',
		},
		weight: {
			icon: '',
			label: 'Weight',
		},
		dirtFactor: {
			icon: '',
			label: 'Dirt Factor',
		},
		sleepFactor: {
			icon: '',
			label: 'Sleep Factor',
		},
	};

	constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

	ngOnInit() {}
}
