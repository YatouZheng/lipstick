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

/***/ "./src/app/IBoardList.ts":
/*!*******************************!*\
  !*** ./src/app/IBoardList.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FilterType;
(function (FilterType) {
    FilterType[FilterType["Manufacturer"] = 0] = "Manufacturer";
    FilterType[FilterType["BoardType"] = 1] = "BoardType";
    FilterType[FilterType["None"] = 2] = "None";
})(FilterType = exports.FilterType || (exports.FilterType = {}));


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* The side navigation menu */\n.sidenav {\n    height: 100%; /* 100% Full-height */\n    width: 250px; /* 0 width - change this with JavaScript */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Stay on top */\n    top: 50px;\n    left: 0;\n    background-color: #111; /* Black*/\n    overflow-x: hidden; /* Disable horizontal scroll */\n    padding-top: 60px; /* Place content 60px from the top */\n    transition: 0.3s;   \n}\n/* The navigation menu links */\n.sidenav a {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 25px;\n    color: #818181;\n    display: block;\n    transition: 0.3s\n}\n/* When you mouse over the navigation links, change their color */\n.sidenav a:hover, .offcanvas a:focus{\n    color: #f1f1f1;\n}\n#main {\n    margin-left: 250px;\n    transition: .3s;\n}\n#main-body {\n    transition: .3s;\n}\n.main-content {\n    padding: 20px;\n}\n.row-content-header {\n    padding: 5px;\n    font-size: 20px;\n}\n/* The Overlay (background) */\n.overlay {\n    height: 100%;\n    width: 100%;\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 54px;\n    overflow-x: hidden; /* Disable horizontal scroll */\n    transition: 0.3s;  \n    -webkit-transform: translateX(100%);  \n            transform: translateX(100%);\n    border-left: 1px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCO0FBQzdCO0lBQ0ksWUFBWSxFQUFFLHFCQUFxQjtJQUNuQyxZQUFZLEVBQUUsMENBQTBDO0lBQ3hELGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsVUFBVSxFQUFFLGdCQUFnQjtJQUM1QixTQUFTO0lBQ1QsT0FBTztJQUNQLHNCQUFzQixFQUFFLFNBQVM7SUFDakMsa0JBQWtCLEVBQUUsOEJBQThCO0lBQ2xELGlCQUFpQixFQUFFLG9DQUFvQztJQUN2RCxnQkFBZ0I7QUFDcEI7QUFFQSw4QkFBOEI7QUFDOUI7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0lBQ2QsY0FBYztJQUNkO0FBQ0o7QUFFQSxpRUFBaUU7QUFDakU7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFFQSw2QkFBNkI7QUFDN0I7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsVUFBVSxFQUFFLGVBQWU7SUFDM0IsT0FBTztJQUNQLFNBQVM7SUFDVCxrQkFBa0IsRUFBRSw4QkFBOEI7SUFDbEQsZ0JBQWdCO0lBQ2hCLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUaGUgc2lkZSBuYXZpZ2F0aW9uIG1lbnUgKi9cbi5zaWRlbmF2IHtcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIDEwMCUgRnVsbC1oZWlnaHQgKi9cbiAgICB3aWR0aDogMjUwcHg7IC8qIDAgd2lkdGggLSBjaGFuZ2UgdGhpcyB3aXRoIEphdmFTY3JpcHQgKi9cbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgICB6LWluZGV4OiAxOyAvKiBTdGF5IG9uIHRvcCAqL1xuICAgIHRvcDogNTBweDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7IC8qIEJsYWNrKi9cbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIERpc2FibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cbiAgICBwYWRkaW5nLXRvcDogNjBweDsgLyogUGxhY2UgY29udGVudCA2MHB4IGZyb20gdGhlIHRvcCAqL1xuICAgIHRyYW5zaXRpb246IDAuM3M7ICAgXG59XG5cbi8qIFRoZSBuYXZpZ2F0aW9uIG1lbnUgbGlua3MgKi9cbi5zaWRlbmF2IGEge1xuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDMycHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjb2xvcjogIzgxODE4MTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2l0aW9uOiAwLjNzXG59XG5cbi8qIFdoZW4geW91IG1vdXNlIG92ZXIgdGhlIG5hdmlnYXRpb24gbGlua3MsIGNoYW5nZSB0aGVpciBjb2xvciAqL1xuLnNpZGVuYXYgYTpob3ZlciwgLm9mZmNhbnZhcyBhOmZvY3Vze1xuICAgIGNvbG9yOiAjZjFmMWYxO1xufVxuXG4jbWFpbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xuICAgIHRyYW5zaXRpb246IC4zcztcbn1cblxuI21haW4tYm9keSB7XG4gICAgdHJhbnNpdGlvbjogLjNzO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ucm93LWNvbnRlbnQtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4vKiBUaGUgT3ZlcmxheSAoYmFja2dyb3VuZCkgKi9cbi5vdmVybGF5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiA1NHB4O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogRGlzYWJsZSBob3Jpem9udGFsIHNjcm9sbCAqL1xuICAgIHRyYW5zaXRpb246IDAuM3M7ICBcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar-component></navbar-component>\n<app-side-nav (notify)='onNotifyFilter($event)'></app-side-nav>\n<app-rightscreen (notify)='onNotifyRightWindow($event)'></app-rightscreen>\n<login-component></login-component>\n\n<div id=\"main\" class=\"main-content-panel\">\n  <div class=\"row\">\n    <div class=\"col-sm-1\">\n      <button class=\"btn button-no-borders\" style=\"background-color: #a7d2fc; color: aliceblue;  \" (click)=\"showHideSideClicked()\">\n        <span id=\"show-hide-side-button\" class=\"fa fa-chevron-right\"> </span>\n      </button>\n    </div>\n    <div class=\"col-sm-11\" style=\"margin-left: -30px;\">\n      <div class=\"row-content-header\">{{title}}</div>\n    </div>\n  </div>\n\n  <div class=\"main-content\">\n    <app-boardlist (notify)='onNotifyBoardList($event)'></app-boardlist>\n  </div>\n<div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var side_nav_component_1 = __webpack_require__(/*! ./side-nav/side-nav.component */ "./src/app/side-nav/side-nav.component.ts");
var rightscreen_component_1 = __webpack_require__(/*! ./rightscreen/rightscreen.component */ "./src/app/rightscreen/rightscreen.component.ts");
var state_mediator_1 = __webpack_require__(/*! ./state.mediator */ "./src/app/state.mediator.ts");
var boardlist_component_1 = __webpack_require__(/*! ./boardlist/boardlist.component */ "./src/app/boardlist/boardlist.component.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "Select an option :";
        this.isSideNavVisible = true;
        this.mediator = new state_mediator_1.Mediator(this);
    }
    //实现了afterviewinit这个接口的方法
    AppComponent.prototype.ngAfterViewInit = function () {
        this.mediator.moveToState(state_mediator_1.StateType.MainPanelOnly);
    };
    //准备实现调停者接口
    AppComponent.prototype.showNavPanel = function () {
        this.sideNav.showNav();
        document.getElementById('main').style.marginLeft = "250px";
    };
    AppComponent.prototype.hideNavPanel = function () {
        this.sideNav.closeNav();
        document.getElementById('main').style.marginLeft = "0px";
    };
    AppComponent.prototype.showDetailPanel = function () {
        this.rightScreen.openRightWindow();
        document.getElementById('main').style.transform = "translateX(-100%)";
    };
    AppComponent.prototype.hideDetailPanel = function () {
        this.rightScreen.closeRightWindow();
        document.getElementById('main').style.transform = "translateX(0%)";
    };
    AppComponent.prototype.changeShowHideSideButton = function (fromClass, toClass) {
        if (fromClass.length > 0 && toClass.length > 0) {
            document.getElementById('show-hide-side-button').classList.remove(fromClass);
            document.getElementById('show-hide-side-button').classList.add(toClass);
        }
    };
    AppComponent.prototype.showLoginPanel = function () {
        // this.rightScreen.closeRightWindow();
        document.getElementById('loginPanel').classList.remove('login_sidenav_fade');
        document.getElementById('loginPanel').style.visibility = 'visible';
    };
    AppComponent.prototype.hideLoginPanel = function () {
        document.getElementById('loginPanel').classList.add('login_sidenav_fade');
        setTimeout(function () {
            document.getElementById('loginPanel').style.visibility = 'hidden';
        }, 1000);
    };
    //负责响应主面板上面detail按钮的方法
    AppComponent.prototype.buttonClickedDetail = function () {
        this.mediator.moveToState(state_mediator_1.StateType.DetailPanel);
    };
    //显示或隐藏侧边栏按钮的方法
    AppComponent.prototype.showHideSideClicked = function () {
        this.mediator.showHideSideNavClicked();
    };
    //响应从子组件发出来的事件（从rightscreen.component.ts里面的closeClicked方法发出的notify事件）
    AppComponent.prototype.onNotifyRightWindow = function (message) {
        this.mediator.moveToState(this.mediator.getCurrentMainPanelState()); //获取进入详细信息页面之前的主面板状态（有可能包含侧边栏也有可能不包含）
    };
    AppComponent.prototype.onNotifyBoardList = function (board) {
        this.rightScreen.board = board;
        console.log(board);
        this.mediator.moveToState(state_mediator_1.StateType.DetailPanel);
    };
    AppComponent.prototype.onNotifyFilter = function (filter) {
        this.boardList.applyFilter(filter);
    };
    tslib_1.__decorate([
        core_1.ViewChild(side_nav_component_1.SideNavComponent),
        tslib_1.__metadata("design:type", side_nav_component_1.SideNavComponent)
    ], AppComponent.prototype, "sideNav", void 0);
    tslib_1.__decorate([
        core_1.ViewChild(rightscreen_component_1.RightscreenComponent),
        tslib_1.__metadata("design:type", rightscreen_component_1.RightscreenComponent)
    ], AppComponent.prototype, "rightScreen", void 0);
    tslib_1.__decorate([
        core_1.ViewChild(boardlist_component_1.BoardlistComponent),
        tslib_1.__metadata("design:type", boardlist_component_1.BoardlistComponent)
    ], AppComponent.prototype, "boardList", void 0);
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
;
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var navbar_component_1 = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
var login_component_1 = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var side_nav_component_1 = __webpack_require__(/*! ./side-nav/side-nav.component */ "./src/app/side-nav/side-nav.component.ts");
var rightscreen_component_1 = __webpack_require__(/*! ./rightscreen/rightscreen.component */ "./src/app/rightscreen/rightscreen.component.ts");
var boardlist_component_1 = __webpack_require__(/*! ./boardlist/boardlist.component */ "./src/app/boardlist/boardlist.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                login_component_1.LoginComponent,
                side_nav_component_1.SideNavComponent,
                rightscreen_component_1.RightscreenComponent, boardlist_component_1.BoardlistComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/boardlist/boardlist.component.css":
/*!***************************************************!*\
  !*** ./src/app/boardlist/boardlist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".board_panel {\n    padding: 10px;\n}\n\n.board_inner_panel {\n    background-color: white;\n    padding: 15px;\n    border-left: solid 10px ;\n    border-left-color: #016876;\n    cursor: pointer;\n}\n\n.board_title_row {\n    padding-bottom: 10px;\n    border-bottom: solid 4px #016876;\n    margin-right: 5px;\n    /*background-color: dimgray;*/\n}\n\n.board_name {\n    font-size: 1.2em;\n    font-weight: bold;\n}\n\n.no_padding_left {\n    padding-left: 0px;\n}\n\n.rrd_logo_class {\n    min-height: 50px;\n    max-height: 50px;\n    min-width: 75px;\n    max-width: 75px;\n}\n\n.jpa_logo_class {\n    min-height: 50px;\n    max-height: 50px;\n    min-width: 50px;\n    max-width: 50px;\n}\n\n.board_details_row {\n    margin-top: 5px;\n}\n\n.thumb_img_height {\n    height: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmRsaXN0L2JvYXJkbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdDQUFnQztJQUNoQyxpQkFBaUI7SUFDakIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFHQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9ib2FyZGxpc3QvYm9hcmRsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9hcmRfcGFuZWwge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5ib2FyZF9pbm5lcl9wYW5lbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItbGVmdDogc29saWQgMTBweCA7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICMwMTY4NzY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYm9hcmRfdGl0bGVfcm93IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCA0cHggIzAxNjg3NjtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAvKmJhY2tncm91bmQtY29sb3I6IGRpbWdyYXk7Ki9cbn1cblxuLmJvYXJkX25hbWUge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cblxuLm5vX3BhZGRpbmdfbGVmdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5ycmRfbG9nb19jbGFzcyB7XG4gICAgbWluLWhlaWdodDogNTBweDtcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xuICAgIG1pbi13aWR0aDogNzVweDtcbiAgICBtYXgtd2lkdGg6IDc1cHg7XG59XG5cbi5qcGFfbG9nb19jbGFzcyB7XG4gICAgbWluLWhlaWdodDogNTBweDtcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xuICAgIG1pbi13aWR0aDogNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwcHg7XG59XG4uYm9hcmRfZGV0YWlsc19yb3cge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnRodW1iX2ltZ19oZWlnaHQge1xuICAgIGhlaWdodDogMTIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/boardlist/boardlist.component.html":
/*!****************************************************!*\
  !*** ./src/app/boardlist/boardlist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div *ngFor=\"let manufacturer of currentList; let i_manuf = index \">\n    \n    <div class=\"row\">\n        <div class=\"col-sm-4\" *ngFor=\"let board of manufacturer.boards; let i_board = index\">\n            <!--<a href=\"#\" (click)=\"navClicked(item)\">{{board.Name}}</a>-->\n              <div  class=\"board_panel\" (click)=\"boardClicked(board)\" id=\"board_item_{{i_manuf}}_{{i_board}}\">\n                <div class=\"board_inner_panel\">\n                  <div class=\"row board_title_row\">\n                    <div class=\"col-sm-10\">\n                      <span class=\"center-block board_name\">{{board.name}}</span>\n                      <span class=\"center-block xboard_title_row\">\n                        {{board.description}}\n                      </span>\n                    </div>\n                    <div class=\"col-sm-2 no_padding_left board_small_image\">\n                      <img src=\"/dist/board/assets/images/{{manufacturer.manufacturer_logo}}\" class=\"jpa_logo_class\" />\n                    </div>\n                  </div>\n                  <div class=\"row board_details_row\">\n                    <a>\n                      <div class=\"col-sm-7\">\n                        <img src=\"/dist/board/assets/images/{{board.image}}\" class=\"img-thumbnail\" />\n                      </div>\n                    </a>\n                    <div class=\"col-sm-4 \">\n                      <div class=\"row\">\n                        <span>&nbsp;</span>\n                      </div>\n                      <div class=\"row\">\n                        Sizes:\n                      </div>\n                      <div class=\"row board_size_mini_view\">\n                        <table>\n                          <tr *ngFor=\"let size of board.sizes\">\n                            <td>{{size.volume}}</td>\n                          </tr>\n                        </table>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>                           \n          </div>\n    </div>  \n  </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/boardlist/boardlist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/boardlist/boardlist.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var IBoardList_1 = __webpack_require__(/*! ../IBoardList */ "./src/app/IBoardList.ts");
var BoardlistComponent = /** @class */ (function () {
    function BoardlistComponent(http) {
        var _this = this;
        this.http = http;
        this.notify = new core_1.EventEmitter();
        console.log("BoardListComponent constructor");
        this.http.get('/boards').subscribe(//定阅从get方法返回的可观察者对象（只要get一有数据就传给subscribe）
        function (data) {
            _this.currentList = _this.manufacturerList = data;
        }, function (err) {
            console.log("error: " + err);
        }, function () {
            console.log("success");
        });
    }
    BoardlistComponent.prototype.boardClicked = function (board) {
        this.notify.emit(board);
    };
    BoardlistComponent.prototype.applyFilter = function (filter) {
        this.currentList = new Array();
        if (filter.filterType == IBoardList_1.FilterType.Manufacturer) {
            for (var _i = 0, _a = this.manufacturerList; _i < _a.length; _i++) {
                var manuf = _a[_i];
                if (manuf.manufacturer == filter.filterValue) {
                    this.currentList.push(manuf);
                    console.log(this.currentList);
                }
            }
        }
        //code for board type filter
        if (filter.filterType == IBoardList_1.FilterType.BoardType) {
            for (var _b = 0, _c = this.manufacturerList; _b < _c.length; _b++) {
                var manuf = _c[_b];
                var currentManf = {
                    manufacturer: manuf.manufacturer,
                    manufacturer_logo: manuf.manufacturer_logo
                };
                currentManf.boards = new Array();
                var boardFound = false;
                for (var _d = 0, _e = manuf.boards; _d < _e.length; _d++) {
                    var board = _e[_d];
                    //if (board.board_types)
                    for (var _f = 0, _g = board.board_types; _f < _g.length; _f++) {
                        var boardtype = _g[_f];
                        if (boardtype.board_type == filter.filterValue) {
                            boardFound = true;
                            currentManf.boards.push(board);
                        }
                    }
                }
                if (boardFound) {
                    this.currentList.push(currentManf);
                }
            }
        }
        if (filter.filterType == IBoardList_1.FilterType.None) {
            this.currentList = this.manufacturerList;
        }
    };
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], BoardlistComponent.prototype, "notify", void 0);
    BoardlistComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-boardlist',
            template: __webpack_require__(/*! ./boardlist.component.html */ "./src/app/boardlist/boardlist.component.html"),
            styles: [__webpack_require__(/*! ./boardlist.component.css */ "./src/app/boardlist/boardlist.component.css")]
        }),
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], BoardlistComponent);
    return BoardlistComponent;
}());
exports.BoardlistComponent = BoardlistComponent;


/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .login_sidenav{\n    height:100%;\n    width: 450%;\n    position:fixed;\n    background-color:#111;\n    overflow-x: hidden;\n    padding-top: 60%px;\n    color:lightgray;\n}\n\n.login_sidenav .row{\n    padding:20px;\n    font-size: 24px;\n}\n\n.sidenav-input{\n    padding:5px;\n    font-size: 24px;\n    color:midnightblue;\n}\n\n.login_sidenav .closebtn{\n    position: absolute;\n    top:60px;\n    right:25px;\n    font-size: 36px;\n    margin-left: 50px;    \n}\n\n.login_sidenav a:hover, .offcanvas a:focus{\n    color:#f1f1f1;\n}\n\n.login_sidenav a{\n    padding:8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 25px;\n    color: #818181;\n    display:block;\n    transition:0.3s\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdDRyIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAubG9naW5fc2lkZW5hdntcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB3aWR0aDogNDUwJTtcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxMTE7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHBhZGRpbmctdG9wOiA2MCVweDtcbiAgICBjb2xvcjpsaWdodGdyYXk7XG59XG5cbi5sb2dpbl9zaWRlbmF2IC5yb3d7XG4gICAgcGFkZGluZzoyMHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLnNpZGVuYXYtaW5wdXR7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOm1pZG5pZ2h0Ymx1ZTtcbn1cblxuLmxvZ2luX3NpZGVuYXYgLmNsb3NlYnRue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6NjBweDtcbiAgICByaWdodDoyNXB4O1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBtYXJnaW4tbGVmdDogNTBweDsgICAgXG59XG5cbi5sb2dpbl9zaWRlbmF2IGE6aG92ZXIsIC5vZmZjYW52YXMgYTpmb2N1c3tcbiAgICBjb2xvcjojZjFmMWYxO1xufVxuXG4ubG9naW5fc2lkZW5hdiBhe1xuICAgIHBhZGRpbmc6OHB4IDhweCA4cHggMzJweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiAjODE4MTgxO1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgdHJhbnNpdGlvbjowLjNzXG59ICovIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"loginPanel\" class=\"login_sidenav\">\n  <form>\n    <div class=\"container\">\n      <a href=\"#\" class=\"closebtn\">&times;</a>\n      <div class=\"row\">Please Login: </div>\n\n      <div class=\"row\">\n        <input class=\"sidenav-input\" type=\"text\" placeholder=\"Username\" name=\"userName\" [(ngModel)]=\"userName\"></div>\n\n      <div class=\"row\">\n        <input class=\"sidenav-input\" type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\"></div>\n\n      <div class=\"row\">\n        <button class=\"btn btn-primary btn-lg\" (click)=\"loginClicked()\">Login\n        </button>\n      </div>\n\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(http) {
        this.http = http;
    }
    LoginComponent.prototype.loginClicked = function () {
        console.log("this.userName : " + this.userName);
        console.log("this.password : " + this.password);
        var headers = new http_1.HttpHeaders();
        headers.append('Content-Type', 'application/json');
        var jsonPacket = {
            userName: this.userName,
            password: this.password
        };
        this.http.post('/login', jsonPacket, { headers: headers }).subscribe(function (data) { return data; }, function (err) {
            console.log("error : " + err);
        }, function () {
            console.log("success");
        });
    };
    LoginComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'login-component',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-default navbar-fixed-top navbar-inverse\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\">Home</a>\n    <ul class=\"nav navbar-nav\">\n      \n      <li *ngFor=\"let item of menuItems; let i = index\">\n        <a href=\"#\">{{item.ButtonName}}</a>\n      </li>\n    </ul>\n\n  </div>\n\n</nav> -->\n\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Home</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" *ngFor=\"let item of menuItems; let i = index\">\n        <a class=\"nav-link\" href=\"#\">{{item.ButtonName}}</a>\n      </li>\n    </ul> \n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(http) {
        var _this = this;
        this.http = http;
        this.menuItems = [];
        console.log('AppComponent constructor');
        this.http.get('/menuitems').subscribe(function (data) {
            _this.menuItems = data['menuItems'];
        }, function (err) {
            console.log("error: " + err);
        }, function () {
            console.log("success");
        });
    }
    NavbarComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'navbar-component',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/app/rightscreen/rightscreen.component.css":
/*!*******************************************************!*\
  !*** ./src/app/rightscreen/rightscreen.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* The Overlay (background) */\n.overlay{\n    height: 100%; \n    width: 100%;\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Stay on top */\n    top: 56px;\n    left: 0;\n    overflow-x: hidden; /* Disable horizontal scroll */\n    transition: 0.3s;\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    border-left: 1px solid;\n\n}\n/* The Overlay (background) */\n.overlay {\n    height: 100%;\n    width: 100%;\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 54px;\n    overflow-x: hidden; /* Disable horizontal scroll */\n    transition: .3s;  \n    -webkit-transform: translateX(100%);  \n            transform: translateX(100%);\n    border-left: 1px solid;\n}\n#board_detail_inner_panel {\n    overflow-y: scroll;\n}\n.board_detail_inner_panel_row {\n    margin-right: 0px;\n}\n.board_detail_row {\n    margin: 10px;\n    padding-bottom: 15px;\n    border-bottom: solid 1px black;\n}\n.board_detail_header {\n    font-size: 2em;\n}\n.board_detail_sub_header {\n    font-size: 1.5em;\n}\n.board_detail_text {\n    padding-right: 40px;\n}\n.board_detail_size_header {\n    font-size: 1.5em;\n    padding-top: 20px;\n    padding-bottom: 10px;\n    border-bottom: solid 1px black;\n}\n.board_detail_image_height {\n    height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmlnaHRzY3JlZW4vcmlnaHRzY3JlZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0I7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsVUFBVSxFQUFFLGdCQUFnQjtJQUM1QixTQUFTO0lBQ1QsT0FBTztJQUNQLGtCQUFrQixFQUFFLDhCQUE4QjtJQUNsRCxnQkFBZ0I7SUFDaEIsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixzQkFBc0I7O0FBRTFCO0FBQ0EsNkJBQTZCO0FBQzdCO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLFVBQVUsRUFBRSxlQUFlO0lBQzNCLE9BQU87SUFDUCxTQUFTO0lBQ1Qsa0JBQWtCLEVBQUUsOEJBQThCO0lBQ2xELGVBQWU7SUFDZixtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsOEJBQThCO0FBQ2xDO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsOEJBQThCO0FBQ2xDO0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcmlnaHRzY3JlZW4vcmlnaHRzY3JlZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRoZSBPdmVybGF5IChiYWNrZ3JvdW5kKSAqL1xuLm92ZXJsYXl7XG4gICAgaGVpZ2h0OiAxMDAlOyBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgICB6LWluZGV4OiAxOyAvKiBTdGF5IG9uIHRvcCAqL1xuICAgIHRvcDogNTZweDtcbiAgICBsZWZ0OiAwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogRGlzYWJsZSBob3Jpem9udGFsIHNjcm9sbCAqL1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQ7XG5cbn1cbi8qIFRoZSBPdmVybGF5IChiYWNrZ3JvdW5kKSAqL1xuLm92ZXJsYXkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDU0cHg7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsICovXG4gICAgdHJhbnNpdGlvbjogLjNzOyAgXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQ7XG59XG5cbiNib2FyZF9kZXRhaWxfaW5uZXJfcGFuZWwge1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmJvYXJkX2RldGFpbF9pbm5lcl9wYW5lbF9yb3cge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4uYm9hcmRfZGV0YWlsX3JvdyB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBibGFjaztcbn1cblxuLmJvYXJkX2RldGFpbF9oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4uYm9hcmRfZGV0YWlsX3N1Yl9oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5ib2FyZF9kZXRhaWxfdGV4dCB7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cblxuLmJvYXJkX2RldGFpbF9zaXplX2hlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYmxhY2s7XG59XG5cbi5ib2FyZF9kZXRhaWxfaW1hZ2VfaGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/rightscreen/rightscreen.component.html":
/*!********************************************************!*\
  !*** ./src/app/rightscreen/rightscreen.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"myRightScreen\" class=\"overlay\">\n  <button class=\"btn button-no-borders\" style=\"background-color: #70b4f7; border-color: #eff4fa; color: white; border-radius:0rem\"\n    (click)=\"closeClicked()\">\n    <span class=\"fa fa-chevron-left\"> </span>\n  </button>\n  <div class=\"overlay-content\">\n    <div id=\"board_detail_inner_panel\" class=\"row board_detail_inner_panel_row\">\n      <div class=\"col-sm-12\">\n        <div class=\"row board_detail_row\">\n          <div class=\"col-sm-8\">\n            <div class=\"row\">\n              <div class=\"col-sm-12 board_detail_header\" >\n                {{board.name}}\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-12 board_detail_sub_header\">\n                {{board.description}}\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-4 \">\n            <img class=\"jpa_logo_class\" src=\"/dist/board/assets/images/{{board.manufacturer_logo}}\" alt=\"logo\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-5\">\n            <img class=\"board_detail_image_height center-block\" src=\"/dist/board/assets/images/{{board.image}}\" alt=\"\">\n          </div>\n          <div class=\"col-sm-7\">\n            <div class=\"row\">\n              <div class=\"col-sm-12 board_detail_text\">\n                {{board.long_description}}\n              </div>\n              <div class=\"col-sm-12 board_detail_size_header\">\n                Available Sizes:\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-12 board_detail_table_panel\">\n                <table class=\"table table-striped\">\n                  <thead>\n                    <th>Volume</th>\n                    <th>Width</th>\n                    <th>Length</th>\n                    <th>Sail Min</th>\n                    <th>Sail Max</th>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let size of board.sizes\">\n                      <td>{{size.volume}}</td>\n                      <td>{{size.width}}</td>\n                      <td>{{size.length}}</td>\n                      <td>{{size.sail_min}}</td>\n                      <td>{{size.sail_max}}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/rightscreen/rightscreen.component.ts":
/*!******************************************************!*\
  !*** ./src/app/rightscreen/rightscreen.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var RightscreenComponent = /** @class */ (function () {
    function RightscreenComponent() {
        this.board = {
            name: 'no board selected',
            manufacturer_logo: 'jp_australia_logo.png',
            image: 'jp_australia_logo.png'
        };
        this.notify = new core_1.EventEmitter();
    }
    RightscreenComponent.prototype.closeClicked = function () {
        this.notify.emit('Click from nested component');
    };
    RightscreenComponent.prototype.closeRightWindow = function () {
        document.getElementById('myRightScreen').style.transform = "translateX(100%)";
    };
    RightscreenComponent.prototype.openRightWindow = function () {
        document.getElementById('myRightScreen').style.transform = "translateX(0%)";
    };
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], RightscreenComponent.prototype, "notify", void 0);
    RightscreenComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-rightscreen',
            template: __webpack_require__(/*! ./rightscreen.component.html */ "./src/app/rightscreen/rightscreen.component.html"),
            styles: [__webpack_require__(/*! ./rightscreen.component.css */ "./src/app/rightscreen/rightscreen.component.css")]
        })
    ], RightscreenComponent);
    return RightscreenComponent;
}());
exports.RightscreenComponent = RightscreenComponent;


/***/ }),

/***/ "./src/app/side-nav/side-nav.component.css":
/*!*************************************************!*\
  !*** ./src/app/side-nav/side-nav.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* the side navigation menu */\n.sidenav {\n    height: 100%; /* 100% Full-height */\n    width: 250px; /* 0 width - change this with JavaScript */\n    position: absolute; /* Stay in place */\n    z-index: 0; /* Stay on top */\n    top: 56px;\n    left: 0;\n    background-color: #a7d2fc; /* Black */\n    overflow-x: hidden; /* Disable horizontal scroll */\n    padding-top: 60px; /* Place content 60px from the top */\n    transition: 0.3s\n}\n/* The navigation menu links */\n.sidenav a {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 25px;\n    color: #818181;\n    display: block;\n    transition: 0.3s\n}\n/* When you mouse over the navigation links, change their color */\n.sidenav a:hover, .offcanvas a:focus{\n    color: #f1f1f1;\n\n}\n/* The navigation menu links */\n.sidenav h1 {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 25px;\n    color: white;\n    display: block;\n    transition: 0.3s\n}\n.filterHeader {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 20px;\n    color: antiquewhite;\n    display: block;\n    transition: 0.3s\n}\n.filterItem {\n    font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0I7SUFDSSxZQUFZLEVBQUUscUJBQXFCO0lBQ25DLFlBQVksRUFBRSwwQ0FBMEM7SUFDeEQsa0JBQWtCLEVBQUUsa0JBQWtCO0lBQ3RDLFVBQVUsRUFBRSxnQkFBZ0I7SUFDNUIsU0FBUztJQUNULE9BQU87SUFDUCx5QkFBeUIsRUFBRSxVQUFVO0lBQ3JDLGtCQUFrQixFQUFFLDhCQUE4QjtJQUNsRCxpQkFBaUIsRUFBRSxvQ0FBb0M7SUFDdkQ7QUFDSjtBQUVBLDhCQUE4QjtBQUM5QjtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0lBQ2Q7QUFDSjtBQUVBLGlFQUFpRTtBQUNqRTtJQUNJLGNBQWM7O0FBRWxCO0FBRUEsOEJBQThCO0FBQzlCO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7SUFDZDtBQUNKO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsY0FBYztJQUNkO0FBQ0o7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogdGhlIHNpZGUgbmF2aWdhdGlvbiBtZW51ICovXG4uc2lkZW5hdiB7XG4gICAgaGVpZ2h0OiAxMDAlOyAvKiAxMDAlIEZ1bGwtaGVpZ2h0ICovXG4gICAgd2lkdGg6IDI1MHB4OyAvKiAwIHdpZHRoIC0gY2hhbmdlIHRoaXMgd2l0aCBKYXZhU2NyaXB0ICovXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAvKiBTdGF5IGluIHBsYWNlICovXG4gICAgei1pbmRleDogMDsgLyogU3RheSBvbiB0b3AgKi9cbiAgICB0b3A6IDU2cHg7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdkMmZjOyAvKiBCbGFjayAqL1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogRGlzYWJsZSBob3Jpem9udGFsIHNjcm9sbCAqL1xuICAgIHBhZGRpbmctdG9wOiA2MHB4OyAvKiBQbGFjZSBjb250ZW50IDYwcHggZnJvbSB0aGUgdG9wICovXG4gICAgdHJhbnNpdGlvbjogMC4zc1xufVxuXG4vKiBUaGUgbmF2aWdhdGlvbiBtZW51IGxpbmtzICovXG4uc2lkZW5hdiBhIHtcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAzMnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6ICM4MTgxODE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogMC4zc1xufVxuXG4vKiBXaGVuIHlvdSBtb3VzZSBvdmVyIHRoZSBuYXZpZ2F0aW9uIGxpbmtzLCBjaGFuZ2UgdGhlaXIgY29sb3IgKi9cbi5zaWRlbmF2IGE6aG92ZXIsIC5vZmZjYW52YXMgYTpmb2N1c3tcbiAgICBjb2xvcjogI2YxZjFmMTtcblxufVxuXG4vKiBUaGUgbmF2aWdhdGlvbiBtZW51IGxpbmtzICovXG4uc2lkZW5hdiBoMSB7XG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggMzJweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2l0aW9uOiAwLjNzXG59XG5cbi5maWx0ZXJIZWFkZXIge1xuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDMycHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zaXRpb246IDAuM3Ncbn1cbi5maWx0ZXJJdGVtIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/side-nav/side-nav.component.html":
/*!**************************************************!*\
  !*** ./src/app/side-nav/side-nav.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mySidenav\" class=\"sidenav\">\n  <h1>Apply Filter:</h1>\n  <div *ngFor=\"let filter of filterList;\">\n    <div class=\"filterHeader\">{{filter.filterName}}</div>\n    <div class=\"filterItem\" *ngFor=\"let filterValue of filter.filterValues\">\n      <a  href=\"#\"(click)=\"filterClicked(filter,filterValue) \">\n        {{filterValue}}\n      </a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/side-nav/side-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/side-nav/side-nav.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var IBoardList_1 = __webpack_require__(/*! ../IBoardList */ "./src/app/IBoardList.ts");
var SideNavComponent = /** @class */ (function () {
    function SideNavComponent() {
        this.notify = new core_1.EventEmitter();
        this.filterList = [
            {
                filterName: 'Manufacturer',
                filterType: IBoardList_1.FilterType.Manufacturer,
                filterValues: ['RRD', 'JP Australia', 'Starboard']
            },
            {
                filterName: 'Board Types',
                filterType: IBoardList_1.FilterType.BoardType,
                filterValues: ['Wave', 'Freestyle', 'Slalom']
            },
            {
                filterName: 'All',
                filterType: IBoardList_1.FilterType.None,
                filterValues: ['Clear Filter']
            }
        ];
    }
    SideNavComponent.prototype.ngOnInit = function () {
    };
    SideNavComponent.prototype.closeNav = function () {
        document.getElementById('mySidenav').style.width = "0px";
    };
    SideNavComponent.prototype.showNav = function () {
        document.getElementById('mySidenav').style.width = "250px";
    };
    SideNavComponent.prototype.filterClicked = function (filter, filterValue) {
        this.notify.emit({
            filterType: filter.filterType,
            filterValue: filterValue
        });
    };
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], SideNavComponent.prototype, "notify", void 0);
    SideNavComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-side-nav',
            template: __webpack_require__(/*! ./side-nav.component.html */ "./src/app/side-nav/side-nav.component.html"),
            styles: [__webpack_require__(/*! ./side-nav.component.css */ "./src/app/side-nav/side-nav.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SideNavComponent);
    return SideNavComponent;
}());
exports.SideNavComponent = SideNavComponent;


/***/ }),

/***/ "./src/app/state.mediator.ts":
/*!***********************************!*\
  !*** ./src/app/state.mediator.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 先划分要实现的模块
Object.defineProperty(exports, "__esModule", { value: true });
var StateType;
(function (StateType) {
    StateType[StateType["MainPanelOnly"] = 0] = "MainPanelOnly";
    StateType[StateType["MainPanelWithSideNav"] = 1] = "MainPanelWithSideNav";
    StateType[StateType["DetailPanel"] = 2] = "DetailPanel";
    StateType[StateType["LoginPanel"] = 3] = "LoginPanel";
})(StateType = exports.StateType || (exports.StateType = {}));
// 再细分模块的类型
var PanelType;
(function (PanelType) {
    PanelType[PanelType["Primary"] = 0] = "Primary";
    PanelType[PanelType["Detail"] = 1] = "Detail";
    PanelType[PanelType["OverlayPanel"] = 2] = "OverlayPanel";
})(PanelType = exports.PanelType || (exports.PanelType = {}));
// 怎么实现这些模块的功能
var MainPanelOnly = /** @class */ (function () {
    function MainPanelOnly() {
    }
    MainPanelOnly.prototype.getPanelType = function () { return PanelType.Primary; };
    MainPanelOnly.prototype.getStateType = function () { return StateType.MainPanelOnly; };
    MainPanelOnly.prototype.getPanelButtonClass = function () { return 'fa-chevron-right'; };
    MainPanelOnly.prototype.isSideNavVisible = function () { return false; };
    MainPanelOnly.prototype.isLoginVisible = function () { return false; };
    return MainPanelOnly;
}());
exports.MainPanelOnly = MainPanelOnly;
var MainPanelWithSideNav = /** @class */ (function () {
    function MainPanelWithSideNav() {
    }
    MainPanelWithSideNav.prototype.getPanelType = function () { return PanelType.Primary; };
    MainPanelWithSideNav.prototype.getStateType = function () { return StateType.MainPanelWithSideNav; };
    MainPanelWithSideNav.prototype.getPanelButtonClass = function () { return 'fa-chevron-left'; };
    MainPanelWithSideNav.prototype.isSideNavVisible = function () { return true; };
    MainPanelWithSideNav.prototype.isLoginVisible = function () { return false; };
    return MainPanelWithSideNav;
}());
exports.MainPanelWithSideNav = MainPanelWithSideNav;
var DetailPanel = /** @class */ (function () {
    function DetailPanel() {
    }
    DetailPanel.prototype.getPanelType = function () { return PanelType.Detail; };
    DetailPanel.prototype.getStateType = function () { return StateType.DetailPanel; };
    DetailPanel.prototype.getPanelButtonClass = function () { return ''; };
    DetailPanel.prototype.isSideNavVisible = function () { return false; };
    DetailPanel.prototype.isLoginVisible = function () { return false; };
    return DetailPanel;
}());
exports.DetailPanel = DetailPanel;
var LoginPanel = /** @class */ (function () {
    function LoginPanel() {
    }
    LoginPanel.prototype.getPanelType = function () { return PanelType.OverlayPanel; };
    LoginPanel.prototype.getStateType = function () { return StateType.LoginPanel; };
    LoginPanel.prototype.getPanelButtonClass = function () { return ''; };
    LoginPanel.prototype.isSideNavVisible = function () { return false; };
    LoginPanel.prototype.isLoginVisible = function () { return true; };
    return LoginPanel;
}());
exports.LoginPanel = LoginPanel;
// 定义了一个调停者的类
var Mediator = /** @class */ (function () {
    function Mediator(mediatorImpl) {
        this._mainPanelState = new MainPanelOnly();
        this._detailPanelState = new DetailPanel();
        this._sideNavState = new MainPanelWithSideNav();
        this._loginState = new LoginPanel();
        this._mediatorImpl = mediatorImpl;
        this._currentState = this._CurrentMainPanelState = this._sideNavState;
    }
    Mediator.prototype.getStateImpl = function (stateType) {
        var stateImpl;
        switch (stateType) {
            case StateType.DetailPanel:
                stateImpl = this._detailPanelState;
                break;
            case StateType.MainPanelOnly:
                stateImpl = this._mainPanelState;
                break;
            case StateType.MainPanelWithSideNav:
                stateImpl = this._sideNavState;
                break;
            case StateType.LoginPanel:
                stateImpl = this._loginState;
                break;
        }
        return stateImpl;
    };
    Mediator.prototype.moveToState = function (StateType) {
        var previousState = this._currentState;
        var nextState = this.getStateImpl(StateType);
        if (previousState.getPanelType() == PanelType.Primary && nextState.getPanelType() == PanelType.Detail) {
            this._mediatorImpl.showDetailPanel();
        }
        if (previousState.getPanelType() == PanelType.Detail && nextState.getPanelType() == PanelType.Primary) {
            this._mediatorImpl.hideDetailPanel();
        }
        if (nextState.isSideNavVisible())
            this._mediatorImpl.showNavPanel();
        else
            this._mediatorImpl.hideNavPanel();
        if (nextState.isLoginVisible())
            this._mediatorImpl.showLoginPanel();
        else
            this._mediatorImpl.hideLoginPanel();
        this._mediatorImpl.changeShowHideSideButton(previousState.getPanelButtonClass(), nextState.getPanelButtonClass());
        this._currentState = nextState;
        if (this._currentState.getPanelType() == PanelType.Primary) {
            this._CurrentMainPanelState = this._currentState;
        }
    };
    Mediator.prototype.showHideSideNavClicked = function () {
        switch (this._currentState.getStateType()) {
            case StateType.MainPanelWithSideNav:
                this.moveToState(StateType.MainPanelOnly);
                break;
            case StateType.MainPanelOnly:
                this.moveToState(StateType.MainPanelWithSideNav);
                break;
        }
    };
    Mediator.prototype.getCurrentMainPanelState = function () {
        return this._CurrentMainPanelState.getStateType();
    };
    return Mediator;
}());
exports.Mediator = Mediator;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kitty/typescript/lipstick/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map