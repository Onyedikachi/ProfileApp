import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Routes,RouterModule} from '@angular/router';

import  {HelloWorldCompnent} from './helloworld.component';
import {NavbarComponent} from './navbar/navbar.component';
import {EditComponent} from './edit/edit.component';
import {AddComponent} from './add/add.component';
import {HomeComponent} from './home/home.component';
import  {AppComponent} from './app.component';

const routes:Routes = [
	{path: 'index.htm', redirectTo: '/home', pathMatch:'full'},
	{path: 'home', component:HomeComponent},
	{path: 'edit/:id', component:EditComponent},
	{path: 'add', component:AddComponent},
];

@NgModule({
	imports:[
		CommonModule,
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	],
	declarations: []
})
export class AppRoutingModule { }