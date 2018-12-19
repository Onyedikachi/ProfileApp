import {Component}  from '@angular/core'

declare var $: any;

@Component({
	selector: 'navbar',
	templateUrl: './app/navbar/navbar.component.html',
	styleUrls: ['./app/navbar/navbar.component.css']
})
export class NavbarComponent{
	constructor() {}
	ngOnInit(){

	}
	setActive (menu:any) {
		$('li').removeClass();
		$('#' + menu).addClass("active");
	}
}