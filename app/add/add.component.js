"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var profile_1 = require("../profile");
var router_1 = require("@angular/router");
var AddComponent = /** @class */ (function () {
    function AddComponent(router, changeDetectorRef) {
        this.router = router;
        this.changeDetectorRef = changeDetectorRef;
        this.path = '';
        this.debug_size_before = [];
        this.debug_size_after = [];
        this.file_src = '/app/assets/images/avatar.jpg';
        this.file_srcs = [];
        this.model = new profile_1.Profile();
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.fileChange = function (input) {
        this.readFiles(input.files);
    };
    AddComponent.prototype.readFile = function (file, reader, callback) {
        var _this = this;
        reader.onload = function () {
            callback(reader.result);
            _this.model.photo = reader.result;
            console.log(reader.result);
        };
        reader.readAsDataURL(file);
    };
    AddComponent.prototype.readFiles = function (files, index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        // Create  the file reader
        var reader = new FileReader();
        // iF there is a file
        if (index in files) {
            // Start reading this file
            this.readFile(files(index), reader, function (result) {
                // Create as img element and add the image file data to it
                var img = document.createElement("img");
                img.src = result;
                // Send this img to the the result function and wait for the feedback
                _this.resize(img, 250, 250, function (resized_jpeg, before, after) {
                    // For debugging (file in bytes before and after)
                    _this.debug_size_before.push(before);
                    _this.debug_size_after.push(after);
                    //Add the resized jpeg img source to a list for preview
                    // this is also  the file you want to upload, either as
                    // string or img.src=resized_jpeg if you prefer a file
                    _this.file_srcs.push(resized_jpeg);
                    // Read the next file,;
                    _this.readFiles(files, index);
                });
            });
        }
        else {
            // this.error = "no File";
            // When all files are done This forces A Change detection
            this.changeDetectorRef.detectChanges();
        }
    };
    AddComponent.prototype.resize = function (img, MAX_WIDTH, MAX_HEIGHT, callback) {
        // This will wait until the img is loaded before calling this function
        return img.onload = function () {
            // Get the images current width and height
            var width = img.width;
            var height = img.height;
            // Set the width to fit the Max Values (but Maintain Proportions)	
            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            }
            else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
            // CREATE A CANVAS OBJECT
            var canvas = document.createElement('canvas');
            // Set the canvas to the new calculated dimensions
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            // get this encoded as jpeg
            // Important: 'jpeg' NOT 'jpg'
            var dataUrl = canvas.toDataURL('image/jpeg');
            // Callback with the results
            callback(dataUrl, img.src.length, dataUrl.length);
        };
    };
    AddComponent.prototype.imageUploaded = function (file) {
        $('img').hide();
        alert(file.src);
    };
    AddComponent.prototype.imageRemoved = function (file) {
        $('img').show();
    };
    AddComponent.prototype.addProfile = function () {
    };
    AddComponent.prototype.goBack = function () {
        this.router.navigate(['/home']);
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: 'add',
            templateUrl: './app/add/add.component.html',
            styleUrls: ['./app/add/add.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            core_1.ChangeDetectorRef])
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
//# sourceMappingURL=add.component.js.map