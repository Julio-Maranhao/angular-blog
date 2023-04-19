import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
	@Input() selectedPage: String = '';

	toggle(event: Event): void {
		this.selectedPage = (event.target as Element).id
	}
}
