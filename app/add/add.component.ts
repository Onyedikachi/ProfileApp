import {Component, OnInit, ChangeDetectorRef}  from '@angular/core';
import {Profile} from '../profile';

import {ActivatedRoute, Params, Router} from '@angular/router';

declare var $: any;

@Component({
	selector: 'add',
	templateUrl: './app/add/add.component.html',
	styleUrls: ['./app/add/add.component.css']
})
export class AddComponent implements OnInit{

	path = '';

	public debug_size_before:string[] = [];
	public debug_size_after:string[] = [];
	public file_src: string = '/app/assets/images/avatar.jpg';
	public file_srcs: string[] = [];

	constructor(
		private router: Router,
		private changeDetectorRef: ChangeDetectorRef,
		) {}

	ngOnInit(){
 
	}

	fileChange(input:any){
		this.readFiles(input.files);
	}
	readFile(file:any,reader:any, callback:any){
		reader.onload = ()=> {
			callback(reader.result);
			this.model.photo = reader.result;
			console.log(reader.result);
		}
		reader.readAsDataURL(file);
	}
	readFiles(files:any, index= 0){
		// Create  the file reader
		let reader = new FileReader();
		// iF there is a file
		if (index in files){
			// Start reading this file
			this.readFile(files(index), reader, (result:any) => {
				// Create as img element and add the image file data to it
				var img =  document.createElement("img");
				img.src = result;
				// Send this img to the the result function and wait for the feedback
				this.resize(img,250,250,(resized_jpeg:any, before:any, after:any) =>{
					// For debugging (file in bytes before and after)
					this.debug_size_before.push(before);
					this.debug_size_after.push(after);
					//Add the resized jpeg img source to a list for preview
					// this is also  the file you want to upload, either as
					// string or img.src=resized_jpeg if you prefer a file
					this.file_srcs.push(resized_jpeg);
					// Read the next file,;
					this.readFiles(files,index);
				});
			});
		} else {
			// this.error = "no File";
			// When all files are done This forces A Change detection
			this.changeDetectorRef.detectChanges();
		}
	}

	resize(img:any, MAX_WIDTH: number, MAX_HEIGHT: number, callback:any){
		// This will wait until the img is loaded before calling this function
		return img.onload = ()=>{
			// Get the images current width and height
			var width = img.width;
			var height =  img.height;
			// Set the width to fit the Max Values (but Maintain Proportions)	
			if (width >	height){
				if (width > MAX_WIDTH){
					height *= MAX_WIDTH/width;
					width = MAX_WIDTH;	
				}
			}else{
				if (height >MAX_HEIGHT) {
					width *= MAX_HEIGHT /height;
					height = MAX_HEIGHT;
				}
			}
			// CREATE A CANVAS OBJECT
			var canvas = document.createElement('canvas');
			// Set the canvas to the new calculated dimensions
			canvas.width = width;
			canvas.height = height;
			var ctx = canvas.getContext('2d');
			ctx.drawImage(img,0,0,width,height);

			// get this encoded as jpeg
			// Important: 'jpeg' NOT 'jpg'
			var dataUrl = canvas.toDataURL('image/jpeg');
			// Callback with the results
			callback(dataUrl, img.src.length, dataUrl.length);
		};
	}
 
	imageUploaded(file: any){
		$('img').hide();
		alert(file.src);
	}
	imageRemoved(file: any){
		$('img').show();
	}

	model =  new Profile();
	addProfile(){

	}

	goBack(){
		this.router.navigate(['/home']);
	}
}