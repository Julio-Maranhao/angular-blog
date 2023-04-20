import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake';

type card = {
	id:string
	photo:string
	title:string
	description:string
	date:string
	categories:string[]
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	mainElement:card = {
		id: '',
		photo: '',
		title: '',
		description: '',
		date: '',
		categories: []
	};

	otherElements:card[] = [];

	ngOnInit(): void {
		this.setMainElement();
		this.setOtherElements();
	}

	setMainElement() {
		const data = dataFake.reverse()[0]
		if (data) {
			this.mainElement.id = data.id.toString();
			this.mainElement.photo = data.photo;
			this.mainElement.title = data.title;
			this.mainElement.description = data.description;
			this.mainElement.date = data.date;
			this.mainElement.categories = data.categories;
		}
	}

	setOtherElements() {
		const elements = dataFake.reverse().slice(1, 4)
		for (let data of elements) {
			this.otherElements.push({
				id: data.id.toString(),
				photo: data.photo,
				title: data.title,
				description: data.description,
				date: data.date,
				categories: data.categories
			})
		}
	}

}
