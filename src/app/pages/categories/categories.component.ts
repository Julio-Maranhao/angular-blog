import { Component, OnInit} from '@angular/core';
import { dataFake } from '../../data/dataFake';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

type card = {
	id:string
	photo:string
	title:string
	description:string
	date:string
	categories:string[]
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent{
	mainElement:card = {
		id: '',
		photo: '',
		title: '',
		description: '',
		date: '',
		categories: []
	};

	otherElements:card[] = [];
	page: string|null = '';

	constructor(private route:ActivatedRoute, private router: Router){
		router.events.subscribe(value => {
			if (value instanceof NavigationEnd) {
				this.otherElements = [];
				if (value.url.split('/').slice(-2)[0] == 'categories') {
					this.getCurrentPage();
					this.setMainElement(this.page);
					this.setOtherElements(this.page);
				}
			}
		})
	}

	ngOnInit(): void {

	}

	setMainElement(page:string|null) {
		const data = dataFake.filter(item => item.categories.includes(page!)).reverse()[0]
		if (data) {
			this.mainElement.id = data.id.toString();
			this.mainElement.photo = data.photo;
			this.mainElement.title = data.title;
			this.mainElement.description = data.description;
			this.mainElement.date = data.date;
			this.mainElement.categories = data.categories;
		}
	}

	setOtherElements(page:string|null) {
		const elements = dataFake.filter(item => item.categories.includes(page!)).reverse().slice(1, 4)
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

	getCurrentPage() {
		this.route.paramMap.subscribe(value =>
			this.page = value.get('category') ? value.get('category') : '')
		console.log(this.page)
	}
}
