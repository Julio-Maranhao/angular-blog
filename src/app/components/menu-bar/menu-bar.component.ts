import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
	selectedPage: string | null = 'home';

	constructor(private router: Router){
		router.events.subscribe(event => {
			if (event instanceof NavigationStart) {
				let url:string = event.url.split('/').slice(-1)[0]
				this.selectedPage = url ? url : 'home';
			}})
	}

	toggle(event: Event): void {
		this.selectedPage = (event.target as Element).id;
	}
}
