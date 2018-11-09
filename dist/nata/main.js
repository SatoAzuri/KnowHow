(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".know-how-footer {\r\n  font-family: 'Mali', cursive;\r\n  background-color: cornflowerblue;\r\n  padding: 2% 0%;\r\n  text-align: center;\r\n  clear: both;\r\n}\r\n.btn {\r\n  font-family: 'Mali', cursive;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Menu-->\r\n<div class=\"jumbotron\">\r\n  <div style=\"background-color:cadetblue;font-family: 'Mali', cursive;\">\r\n    <button class=\"btn\" mat-button routerLink=\"/\">Know-How</button>\r\n    <button class=\"btn\" mat-button routerLink=\"/about-us\">About us</button>\r\n    <button class=\"btn\" mat-button routerLink=\"/contact-us\">Contact us</button>\r\n    <button class=\"btn\" mat-button routerLink=\"/chapter\">{{signin? 'Progress':'Subscribe'}}</button>\r\n    <button class=\"btn\" mat-button routerLink=\"/signin\">{{signin? 'Log out':'Sign in'}}</button>\r\n\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n\r\n  <!-- Footer -->\r\n  <footer class=\"know-how-footer\">\r\n\r\n    <!-- Copyright -->\r\n    Know-How © 2018 Copyright\r\n\r\n\r\n    <!-- Copyright -->\r\n\r\n  </footer>\r\n  <!-- Footer -->\r\n\r\n</div>\r\n  \r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin.service */ "./src/app/signin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(ser) {
        this.ser = ser;
        this.title = 'nata';
        this.signin = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.signin = this.ser.isSignin();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_signin_service__WEBPACK_IMPORTED_MODULE_1__["SigninService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _logincomponent_logincomponent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logincomponent/logincomponent.component */ "./src/app/logincomponent/logincomponent.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/components/about-us/about-us.component.ts");
/* harmony import */ var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contact-us/contact-us.component */ "./src/app/components/contact-us/contact-us.component.ts");
/* harmony import */ var _components_chapter_chapter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/chapter/chapter.component */ "./src/app/components/chapter/chapter.component.ts");
/* harmony import */ var _components_assignment_assignment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/assignment/assignment.component */ "./src/app/components/assignment/assignment.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _components_magazine_magazine_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/magazine/magazine.component */ "./src/app/components/magazine/magazine.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















//import { Http } from '@angular/http';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _logincomponent_logincomponent_component__WEBPACK_IMPORTED_MODULE_6__["LogincomponentComponent"],
                _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"],
                _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__["ContactUsComponent"],
                _components_chapter_chapter_component__WEBPACK_IMPORTED_MODULE_11__["ChapterComponent"],
                _components_assignment_assignment_component__WEBPACK_IMPORTED_MODULE_12__["AssignmentComponent"],
                _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_14__["HomepageComponent"],
                _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_16__["SigninComponent"],
                _components_magazine_magazine_component__WEBPACK_IMPORTED_MODULE_18__["MagazineComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                // Http,
                _angular_http__WEBPACK_IMPORTED_MODULE_20__["HttpModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot([
                    {
                        path: 'contact-us',
                        component: _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__["ContactUsComponent"]
                    },
                    {
                        path: 'about-us',
                        component: _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"]
                    },
                    {
                        path: 'chapter',
                        component: _components_chapter_chapter_component__WEBPACK_IMPORTED_MODULE_11__["ChapterComponent"]
                    },
                    {
                        path: 'magazine/:id',
                        component: _components_magazine_magazine_component__WEBPACK_IMPORTED_MODULE_18__["MagazineComponent"]
                    },
                    {
                        path: '',
                        component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_14__["HomepageComponent"]
                    },
                    {
                        path: 'signin',
                        component: _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_16__["SigninComponent"]
                    }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about-us/about-us.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about-us/about-us.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-card style=\"padding-bottom:150px;font-family: 'Mali', cursive;\">\r\n  <mat-card-title style=\"text-align:center\">\r\n\r\n    About Know-How!\r\n  </mat-card-title>\r\n  <img mat-card-lg-image src=\"assets/education.jpg\" style=\"float:left\"/>\r\n\r\n  <mat-card-subtitle>\r\n    As technology is an integral part of 21st century students’ realities,\r\n    Know-How Web App is an application created for Department of Education\r\n    to provide an educational tool for schools which will be available on\r\n    computers and other electronic devices with internet access. The web\r\n    app will provide books/ magazine information, videos and images covering\r\n    each school grade with online dictionary and information for their convenience.\r\n    Student’s answers will be recorded, graded and analyzed using machine learning\r\n    tool for the future improvements of educational system.\r\n\r\n\r\n  </mat-card-subtitle>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/about-us/about-us.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/components/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/components/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/components/assignment/assignment.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/assignment/assignment.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/assignment/assignment.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/assignment/assignment.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  assignment works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/assignment/assignment.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/assignment/assignment.component.ts ***!
  \***************************************************************/
/*! exports provided: AssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentComponent", function() { return AssignmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AssignmentComponent = /** @class */ (function () {
    function AssignmentComponent() {
    }
    AssignmentComponent.prototype.ngOnInit = function () {
    };
    AssignmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assignment',
            template: __webpack_require__(/*! ./assignment.component.html */ "./src/app/components/assignment/assignment.component.html"),
            styles: [__webpack_require__(/*! ./assignment.component.css */ "./src/app/components/assignment/assignment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AssignmentComponent);
    return AssignmentComponent;
}());



/***/ }),

/***/ "./src/app/components/chapter/chapter.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/chapter/chapter.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#pic {\r\n  float: left;\r\n  width: 50%;\r\n  height: 255px;\r\n}\r\n\r\n#left {  \r\n  text-align: left;\r\n}\r\n\r\n.container {\r\n  text-align: center;\r\n  font-family: 'Mali', cursive;\r\n  overflow-y: scroll;\r\n  height: 500px;\r\n  width: 800px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/chapter/chapter.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/chapter/chapter.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<input id=\"name\" type=\"text\" [(ngModel)]=\"name\" (change)=\"getData()\" />\r\n\r\n<div class=\"container\">\r\n  <h2>Chapter1</h2>\r\n  <h3>1.1 What are number.</h3>\r\n  <p id=\"left\">\r\n    A number is a basic unit of mathematics. Numbers are used for counting,\r\n    measuring, and comparing amounts. A number system is a set of symbols,\r\n    or numerals, that are used to represent numbers. The most common number system\r\n    uses 10 symbols called digits—0, 1, 2, 3, 4, 5, 6, 7, 8, and 9—and combinations of these digits.\r\n  </p>\r\n\r\n  <img id=\"pic\" src=\"assets/numbers.png\">\r\n  <iframe style=\"width:50%; float:left;height:255px\" src=\"https://www.youtube.com/embed/yxAIBFsRpqU\"\r\n          frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n\r\n  <h3>1.2 How numbers help us.</h3>\r\n  <p id=\"left\">\r\n    Numbers play an important role in our lives.\r\n    Almost all the things we do involve numbers and Mathematics.\r\n    Whether we like it or not, our life revolves in numbers since the day we were born.\r\n    There are numerous numbers directly or indirectly connected to our lives.\r\n    The following are some uses of numbers in our daily life:\r\n  </p>\r\n  <ol id=\"left\">\r\n    <li>Calling a member of a family or a friend using mobile phone.</li>\r\n    <li>Weighing fruits, vegetables, meat, chicken, and others in market.</li>\r\n\r\n    <li>Using elevators to go places or floors in the building.</li>\r\n\r\n    <li>Looking at the price of discounted items in a shopping mall.</li>\r\n\r\n    <li>Telling time you spent on work or school.</li>\r\n\r\n  </ol>\r\n\r\n  <h3>1.3Types of numbers.</h3>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/chapter/chapter.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/chapter/chapter.component.ts ***!
  \*********************************************************/
/*! exports provided: ChapterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapterComponent", function() { return ChapterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../signin.service */ "./src/app/signin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import 'rxjs / add / operator / map';
var ChapterComponent = /** @class */ (function () {
    function ChapterComponent(ser) {
        this.ser = ser;
    }
    ChapterComponent.prototype.ngOnInit = function () {
    };
    ChapterComponent.prototype.getData = function () {
        var _this = this;
        this.ser.getDictonaryData(this.name).subscribe(function (data) {
            _this.dictData = data;
            console.log(_this.dictData);
        }, function (error) {
            console.log("some error occured");
            console.log("error.errorMessage");
        });
    };
    ChapterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapter',
            template: __webpack_require__(/*! ./chapter.component.html */ "./src/app/components/chapter/chapter.component.html"),
            styles: [__webpack_require__(/*! ./chapter.component.css */ "./src/app/components/chapter/chapter.component.css")]
        }),
        __metadata("design:paramtypes", [_signin_service__WEBPACK_IMPORTED_MODULE_1__["SigninService"]])
    ], ChapterComponent);
    return ChapterComponent;
}());



/***/ }),

/***/ "./src/app/components/contact-us/contact-us.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contact-us/contact-us.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card style=\"padding-bottom:150px;font-family: 'Mali', cursive;\">\r\n  <mat-card-title style=\"text-align:center\">\r\n\r\n    Contact us!\r\n  </mat-card-title>\r\n  <img mat-card-lg-image src=\"assets/education.jpg\" style=\"float:left\" />\r\n\r\n  <mat-card-subtitle>\r\n    You are welcome to contact us for information at:\r\n    <br />\r\n    Address: 45 Main Street NY,NY 12000\r\n    <br />\r\n    Phone:   (212)347-9547\r\n    <br />\r\n    E-mail:know-khow@gmail.com\r\n\r\n\r\n  </mat-card-subtitle>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/contact-us/contact-us.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/components/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/components/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/components/homepage/homepage.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grade {\r\n  padding-top: 2%;\r\n  padding-left: 3%;\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50px;\r\n  background-image: linear-gradient(to bottom right, #17a2b8, #28a745);\r\n  color: white;\r\n  text-align: center;\r\n  margin-right: 10px;\r\n  font-size: 40px;\r\n  display: inline-flex;\r\n}\r\n.magazine-cover {\r\n  height: 200px;\r\n  margin-right: 20px;\r\n  display: inline-flex;\r\n}\r\n#card {\r\n  font-family: 'Mali', cursive;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<mat-card id=\"card\" style=\" background-image: url('assets/knowledge.jpg'); background-repeat: no-repeat;background-size: 100%;\">\r\n  <mat-card-header>\r\n    <mat-card-title style=\"font-size:30px; text-align:center;\">\r\n      <h1>Know-How</h1>\r\n    </mat-card-title>\r\n\r\n\r\n    <mat-card-subtitle style=\"text-align:center;\">\r\n      <h2>Engage.Motivate.Inspire</h2>\r\n    </mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content style=\"display:inline-flex; overflow:auto; width:100%\">    \r\n    <div class=\"grade\" *ngFor=\"let grade of grades\" (click)=\"ChangeGrade(grade)\">\r\n      <span>{{grade}}</span>\r\n    </div>\r\n  </mat-card-content>\r\n\r\n</mat-card>\r\n\r\n<mat-card [hidden]=\"!ifgradeclicked\">\r\n  <mat-card-content>\r\n    <img *ngFor=\"let img of magazines\" [src]=img class=\"magazine-cover\" (click)=\"OpenMagazine('0')\"/>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(router, route) {
        this.router = router;
        this.route = route;
        this.grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.magazines_pic = [["assets/1.1.jpg", "assets/1.2.jpg", "assets/1.3.jpg"], ["assets/2.1.jpg", "assets/2.2.jpg"]];
        this.ifgradeclicked = false;
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent.prototype.ChangeGrade = function (grade) {
        this.ifgradeclicked = true;
        if (grade == 1) {
            this.magazines = this.magazines_pic[0];
        }
        else {
            this.magazines = this.magazines_pic[1];
        }
    };
    HomepageComponent.prototype.OpenMagazine = function (id) {
        //redirect to the magazine page
        this.router.navigate(['magazine/', id]);
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/components/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/components/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/components/magazine/magazine.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/magazine/magazine.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n  font-family: 'Mali', cursive;\r\n}\r\n\r\nh3 {\r\n  font-family: 'Mali', cursive;\r\n}\r\n\r\np {\r\n  font-family: 'Mali', cursive;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/magazine/magazine.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/magazine/magazine.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <mat-card style=\"padding-bottom:45px\">\r\n    <mat-card-title>\r\n      <h1 style=\"text-align:center; font-family: 'Mali', cursive;\"> Magazine 1</h1>\r\n    </mat-card-title>\r\n  </mat-card>\r\n  <div style=\"width: 30%; background-color:lightblue; padding:1%; float:left;\">\r\n    <mat-accordion>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Chapter1\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n            Mathematics\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n        <ul>\r\n          <li>1.1 What are number.</li>\r\n          <li>1.2 How numbers help us.</li>\r\n          <li>1.3 Types of numbers.</li>\r\n          <li>1.4 Assignments</li>\r\n        </ul>\r\n      </mat-expansion-panel>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Chapter2\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n            English1\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n        <ul>\r\n          <li>2.1 What are number.</li>\r\n          <li>2.2 How numbers help us.</li>\r\n          <li>2.3 Types of numbers.</li>\r\n          <li>2.4 Assignments</li>\r\n        </ul>\r\n      </mat-expansion-panel>\r\n      <mat-expansion-panel >\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Chapter3\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n            Music\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n        <ul>\r\n          <li>3.1 What are number.</li>\r\n          <li>3.2 How numbers help us.</li>\r\n          <li>3.3 Types of numbers.</li>\r\n          <li>3.4 Assignments</li>\r\n        </ul>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n\r\n\r\n    <!--<mat-card style=\"background-color:white\">\r\n      <h2>Chapter1</h2>\r\n      <h3 style=\"text-align:left;\">\r\n        1.1 What are number.<br />\r\n        1.2 How numbers help us.<br />\r\n        1.3 Types of numbers.<br />\r\n        1.4 Assignments\r\n      </h3>\r\n\r\n      <h2>Chapter2</h2>\r\n      <h3 style=\"text-align:left;\">\r\n        2.1 What are number.<br />\r\n        2.2 How numbers help us.<br />\r\n        2.3 Types of numbers. <br />\r\n        2.4 Assignments\r\n      </h3>\r\n\r\n      <h2>Chapter3</h2>\r\n      <h3 style=\"text-align:left;\">\r\n        3.1 What are number.<br />\r\n        3.2 How numbers help us.<br />\r\n        3.3 Types of numbers. <br />\r\n        3.4 Assignments\r\n      </h3>>\r\n\r\n    </mat-card-->\r\n\r\n  </div>\r\n  <div style=\"width: 70%; background-color:lightblue; padding:1%; float:left\">\r\n    <mat-card style=\"background-color:white; overflow:-webkit-paged-x\">\r\n      <app-chapter></app-chapter>\r\n\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/magazine/magazine.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/magazine/magazine.component.ts ***!
  \***********************************************************/
/*! exports provided: MagazineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagazineComponent", function() { return MagazineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../signin.service */ "./src/app/signin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MagazineComponent = /** @class */ (function () {
    function MagazineComponent(router, route, ser) {
        this.router = router;
        this.route = route;
        this.ser = ser;
        this.panelOpenState = false;
        this.magazines = ['1', '2', '3'];
    }
    MagazineComponent.prototype.ngOnInit = function () {
        //this.magazine = this.route.paramMap.pipe(
        //switchMap((params: ParamMap) =>
        //  this.ser.getMagazine(params.get('id')))
        //);
        //this.magazine = this.route.paramMap.pipe(
        //switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        //this.selectedId = +params.get('id');
        //return this.ser.getMagazine(this.selectedId);
        //})
        //);
        //let b = this.magazine;
        var id = this.route.snapshot.paramMap.get('id');
        this.magazine = this.ser.getMagazine(id);
    };
    MagazineComponent.prototype.back = function () {
        this.router.navigate(['/']);
    };
    MagazineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-magazine',
            template: __webpack_require__(/*! ./magazine.component.html */ "./src/app/components/magazine/magazine.component.html"),
            styles: [__webpack_require__(/*! ./magazine.component.css */ "./src/app/components/magazine/magazine.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _signin_service__WEBPACK_IMPORTED_MODULE_2__["SigninService"]])
    ], MagazineComponent);
    return MagazineComponent;
}());



/***/ }),

/***/ "./src/app/components/signin/signin.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signin/signin.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: 'Mali', cursive;\r\n}\r\n\r\n#form {\r\n  font-family: 'Mali', cursive;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/signin/signin.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signin/signin.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card style=\"padding-bottom:150px;font-family: 'Mali', cursive;text-align:center\">\r\n  <mat-card-title>\r\n     Please Sign in!\r\n  </mat-card-title>\r\n\r\n  <mat-card style=\"width:50%;background-color:aliceblue;margin-left:25%\">\r\n    <div class=\"example-container\" >\r\n\r\n      <mat-form-field id=\"form\">\r\n        <mat-select placeholder=\"Choose your School\">\r\n          <mat-option *ngFor=\"let school of schools\" [value]=\"school.value\">\r\n            {{school.viewValue}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field id=\"form\">\r\n        <input matInput placeholder=\"Username\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field id=\"form\">\r\n        <input type=\"password\" matInput placeholder=\"Password\">\r\n      </mat-form-field>\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n    <button mat-raised-button id=\"form\" color=\"primary\" (click)=\"signin()\">Sign in</button>\r\n\r\n\r\n\r\n  </mat-card>\r\n\r\n\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/signin/signin.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signin/signin.component.ts ***!
  \*******************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../signin.service */ "./src/app/signin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = /** @class */ (function () {
    function SigninComponent(ser, router) {
        this.ser = ser;
        this.router = router;
        this.schools = [
            { value: '0', viewValue: 'PS-140' },
            { value: '1', viewValue: 'PS-245' },
            { value: '2', viewValue: 'PS-35' }
        ];
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.signin = function () {
        this.ser.setSignin(true);
        this.router.navigate(['/',]);
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/components/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/components/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_signin_service__WEBPACK_IMPORTED_MODULE_1__["SigninService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/logincomponent/logincomponent.component.css":
/*!*************************************************************!*\
  !*** ./src/app/logincomponent/logincomponent.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/logincomponent/logincomponent.component.html":
/*!**************************************************************!*\
  !*** ./src/app/logincomponent/logincomponent.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Enter user nane\" value=\"Sushi\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Enter your password\" value=\"Sushi\">\r\n  </mat-form-field>\r\n</form>\r\n\r\n<button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\r\n<mat-menu #menu=\"matMenu\">\r\n  <button mat-menu-item>Item 1</button>\r\n  <button mat-menu-item>Item 2</button>\r\n</mat-menu>\r\n\r\n"

/***/ }),

/***/ "./src/app/logincomponent/logincomponent.component.ts":
/*!************************************************************!*\
  !*** ./src/app/logincomponent/logincomponent.component.ts ***!
  \************************************************************/
/*! exports provided: LogincomponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogincomponentComponent", function() { return LogincomponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogincomponentComponent = /** @class */ (function () {
    function LogincomponentComponent() {
    }
    LogincomponentComponent.prototype.ngOnInit = function () { };
    LogincomponentComponent.prototype.someMethod = function () {
        this.trigger.openMenu();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]),
        __metadata("design:type", _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"])
    ], LogincomponentComponent.prototype, "trigger", void 0);
    LogincomponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logincomponent',
            template: __webpack_require__(/*! ./logincomponent.component.html */ "./src/app/logincomponent/logincomponent.component.html"),
            styles: [__webpack_require__(/*! ./logincomponent.component.css */ "./src/app/logincomponent/logincomponent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogincomponentComponent);
    return LogincomponentComponent;
}());



/***/ }),

/***/ "./src/app/signin.service.ts":
/*!***********************************!*\
  !*** ./src/app/signin.service.ts ***!
  \***********************************/
/*! exports provided: SigninService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninService", function() { return SigninService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import 'rxjs / add / operator / map';
var SigninService = /** @class */ (function () {
    function SigninService(_http) {
        this._http = _http;
        this.word = "aardvark";
        console.log("BlogHttpService is called");
    }
    SigninService.prototype.isSignin = function () { return this.signin; };
    SigninService.prototype.setSignin = function (val) { this.signin = val; };
    SigninService.prototype.getMagazine = function (id) { return "Cat"; };
    SigninService.prototype.handleError = function (err) {
        console.log("Handle error Http calls");
        console.log(err.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(err.message);
    };
    SigninService.prototype.getDictonaryData = function (name) {
        if (name) {
            this.word = name;
        }
        var myResponse = this._http.get('proxy.json' + this.word);
        return myResponse;
    };
    SigninService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], SigninService);
    return SigninService;
}());

//export class HttpClient {
//  get(arg0: string): any {
//    throw new Error("Method not implemented.")
//  }
//}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\natal\KnowHow\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map