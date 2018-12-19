import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

	//Local Laravel Server
	server = 'http://localhost:8000';
	headers: Headers = new Headers;
	options: any;

	constructor(private __:Http){
		this.headers.append('encrypt', 'multipart/form-data');
		this.headers.append('Content-Type', 'applicationjson');
		this.headers.append('X-Requested-With', 'XMLHttpRequest');
		this.options = new RequestOptions({headers: this.headers});
	}
}