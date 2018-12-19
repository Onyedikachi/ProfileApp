import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';

import {AppRoutingModule} from './app-routing.module';
// import {ImageUploadModule} from 'angular2-image-upload';



import  {HelloWorldCompnent} from './helloworld.component';
import {NavbarComponent} from './navbar/navbar.component';
import {EditComponent} from './edit/edit.component';
import {AddComponent} from './add/add.component';
import {HomeComponent} from './home/home.component';
import  {AppComponent} from './app.component';

import {ProfileService} from './services/profile.service';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpModule
	],
	declarations: [HelloWorldCompnent, NavbarComponent,HomeComponent,AddComponent,EditComponent, AppComponent],
	bootstrap: [HelloWorldCompnent,NavbarComponent,HomeComponent,AddComponent,EditComponent, AppComponent],
	providers:[
		ProfileService,
		{provide: APP_BASE_HREF, useValue: '/'}
	]
})
export class AppModule {}
