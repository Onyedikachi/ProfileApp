"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var app_routing_module_1 = require("./app-routing.module");
// import {ImageUploadModule} from 'angular2-image-upload';
var helloworld_component_1 = require("./helloworld.component");
var navbar_component_1 = require("./navbar/navbar.component");
var edit_component_1 = require("./edit/edit.component");
var add_component_1 = require("./add/add.component");
var home_component_1 = require("./home/home.component");
var app_component_1 = require("./app.component");
var profile_service_1 = require("./services/profile.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            declarations: [helloworld_component_1.HelloWorldCompnent, navbar_component_1.NavbarComponent, home_component_1.HomeComponent, add_component_1.AddComponent, edit_component_1.EditComponent, app_component_1.AppComponent],
            bootstrap: [helloworld_component_1.HelloWorldCompnent, navbar_component_1.NavbarComponent, home_component_1.HomeComponent, add_component_1.AddComponent, edit_component_1.EditComponent, app_component_1.AppComponent],
            providers: [
                profile_service_1.ProfileService,
                { provide: common_1.APP_BASE_HREF, useValue: '/' }
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map