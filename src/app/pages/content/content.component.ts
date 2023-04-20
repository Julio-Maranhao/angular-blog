import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
	photoCover: string = '';
	contentDate: string = '';
	contentTitle: string = '';
	contentDescription: string = '';
	private id: string | null = "0";

	constructor(private route:ActivatedRoute) {

	}

	ngOnInit(): void {
		this.route.paramMap.subscribe( value =>
			this.id = (value.get('id') == null) ? 'null' : value.get('id')
		)

		this.setValuesToComponent(this.id)
	}

	setValuesToComponent(id:string | null) {
		const result = dataFake.filter(article => article.id.toString() === id)[0]

		if (result) {
			this.photoCover = result.photo
			this.contentDate = result.date
			this.contentDescription = result.description
			this.contentTitle = result.title
		} else {
			this.contentTitle = 'Not Found!'
		}
	}
}
