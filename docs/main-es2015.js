(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../feature/fc/fc.module": [
		"./src/feature/fc/fc.module.ts",
		"feature-fc-fc-module"
	],
	"./fcdemo/fcdemo.module": [
		"./src/feature/fc/fcdemo/fcdemo.module.ts",
		"fcdemo-fcdemo-module"
	],
	"./fcsystem/fcsystem.module": [
		"./src/feature/fc/fcsystem/fcsystem.module.ts",
		"fcsystem-fcsystem-module"
	],
	"./fctemplate/fctemplate.module": [
		"./src/feature/fc/fcdemo/fctemplate/fctemplate.module.ts",
		"fctemplate-fctemplate-module"
	],
	"./fcthreejs/fcthreejs.module": [
		"./src/feature/fc/fcdemo/fcthreejs/fcthreejs.module.ts",
		"fcthreejs-fcthreejs-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./_mock/_menus.ts":
/*!*************************!*\
  !*** ./_mock/_menus.ts ***!
  \*************************/
/*! exports provided: menus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menus", function() { return menus; });
const menus = {
    P_MENUS: [
        {
            ID: '3ae5c74930da4b1e877efabee3af0005',
            PID: 'FC',
            MENUID: 'FC',
            MENUNAME: '快速开发平台',
            ENABLE: 'Y',
            WXMENU: 'N',
            MENUTYPE: 'MENU',
            HASCHILD: 'Y',
            MENUICON: 'icon iconfont icon-ppbs',
            SORT: 1000,
            ROUTER: '/fc',
            P_CHILDMENUS: [
                {
                    ID: '3ae5c74930dab18e877efabee3af0004',
                    PID: 'FC',
                    MENUID: 'FCANTDESIGN',
                    MENUNAME: 'Ant Design',
                    ENABLE: 'Y',
                    WXMENU: 'N',
                    MENUTYPE: 'MENU',
                    HASCHILD: 'N',
                    MENUICON: 'fc-icon-antdesign',
                    PARENT: 'FC',
                    SORT: 1150,
                    ROUTER: '/fcantd'
                },
                {
                    ID: '3ae5c74930dab18e877efabee3af0004',
                    PID: 'FC',
                    MENUID: 'FCCHART',
                    MENUNAME: '图表',
                    ENABLE: 'Y',
                    WXMENU: 'N',
                    MENUTYPE: 'MENU',
                    HASCHILD: 'Y',
                    MENUICON: 'fc-icon-tubiao',
                    PARENT: 'FC',
                    SORT: 1150,
                    ROUTER: '/fcchart',
                    P_CHILDMENUS: [
                        {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'FC',
                            MENUID: 'FCG2',
                            MENUNAME: 'g2',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'FCG2',
                            HASCHILD: 'N',
                            PARENT: 'FC',
                            MENUICON: '',
                            SORT: 1152,
                            ROUTER: '/fcg2',
                        },
                    ]
                },
                {
                    ID: '3ae5c74930dab18e877efabee3af0004',
                    PID: 'FC',
                    MENUID: 'FCTHREEJS',
                    MENUNAME: 'threejs',
                    ENABLE: 'Y',
                    WXMENU: 'N',
                    MENUTYPE: 'MENU',
                    HASCHILD: 'Y',
                    MENUICON: 'fc-icon-threejs',
                    PARENT: 'FC',
                    SORT: 1150,
                    ROUTER: '/fcthreejs',
                    P_CHILDMENUS: [
                        {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'FC',
                            MENUID: 'FCBOXGEOMETRY',
                            MENUNAME: '立方体',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'FCBOXGEOMETRY',
                            HASCHILD: 'N',
                            PARENT: 'FC',
                            MENUICON: '',
                            SORT: 1152,
                            ROUTER: '/fcboxgeometry',
                        },
                    ]
                },
                {
                    ID: '63fbb2f0708f4fd68db04a92dd5df121',
                    PID: 'FC',
                    MENUID: 'FCSPREAD',
                    MENUNAME: 'spread报表',
                    ENABLE: 'Y',
                    WXMENU: 'N',
                    MENUTYPE: 'APP',
                    APPID: 'SYSMENU',
                    HASCHILD: 'N',
                    MENUICON: 'fc-icon-shujubiaoge',
                    PARENT: 'SYSTEM',
                    SORT: 1152,
                    ROUTER: '/fcspread'
                },
                {
                    ID: '63fbb2f0708f4fd68db04a92dd5df121',
                    PID: 'FC',
                    MENUID: 'FCICON',
                    MENUNAME: 'icon',
                    ENABLE: 'Y',
                    WXMENU: 'N',
                    MENUTYPE: 'APP',
                    APPID: 'SYSMENU',
                    HASCHILD: 'N',
                    MENUICON: 'fc-icon-icon',
                    PARENT: 'SYSTEM',
                    SORT: 1152,
                    ROUTER: '/fcicon'
                },
                {
                    ID: '63fbb2f0708f4fd68db04a92dd5df121',
                    PID: 'FC',
                    MENUID: 'FCIFRAME',
                    MENUNAME: 'iframe',
                    ENABLE: 'Y',
                    WXMENU: 'N',
                    MENUTYPE: 'APP',
                    APPID: 'SYSMENU',
                    HASCHILD: 'N',
                    MENUICON: 'fc-icon-iframe',
                    PARENT: 'SYSTEM',
                    SORT: 1152,
                    ROUTER: '/fciframe'
                },
                // {
                //   ID: '63fbb2f0708f4fd68db04a92dd5df121',
                //   PID: 'FC',
                //   MENUID: 'FCAGGRID',
                //   MENUNAME: 'ag-grid表格',
                //   ENABLE: 'Y',
                //   WXMENU: 'N',
                //   MENUTYPE: 'APP',
                //   APPID: 'SYSMENU',
                //   HASCHILD: 'N',
                //   MENUICON: 'fc-icon-datatable',
                //   PARENT: 'SYSTEM',
                //   SORT: 1152,
                //   ROUTER: '/building'
                // },
                {
                    ID: '3ae5c74930dab18e877efabee3af0004',
                    PID: 'FC',
                    MENUID: 'SYSTEM',
                    MENUNAME: '模版页面',
                    ENABLE: 'Y',
                    WXMENU: 'N',
                    MENUTYPE: 'MENU',
                    HASCHILD: 'Y',
                    MENUICON: 'fc-icon-peizhi',
                    PARENT: 'FC',
                    SORT: 1150,
                    ROUTER: '/fctemplate',
                    P_CHILDMENUS: [
                        {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'FC',
                            MENUID: 'SYSTEMBASIC',
                            MENUNAME: '列表',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'SYSTEMBASIC',
                            HASCHILD: 'N',
                            PARENT: 'SYSTEM',
                            MENUICON: 'fc-icon-jichushezhi',
                            SORT: 1152,
                            ROUTER: '/fctemplatelist',
                        },
                        {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'FC',
                            MENUID: 'SYSTEMBASIC',
                            MENUNAME: '表单',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'SYSTEMBASIC',
                            HASCHILD: 'N',
                            PARENT: 'SYSTEM',
                            MENUICON: 'fc-icon-jichushezhi',
                            SORT: 1152,
                            ROUTER: '/fctemplateform',
                        }, {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'FC',
                            MENUID: 'SYSTEMBASIC',
                            MENUNAME: '详情',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'SYSTEMBASIC',
                            HASCHILD: 'N',
                            PARENT: 'SYSTEM',
                            MENUICON: 'fc-icon-jichushezhi',
                            SORT: 1152,
                            ROUTER: '/fctemplatedetail',
                        }, {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'FC',
                            MENUID: 'SYSTEMBASIC',
                            MENUNAME: '树列表',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'SYSTEMBASIC',
                            HASCHILD: 'N',
                            PARENT: 'SYSTEM',
                            MENUICON: 'fc-icon-jichushezhi',
                            SORT: 1152,
                            ROUTER: '/fctemplatetreelist',
                        }
                    ]
                },
            ]
        }
    ]
};


/***/ }),

/***/ "./_mock/_user.ts":
/*!************************!*\
  !*** ./_mock/_user.ts ***!
  \************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mockjs */ "./node_modules/mockjs/dist/mock.js");
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_0__);

var userList = [];
var total = 100;
var users = [
    '景天',
    '唐雪见',
    '龙葵',
    '紫萱',
    '徐长卿',
    '花楹',
    '邪剑仙',
    '重楼',
    '李逍遥',
    '赵灵儿',
    '林月如',
    '阿奴'
];
function getUsers() {
    for (let i = 0; i < total; i++) {
        userList.push({
            id: i + 1,
            userName: '',
            description: '这是个人介绍',
            age: Math.floor(Math.random() * 10) % 2,
        });
    }
    return userList;
}
var userInfo = mockjs__WEBPACK_IMPORTED_MODULE_0__["mock"]({
// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
});
function getUserInfo() {
}
const User = {
    '/userInfo': () => userInfo(),
    '/user': () => getUsers()
};


/***/ }),

/***/ "./_mock/index.ts":
/*!************************!*\
  !*** ./_mock/index.ts ***!
  \************************/
/*! exports provided: menus, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_menus */ "./_mock/_menus.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "menus", function() { return _menus__WEBPACK_IMPORTED_MODULE_0__["menus"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_user */ "./_mock/_user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_1__["User"]; });





/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dialog/syseditpassword.dialog.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dialog/syseditpassword.dialog.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: honghong\n * @Date: 2019-07-04 17:15:57\n * @LastEditors: honghong\n * @LastEditTime: 2019-10-15 10:45:00\n * @Description: \n * @email: 3300536651@qq.com\n -->\n<div class=\"edituser-dialog\">\n  <form nz-form [formGroup]=\"validateForm\">\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"oldPassword\">旧密码</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" nzErrorTip=\"旧密码不能为空!\">\n        <input nz-input type=\"password\" formControlName=\"oldPassword\" id=\"oldPassword\" />\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"newPassword\" nzRequired>新密码</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" nzErrorTip=\"新密码不能为空!\">\n        <input nz-input type=\"password\" id=\"newPassword\" formControlName=\"newPassword\" />\n      </nz-form-control>\n    </nz-form-item>\n  </form>\n  <div class=\"edituser-dialog-footer\">\n    <button nz-button nzSize=\"large\" style=\"margin-right: 10px;\" [nzType]=\"'default'\"\n      (click)=\"handleCancel()\">取消</button>\n    <button nz-button nzSize=\"large\" [nzType]=\"'primary'\" (click)=\"handleOk()\">确认修改</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/error/error.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/error/error.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: honghong\n * @LastEditors: honghong\n * @Description: 错误\n * @email: 3300536651@qq.com\n * @Date: 2019-02-18 10:59:15\n * @LastEditTime: 2019-08-05 10:05:57\n -->\nerror页面,，这是一个错误"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/forgot/forgot.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/forgot/forgot.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: honghong\n * @LastEditors: honghong\n * @Description: 忘记密码\n * @email: 3300536651@qq.com\n * @Date: 2019-04-12 16:39:30\n * @LastEditTime: 2019-04-17 09:55:38\n -->\n忘记密码"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layout/layout.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layout/layout.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: honghong\n * @LastEditors: honghong\n * @Description: 整体布局，包括顶部工具栏、左侧导航、侧边栏、选项卡导航、内容区\n * @email: 3300536651@qq.com\n * @Date: 2019-04-16 15:57:43\n * @LastEditTime: 2019-10-16 17:44:42\n -->\n<nz-layout class=\"layout\">\n  <!-- 顶部工具栏 -->\n  <nz-header>\n    <div class=\"logo fc-header-left\">\n      <img src=\"assets/image/logo.png\" [ngStyle]=\"{'display': menuWidth===64 ?'none':'inline'}\" alt=\"logo\">\n      <img src=\"assets/image/small-logo.png\" [ngStyle]=\"{'display': menuWidth===64 ?'inline':'none'}\" alt=\"logo\">\n      <div class=\"fc-header-icon-wrap\">\n        <i class=\"icon iconfont fc-header-toggle\"\n          [ngClass]=\"{'fc-icon-menufold-left':menuWidth===64,'fc-icon-menufold-right':menuWidth!==64}\"\n          (click)=\"toggleLayout()\"></i>\n      </div>\n      <div class=\"fc-header-icon-wrap\">\n        <a href=\"https://github.com/FE-free/fc-angular\" target=\"_blank\"\n          title=\"icon iconfont fc-icon-github fc-header-github\"><i\n            class=\"icon iconfont fc-icon-github fc-header-github\"></i></a>\n      </div>\n    </div>\n    <div class=\"fc-header-right\">\n      <div class=\"fc-header-icon-wrap\">\n        <i class=\"icon iconfont fc-header-icon fc-icon-information\" (click)=\"toggleSidebar()\" title=\"消息\"></i>\n      </div>\n      <div class=\"fc-header-icon-wrap fc-header-dropdown\">\n        <a nz-dropdown [nzDropdownMenu]=\"headerMenu\" [nzPlacement]=\"'bottomRight'\" [nzOverlayStyle]=\"{top:'18px' }\">\n          <nz-avatar class=\"avatar\" [nzSize]=\"32\" nzIcon=\"user\" [nzSrc]=\"avatar\"></nz-avatar>\n          <a class=\"text\">{{companyName}}</a>\n        </a>\n        <nz-dropdown-menu #headerMenu=\"nzDropdownMenu\">\n          <ul nz-menu>\n            <li nz-menu-item> <i class=\"icon iconfont fc-header-icon fc-icon-peizhi\"></i> 设置\n            </li>\n            <li nz-menu-item> <i class=\"icon iconfont fc-header-icon fc-icon-personnel\"></i> 个人中心\n            </li>\n            <li nz-menu-item (click)=\"editPassWord()\"> <i class=\"icon iconfont fc-header-icon fc-icon-password\"></i>\n              修改密码\n            </li>\n            <li nz-menu-item (click)=\"clearCache()\"> <i class=\"icon iconfont fc-header-icon fc-icon-clear\"></i>\n              清除缓存\n            </li>\n            <li nz-menu-item (click)=\"siginout()\"> <i class=\" icon iconfont fc-header-icon fc-icon-tuichu\"></i> 退出\n            </li>\n          </ul>\n        </nz-dropdown-menu>\n      </div>\n    </div>\n  </nz-header>\n  <nz-layout style=\"width: 100%;\">\n    <!-- 菜单导航 -->\n    <nz-sider [(nzWidth)]=\"menuWidth\" Ø class=\"fc-sidebar-menu\">\n      <ul nz-menu [nzMode]=\"'inline'\" style=\"height: calc(100% - 40px);overflow: auto;\"\n        [nzInlineCollapsed]=\"menuIsCollapsed\">\n        <ng-container *ngFor=\"let menu of _menus\">\n          <!-- 一级菜单，没有下级 -->\n          <li nz-menu-item *ngIf=\"menu.HASCHILD==='N'\" (click)=\"selectedMenu(menu)\">\n            <span title>\n              <i class=\"icon iconfont menu-icon\" [ngClass]=\"menu.MENUICON\"></i>\n              <span class=\"first-level-title\">{{menu.MENUNAME}}</span>\n            </span>\n          </li>\n          <!-- 一级菜单，有下级 -->\n          <li nz-submenu [nzOpen]=\"true\"\n            *ngIf=\"menu.HASCHILD==='Y' && menu.P_CHILDMENUS && menu.P_CHILDMENUS.length!==0\">\n            <span title>\n              <i class=\"icon iconfont menu-icon\" [ngClass]=\"menu.MENUICON\"></i>\n              <span class=\"first-level-title\">{{menu.MENUNAME}}</span></span>\n            <ul>\n              <ng-container *ngFor=\"let childMenu of menu.P_CHILDMENUS\">\n                <!-- 二级菜单，没有下级 -->\n                <li nz-menu-item *ngIf=\"childMenu.HASCHILD==='N'\" (click)=\"selectedMenu(childMenu);\">\n                  <span title>\n                    <span>{{childMenu.MENUNAME}}</span>\n                  </span>\n                </li>\n                <!-- 二级菜单，有下级 -->\n                <li nz-submenu\n                  *ngIf=\"childMenu.HASCHILD==='Y' && childMenu.P_CHILDMENUS && childMenu.P_CHILDMENUS.length!==0\">\n                  <span title>\n                    <i class=\"icon iconfont menu-icon\" [ngClass]=\"childMenu.MENUICON\"></i>\n                    <span>{{childMenu.MENUNAME}}</span>\n                  </span>\n                  <ul>\n                    <ng-container *ngFor=\"let grandSonMenu of childMenu.P_CHILDMENUS\">\n                      <!-- 三级级菜单，没有下级 -->\n                      <li nz-menu-item *ngIf=\"grandSonMenu.HASCHILD==='N'\" (click)=\"selectedMenu(grandSonMenu);\">\n                        <span title>\n                          {{grandSonMenu.MENUNAME}}</span>\n                      </li>\n                      <!-- 三级菜单，有下级 -->\n                      <li nz-submenu\n                        *ngIf=\"grandSonMenu.HASCHILD==='Y' && grandSonMenu.P_CHILDMENUS && grandSonMenu.P_CHILDMENUS.length!==0\">\n                        <span title>\n                          {{grandSonMenu.MENUNAME}}</span>\n                        <ul>\n                          <li nz-menu-item *ngFor=\"let lastChidMenu of grandSonMenu.P_CHILDMENUS\"\n                            (click)=\"selectedMenu(lastChidMenu)\">\n                            <span title>\n                              {{lastChidMenu.MENUNAME}}</span>\n                          </li>\n                        </ul>\n                      </li>\n                    </ng-container>\n                  </ul>\n                </li>\n              </ng-container>\n            </ul>\n          </li>\n        </ng-container>\n      </ul>\n      <!-- 切换布局控制按钮 -->\n      <div class=\"layout-toggle\">\n        <i class=\"icon iconfont fc-icon-arrowleft\" [ngClass]=\"{'arrowright':menuWidth===64}\" (click)=\"toggleLayout()\">\n        </i>\n      </div>\n    </nz-sider>\n    <nz-layout>\n      <!-- 选项卡导航 -->\n      <nz-tabset class=\"fc-tabnav\" [nzType]=\"'line'\" [nzSize]=\"'small'\" [(nzSelectedIndex)]=\"fcSelectedIndex\">\n        <nz-tab *ngFor=\"let tab of fcTabs;index as i\" (nzClick)=\"selectedTabMenu(tab)\" [nzTitle]=\"titleTemplate\">\n          <ng-template #titleTemplate>\n            <div [ngClass]=\"{'tab-home':i===0}\">\n              <i *ngIf=\"tab.icon!==''\" class=\"icon iconfont\" [ngClass]=\"tab.icon\"></i>\n              {{ tab.name }}<i *ngIf=\"i>0\" nz-icon type=\"close\" class=\"ant-tabs-close-x\" (click)=\"closeTabNav(tab)\"></i>\n            </div>\n          </ng-template>\n        </nz-tab>\n      </nz-tabset>\n      <!-- 内容区 -->\n      <nz-content class=\"fc-main-wrap\">\n        <div class=\"fc-main\">\n          <router-outlet [ngStyle]=\"{'height':'100%'}\"></router-outlet>\n        </div>\n      </nz-content>\n    </nz-layout>\n  </nz-layout>\n</nz-layout>\n<!-- 消息侧边栏 -->\n<div class=\"navside\">\n  <nz-drawer [nzWidth]=\"300\" [nzWrapClassName]=\"'navside-drawer'\" [nzMaskStyle]=\"{'height':'auto'}\"\n    nzWrapClassName=\"navside-drawer\" [nzClosable]=\"false\" [nzVisible]=\"navsideVisible\" nzPlacement=\"right\" nzTitle=\"\"\n    (nzOnClose)=\"closeNavSide()\" #navside>\n    <nz-tabset>\n      <nz-tab [nzTitle]=\"noReadTemplate\">\n        <ng-template #noReadTemplate>未读消息</ng-template>\n        <div class=\"navside-message navside-message-noread\">\n          <nz-list [nzDataSource]=\"noReadMessage\" [nzBordered]=\"false\" [nzSplit]=\"false\" [nzFooter]=\"'共有 50 条消息.'\"\n            [nzRenderItem]=\"noReadItem\">\n            <ng-template #noReadItem let-item>\n              <nz-list-item>\n                <span class=\"ant-typography navside-information-icon\"><i\n                    class=\"icon iconfont fc-header-icon fc-icon-xiaoxi\"></i></span>\n                <div class=\"navside-item-content\">\n                  <div class=\"navside-title\"> {{ item.title }}</div>\n                  <div class=\"navside-time\"> {{ item.time }}</div>\n                </div>\n              </nz-list-item>\n            </ng-template>\n          </nz-list>\n        </div>\n      </nz-tab>\n      <nz-tab [nzTitle]=\"isReadTemplate\">\n        <ng-template #isReadTemplate>已读消息</ng-template>\n        <div class=\"navside-message navside-message-isread\">\n          <nz-list [nzDataSource]=\"isReadMessage\" [nzBordered]=\"false\" [nzSplit]=\"false\" [nzFooter]=\"'共有 50 条消息.'\"\n            [nzRenderItem]=\"isReadItem\">\n            <ng-template #isReadItem let-item>\n              <nz-list-item>\n                <span class=\"ant-typography navside-information-icon\"><i\n                    class=\"icon iconfont fc-header-icon fc-icon-xiaoxi\"></i></span>\n                <div class=\"navside-item-content\">\n                  <div class=\"navside-title\"> {{ item.title }}</div>\n                  <div class=\"navside-time\"> {{ item.time }}</div>\n                </div>\n              </nz-list-item>\n            </ng-template>\n          </nz-list>\n        </div>\n      </nz-tab>\n    </nz-tabset>\n  </nz-drawer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/lockscreen/lockscreen.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/lockscreen/lockscreen.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: honghong\n * @LastEditors: honghong\n * @Description: 锁屏页面\n * @email: 3300536651@qq.com\n * @Date: 2019-04-12 16:39:30\n * @LastEditTime: 2019-04-17 10:09:46\n -->\n\n锁屏"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/signin/signin.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/signin/signin.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n * @Author: honghong\r\n * @LastEditors: honghong\r\n * @Description: 登录\r\n * @email: 3300536651@qq.com\r\n * @Date: 2019-02-18 10:59:15\r\n * @LastEditTime: 2019-10-17 09:39:27\r\n -->\r\n<img src=\"#\" id=\"code\" alt=\"\">\r\n<button id=\"recognize\">识别</button>\r\n<div class=\"login-in\">\r\n  <div class=\"login-bg\">\r\n    <div class=\"login-content clearfix\">\r\n      <div class=\"login-left\">\r\n        <span class=\"project-name\"><img src=\"assets/image/logo.png\" height=\"90\" alt=\"logo\"></span>\r\n        <!-- <img class=\"map-img\" src=\"../../../assets/image/login_pic.png\"> -->\r\n        <!-- <img class=\"left-img\" src=\"../../../assets/image/login_left.png\"> -->\r\n      </div>\r\n      <div class=\"login-right\">\r\n        <div class=\"login-right-content\">\r\n          <h2 class=\"login-h2\">\r\n            欢迎登录\r\n          </h2>\r\n          <div class=\"sigin-error\">\r\n            <div class=\"sigin-error-in\" *ngIf=\"hasError\">\r\n              <i class=\"icon iconfont icon-error\"></i>\r\n              <span>{{msg}}</span>\r\n            </div>\r\n          </div>\r\n          <form>\r\n            <div class=\"user-box\">\r\n              <nz-input-group [nzSuffix]=\"userIdSuffix\" [nzPrefix]=\"userIdPrefix\">\r\n                <input id=\"userName\" name=\"userName\" required type=\"text\" class=\"form-control\" nz-input\r\n                  placeholder=\"请输入用户名admin\" [(ngModel)]=\"userId\" #userName=\"ngModel\" />\r\n              </nz-input-group>\r\n              <ng-template #userIdPrefix><i class=\"icon iconfont fc-icon-personnel\"></i></ng-template>\r\n              <ng-template #userIdSuffix><i nz-icon type=\"close-circle\" (click)=\"userId =''\" *ngIf=\"userId\"></i>\r\n              </ng-template>\r\n              <div class=\"fc-form-error\" *ngIf=\"userName.invalid && (userName.dirty || userName.touched)\">\r\n                <div *ngIf=\"userName.errors.required\">\r\n                  用户名不能为空.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"user-box\">\r\n              <nz-input-group [nzSuffix]=\"pwdSuffix\" [nzPrefix]=\"pwdPrefix\">\r\n                <input id=\"passwordValid\" name=\"passwordValid\" class=\"form-control\" required type=\"password\"\r\n                  [(ngModel)]=\"password\" nz-input placeholder=\"请输入密码admin\" #passwordValid=\"ngModel\" />\r\n              </nz-input-group>\r\n              <ng-template #pwdPrefix><i class=\"icon iconfont fc-icon-password\"></i></ng-template>\r\n              <ng-template #pwdSuffix><i nz-icon type=\"close-circle\" (click)=\"password = ''\" *ngIf=\"password\"></i>\r\n              </ng-template>\r\n              <div class=\"fc-form-error\"\r\n                *ngIf=\"passwordValid.invalid && (passwordValid.dirty || passwordValid.touched)\">\r\n                <div *ngIf=\"passwordValid.errors.required\">\r\n                  密码不能为空.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"user-box\">\r\n              <fc-verifycode #verifyCode></fc-verifycode>\r\n            </div>\r\n            <div class=\"user-box login-btn\">\r\n              <button nz-button nzType=\"primary\" (click)=\"login()\" [nzBlock]=\"true\">登录</button>\r\n            </div>\r\n            <div class=\"google-download\">\r\n              <p>本系统仅支持\r\n                <a href=\"../assets/browser/chromedev_x64-v71.0.3554.0.exe\">谷歌</a>和<a\r\n                  href=\"../assets/browser/360cse_9.5.0.138.exe\">360急速</a>浏览器</p>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/signup/signup.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/signup/signup.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n * @Author: honghong\r\n * @LastEditors: honghong\r\n * @Description: 注册\r\n * @email: 3300536651@qq.com\r\n * @Date: 2019-04-12 16:39:30\r\n * @LastEditTime: 2019-04-17 10:10:40\r\n -->\r\n注册\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/fccomponents/fcg2bar/fcg2bar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/fccomponents/fcg2bar/fcg2bar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fc-chart\" [id]=\"fcId\"></div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/fccomponents/fcg2line/fcg2line.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/fccomponents/fcg2line/fcg2line.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [id]=\"fcId\"></div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/fccomponents/fcg2minibar/fcg2minibar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/fccomponents/fcg2minibar/fcg2minibar.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [id]=\"fcId\"></div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/fccomponents/fcg2pie/fcg2pie.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/fccomponents/fcg2pie/fcg2pie.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: honghong\n * @Date: 2019-10-14 10:52:01\n * @LastEditors: honghong\n * @LastEditTime: 2019-10-14 15:09:28\n * @Description: \n * @email: 3300536651@qq.com\n -->\n<div id=\"mountNode\"></div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/fccomponents/fcg2radar/fcg2radar.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/fccomponents/fcg2radar/fcg2radar.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [id]=\"fcId\"></div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/fccomponents/fcimgview/fcimgview.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/fccomponents/fcimgview/fcimgview.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: honghong\n * @LastEditors: honghong\n * @Description: 图片查看组件\n * @email: 3300536651@qq.com\n * @Date: 2019-04-16 15:57:43\n * @LastEditTime: 2019-04-17 10:45:21\n -->\n<div class=\"imgview-wrap\" >\n  <div class=\"imgview-content\">\n    <img class=\"imgview-detail\" [ngStyle]=\"styleJsonStr\" [draggable]=\"true\" (dragstart)=\"dargStart($event)\"\n      (drag)=\"drag($event)\" (dragend)=\"dragEnd($event)\" #imgDetail [src]=\"imgSrc\" alt=\"图片\" width=\"100%\">\n  </div>\n  <div class=\"imgview-toolbar\" [hidden] =\"hidden\">\n    <span class=\"toolbar-action\" (click)=\"enlarge($event)\">\n      <i class=\"icon anticon icon-pluscircleo\" title=\"放大\"></i>\n    </span>\n    <span class=\"toolbar-action\" (click)=\"narrow($event)\">\n      <i class=\"icon anticon icon-minuscircleo\" title=\"缩小\"></i>\n    </span>\n    <!-- <span class=\"toolbar-action\" (click)=\"qp($event)\">\n      <i class=\"icon iconfont fc-icon-magnify\" title=\"全屏\"></i>\n    </span> -->\n    <span class=\"toolbar-action\" (click)=\"recovery($event)\">\n      <i class=\"icon anticon icon-reload1\" title=\"恢复\"></i>\n    </span>\n  </div>\n</div>\n\n<!-- <div class=\"imgview-content\" *ngIf=\"currentPage === 1\">\n  <img class=\"imgview-detail\" [ngStyle]=\"styleJsonStr\" [draggable]=\"true\" (dragstart)=\"dargStart($event)\"\n    (drag)=\"drag($event)\" (dragend)=\"dragEnd($event)\" #imgDetail [src]=\"imgSrc\" alt=\"图片\" width=\"100%\">\n</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/fccomponents/fcverifycode/fcverifycode.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/fccomponents/fcverifycode/fcverifycode.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: honghong\n * @Date: 2019-10-17 09:45:06\n * @LastEditors: honghong\n * @LastEditTime: 2019-10-17 09:58:59\n * @Description: \n * @email: 3300536651@qq.com\n -->\n<div class=\"fc-verifycode\">\n  <input id=\"codeValid\" name=\"codeValid\" maxlength=\"4\" class=\"form-control\" required #codeValid=\"ngModel\" type=\"text\"\n    nz-input [(ngModel)]=\"fcCode\" [(fcVerifyCodeName)]=\"validVerifyCode\" placeholder=\"请输入验证码\" />\n  <canvas id=\"verifyCode\" #verifyCode width=\"100\" height=\"28\" (click)=\"draw([]);\"></canvas>\n  <div class=\"fc-form-error\" *ngIf=\"codeValid.invalid && (codeValid.dirty || codeValid.touched)\">\n    <div>\n      <div *ngIf=\"codeValid.errors.required\">\n        验证码不能为空.\n      </div>\n      <div *ngIf=\"codeValid.errors.fcVerifyCodeName\">\n        验证码不正确.\n      </div>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: app入口
 * @email: 3300536651@qq.com
 * @Date: 2019-02-18 10:44:05
 * @LastEditTime: 2019-04-17 10:16:54
 */

let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: `<router-outlet></router-outlet>`
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_fccore_fccore_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/fccore/fccore.module */ "./src/fccore/fccore.module.ts");
/* harmony import */ var src_fccore_service_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/fccore/service/user.service */ "./src/fccore/service/user.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.route */ "./src/app/app.route.ts");
/* harmony import */ var _components_dialog_syseditpassword_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dialog/syseditpassword.dialog */ "./src/app/components/dialog/syseditpassword.dialog.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/forgot/forgot.component */ "./src/app/components/forgot/forgot.component.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
/* harmony import */ var _components_lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/lockscreen/lockscreen.component */ "./src/app/components/lockscreen/lockscreen.component.ts");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _service_layout_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/layout.service */ "./src/app/service/layout.service.ts");
/* harmony import */ var _service_routereusestrategy_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./service/routereusestrategy.service */ "./src/app/service/routereusestrategy.service.ts");
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./share.service */ "./src/app/share.service.ts");
/* harmony import */ var src_fccomponents__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/fccomponents */ "./src/fccomponents/index.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 根模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-10-15 10:45:27
 */
























Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3___default.a);
let AppModule = class AppModule {
    constructor() { }
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        entryComponents: [_components_dialog_syseditpassword_dialog__WEBPACK_IMPORTED_MODULE_14__["SyseditpasswordComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(_app_route__WEBPACK_IMPORTED_MODULE_13__["AppRoutes"]),
            src_fccore_fccore_module__WEBPACK_IMPORTED_MODULE_10__["FccoreModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NgZorroAntdModule"],
            src_fccomponents__WEBPACK_IMPORTED_MODULE_24__["FccomponentModule"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
            _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_17__["LayoutComponent"],
            _components_error_error_component__WEBPACK_IMPORTED_MODULE_15__["ErrorComponent"],
            _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_19__["SigninComponent"],
            _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_16__["ForgotComponent"],
            _components_lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_18__["LockscreenComponent"],
            _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_20__["SignupComponent"],
            _components_dialog_syseditpassword_dialog__WEBPACK_IMPORTED_MODULE_14__["SyseditpasswordComponent"]
        ],
        providers: [
            src_fccore_service_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"],
            _share_service__WEBPACK_IMPORTED_MODULE_23__["ShareService"],
            _service_layout_service__WEBPACK_IMPORTED_MODULE_21__["LayoutService"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouteReuseStrategy"], useClass: _service_routereusestrategy_service__WEBPACK_IMPORTED_MODULE_22__["FcRouteReuseStrategy"] },
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"],
                useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["HashLocationStrategy"]
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppModule);



/***/ }),

/***/ "./src/app/app.route.ts":
/*!******************************!*\
  !*** ./src/app/app.route.ts ***!
  \******************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var src_fccore_service_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/fccore/service/user.service */ "./src/fccore/service/user.service.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/forgot/forgot.component */ "./src/app/components/forgot/forgot.component.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
/* harmony import */ var _components_lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/lockscreen/lockscreen.component */ "./src/app/components/lockscreen/lockscreen.component.ts");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");







const SignIn = 'signin';
const AppRoutes = [
    {
        path: '',
        component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        canActivate: [src_fccore_service_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]],
        children: [
            {
                path: 'error',
                component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_1__["ErrorComponent"]
            },
            {
                path: 'fc',
                loadChildren: '../feature/fc/fc.module#FcModule'
            }
        ]
    },
    {
        path: SignIn,
        component: _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__["SigninComponent"]
    },
    {
        path: 'forgot',
        component: _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_2__["ForgotComponent"]
    },
    {
        path: 'lockscreen',
        component: _components_lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_4__["LockscreenComponent"]
    },
    {
        path: 'signup',
        component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]
    }
];


/***/ }),

/***/ "./src/app/components/dialog/syseditpassword.dialog.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dialog/syseditpassword.dialog.ts ***!
  \*************************************************************/
/*! exports provided: SyseditpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyseditpasswordComponent", function() { return SyseditpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");

/*
 * @Author: honghong
 * @Date: 2019-07-04 17:15:57
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-15 10:55:06
 * @Description:
 * @email: 3300536651@qq.com
 */



let SyseditpasswordComponent = class SyseditpasswordComponent {
    constructor(fb, subject) {
        this.fb = fb;
        this.subject = subject;
        // 原密码验证
        this.oldPasswordExplain = '';
        // 新密码验证
        this.newPasswordExplain = '';
        // 确认新密码验证
        this.confirmPasswordExplain = '';
        //验证旧密码
        this.formatOldValidator = (control) => {
            if (!control.value) {
                this.oldPasswordExplain = '旧密码不能为空！';
                return { confirm: true }; // 验证不能为空
            }
        };
        /**
         *
         *验证输入密码是否符号格式（长度不能少于多少位，必须有大小写，数字字母及特殊符号的组合）
         * @memberof EdituserComponent
         */
        this.formatValidator = (control) => {
            const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\=\,\.\?\|\(\)\{\}\[\#\@\`\~\!\<\>\;\:\'\"\_\&\%\]\*\/\\\+\^\$\-]).{6,16}$/;
            if (!control.value) {
                this.newPasswordExplain = '新密码不能为空！';
                return { format: true }; // 验证不能为空
            }
            else if (!regExp.test(control.value)) {
                this.newPasswordExplain = '请输入6-16位密码，且必须包含字母、数字、特殊字符、区分大小写！';
                return { format: true, error: true };
            }
            else if (control.value == this.validateForm.controls['oldPassword'].value) {
                this.newPasswordExplain = '新旧密码不能一致';
                return { format: true, error: true };
            }
        };
        /**
         *
         * 验证新密码输入是否一致
         * @memberof EdituserComponent
         */
        this.confirmNewPwdValidator = (control) => {
            if (!control.value) {
                return { required: true }; // 验证不能为空
            }
            else if (control.value !== this.validateForm.controls['newPassword'].value) {
                this.confirmPasswordExplain = '两次输入的密码不一致';
                return { confirm: true, error: true };
            }
        };
    }
    ngOnInit() {
        // 表单验证
        this.validateForm = this.fb.group({
            oldPassword: [null, [this.formatOldValidator]],
            newPassword: [null, [this.formatValidator]],
        });
    }
    /**
    * 获取名称
    * @param name
    */
    getFormControl(name) {
        return this.validateForm.controls[name];
    }
    /**
     *
     *确定
     */
    handleOk() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
        }
        // 判断旧密码是否输入正确
        if (true) {
            //校验新密码
            this.subject.destroy('onCancel');
        }
        else {}
        ;
    }
    /**
     *
     *取消
     */
    handleCancel() {
        this.subject.destroy('onCancel');
    }
};
SyseditpasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SyseditpasswordComponent.prototype, "oldPassword", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SyseditpasswordComponent.prototype, "newPassword", void 0);
SyseditpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sys-editpassword',
        template: __webpack_require__(/*! raw-loader!./syseditpassword.dialog.html */ "./node_modules/raw-loader/index.js!./src/app/components/dialog/syseditpassword.dialog.html"),
        styles: ["\n  ::ng-deep .edituser-dialog-wrap .ant-modal-body{\n    padding: 16px 0 0;\n  }\n  ::ng-deep .edituser-dialog .edituser-dialog-footer {\n    border-top: 1px solid #e9e9e9;\n    padding: 10px 16px 10px 10px;\n    text-align: right;\n    border-radius: 0 0 4px 4px;\n  }\n  "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"]])
], SyseditpasswordComponent);



/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 错误
 * @email: 3300536651@qq.com
 * @Date: 2019-02-18 10:59:15
 * @LastEditTime: 2019-04-17 09:55:15
 */


let ErrorComponent = class ErrorComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
ErrorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'error',
        template: __webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/error/error.component.html"),
        styles: ["\n  "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ErrorComponent);



/***/ }),

/***/ "./src/app/components/forgot/forgot.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/forgot/forgot.component.ts ***!
  \*******************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 忘记密码
 * @email: 3300536651@qq.com
 * @Date: 2019-02-18 10:59:15
 * @LastEditTime: 2019-04-17 09:55:51
 */


let ForgotComponent = class ForgotComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
ForgotComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ForgotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'forgot',
        template: __webpack_require__(/*! raw-loader!./forgot.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/forgot/forgot.component.html"),
        styles: ["\n  "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ForgotComponent);



/***/ }),

/***/ "./src/app/components/layout/layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_service_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/layout.service */ "./src/app/service/layout.service.ts");
/* harmony import */ var src_app_share_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share.service */ "./src/app/share.service.ts");
/* harmony import */ var src_fccore_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/fccore/service/common.service */ "./src/fccore/service/common.service.ts");
/* harmony import */ var _environments_environment_dev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment.dev */ "./src/environments/environment.dev.ts");
/* harmony import */ var _dialog_syseditpassword_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialog/syseditpassword.dialog */ "./src/app/components/dialog/syseditpassword.dialog.ts");
/* harmony import */ var src_fccore_service_cache_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/fccore/service/cache.service */ "./src/fccore/service/cache.service.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 整体布局包括顶部工具栏、左侧菜单、侧边栏、选项卡导航主体内容区
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-10-16 17:59:22
 */









let LayoutComponent = class LayoutComponent {
    constructor(router, activatedRoute, mainService, shareService, modalService, message) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.mainService = mainService;
        this.shareService = shareService;
        this.modalService = modalService;
        this.message = message;
        // 路由打开记录
        this.selectMenu = {};
        // 当前所有菜单
        this._menus = [];
        // 默认选中的索引
        this.fcSelectedIndex = 0;
        // 选项卡
        this.fcTabs = [];
        // 单位名称
        this.companyName = 'admin';
        // 菜单是否收起
        this.menuIsCollapsed = false;
        // 消息侧边栏
        this.navsideVisible = false;
        // 菜单导航的宽度
        this.menuWidth = 200;
        // 头像
        this.avatar = 'assets/image/avatar.jpeg';
        // 项目名
        this.projectName = _environments_environment_dev__WEBPACK_IMPORTED_MODULE_7__["environment"].projectName;
        // 未读消息
        this.noReadMessage = [];
        // 已读消息
        this.isReadMessage = [];
        this.fcTabs = [];
        // 点击左侧导航
        src_fccore_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"].subscribe('selectedMenu', (event) => {
            if (event) {
                this.selectMenu_1 = event.param;
                const tabOne = this.fcTabs.filter(tab => tab.content.MENUID === this.selectMenu_1.MENUID);
                if (tabOne.length > 0) {
                    this.fcSelectedIndex = tabOne[0].index;
                    this.selectedTabMenu(tabOne[0]);
                }
                else {
                    const tab = {
                        id: this.selectMenu_1.ID,
                        index: this.fcTabs.length,
                        enabled: false,
                        name: this.selectMenu_1.MENUNAME,
                        close: true,
                        icon: this.selectMenu_1.MENUICON,
                        content: this.selectMenu_1,
                        refresh: 'Y'
                    };
                    if (this.fcTabs.length === 0) {
                        tab.enabled = true;
                        tab.close = false;
                    }
                    this.fcTabs.push(tab);
                    this.fcSelectedIndex = tab.index;
                    this.selectedTabMenu(tab);
                }
            }
        });
    }
    /**
     * 发起事件
     */
    select() {
        this.shareService.switchProjectSubject.next({
            eventName: 'changeDate',
            param: {} // 参数
        });
    }
    /**
     * 显示时加载
     */
    ngOnInit() {
        // 所有的菜单
        this.allMenus = this.mainService.getMenus().P_MENUS;
        this._menus = this.allMenus[0].P_CHILDMENUS;
        // 默认选择某个菜单
        src_fccore_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"].event('selectedMenu', {
            ID: '0',
            MENUID: 'HOME',
            ROUTER: 'home',
            PID: _environments_environment_dev__WEBPACK_IMPORTED_MODULE_7__["environment"].pid,
            MENUTYPE: 'INURL',
            MENUNAME: '首页',
            MENUICON: 'fc-icon-shouye'
        });
        // 导航选项卡
        if (this.fcTabs) {
            this.fcTabs = [];
            this.fcSelectedIndex = 0;
            if (this.fcTabs.length === 0) {
                this.fcTabs.push({
                    id: '0',
                    index: 0,
                    enabled: true,
                    name: '首页',
                    close: false,
                    icon: 'fc-icon-shouye',
                    refresh: 'N',
                    content: {
                        ID: '0',
                        MENUID: 'HOME',
                        ROUTER: 'home',
                        PID: _environments_environment_dev__WEBPACK_IMPORTED_MODULE_7__["environment"].pid,
                        MENUTYPE: 'INURL'
                    }
                });
            }
        }
        this.router.navigate(['/' + _environments_environment_dev__WEBPACK_IMPORTED_MODULE_7__["environment"].pid.toLocaleLowerCase() + '/home']);
        for (let i = 0; i < 50; i++) {
            if (i % 2 === 0) {
                this.noReadMessage.push({
                    id: i,
                    title: '这是一条未读消息,这是一条未读消息.',
                    time: '2019-10-01'
                });
                this.isReadMessage.push({
                    id: i,
                    title: '这是一条已读消息,这是一条已读消息.',
                    time: '2019-10-01'
                });
            }
            else {
                this.noReadMessage.push({
                    id: i,
                    title: '这是一条未读消息,超出部分显示省略号,超出部分显示省略号,超出部分显示省略号,超出部分显示省略号,超出部分显示省略号,超出部分显示省略号.',
                    time: '2010-10-01'
                });
                this.isReadMessage.push({
                    id: i,
                    title: '这是一条已读消息,超出部分显示省略号,超出部分显示省略号,超出部分显示省略号,超出部分显示省略号,超出部分显示省略号,超出部分显示省略号.',
                    time: '2010-10-01'
                });
            }
        }
    }
    /**
     * 切换项目
     * @param item
     */
    switchProject(menu) {
        this._menus = [];
        this.allMenus.forEach(element => {
            if (element.PID === menu.PID) {
                this._menus = element.P_CHILDMENUS;
                this.projectName = element.MENUNAME;
            }
        });
    }
    toggleLayout() {
        this.menuWidth = this.menuWidth === 64 ? 200 : 64;
        this.menuIsCollapsed = this.menuIsCollapsed === true ? false : true;
    }
    /**
     * 打开或者关闭侧边栏
     */
    toggleSidebar() {
        this.navsideVisible = this.navsideVisible === false ? true : false;
    }
    /**
     * 关闭侧边栏
     */
    closeNavSide() {
        this.navsideVisible = false;
    }
    /**
     * 点击侧边栏外的区域关闭
     */
    _onOutsideClick(event) {
        if (this.navsideVisible) {
            const clickedEl = event.target;
            const classList = clickedEl.classList;
            // 点击的区域不包括此组件本身且不包含顶部工具栏的消息按钮
            if (!!classList.contains('ant-drawer') &&
                !classList.contains('fc-icon-information')) {
                this.navsideVisible = false;
            }
        }
    }
    /**
     * 选中菜单
     * @param menu
     */
    selectedMenu(menu) {
        menu.select = true;
        src_fccore_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"].event('selectedMenu', menu);
    }
    /**
     * @description: 选中选项卡导航
     * @param {type}
     * @return:
     */
    selectedTabMenu(tabMenu) {
        let refresh = 'Y';
        // 判断路由是否打开过，如果已打开不刷新，反之，刷新
        refresh = (this.selectMenu[tabMenu.content.MENUID] && this.selectMenu[tabMenu.content.MENUID] !== '') ? 'N' : "Y";
        if (!this.selectMenu[tabMenu.content.MENUID]) {
            // 将该路由存放在路由打开记录中
            this.selectMenu[tabMenu.content.MENUID] = tabMenu.content.MENUID;
        }
        else {
            refresh = 'N';
        }
        this.mainService.navMenu(this.router, tabMenu.content, refresh);
    }
    /**
     * 关闭选项卡导航
     * @param tab
     */
    closeTabNav(tab) {
        this.selectMenu[tab.content.MENUID] = "";
        if (tab.close) {
            this.fcTabs.splice(this.fcTabs.indexOf(tab), 1);
            let i = 0;
            this.fcTabs.forEach(item => {
                item.index = i++;
            });
            if (this.fcTabs.length > 0) {
                // 如果关闭的选项卡索引 等于 激活的选项卡, 关闭选项卡后，打开选中索引前一个
                if (this.fcSelectedIndex && tab.index > this.fcSelectedIndex) {
                    src_fccore_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"].event('selectedMenu', this.fcTabs[this.fcSelectedIndex]['content']);
                }
                else {
                    src_fccore_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"].event('selectedMenu', this.fcTabs[this.fcSelectedIndex - 1]['content']);
                }
            }
        }
    }
    /**
     * 退出登录
     */
    siginout() {
        this.siginoutVisible = false;
        this.router.navigate(['/signin']);
    }
    /**
     * 修改密码
     */
    editPassWord() {
        const modal = this.modalService.create({
            nzTitle: '修改密码',
            nzContent: _dialog_syseditpassword_dialog__WEBPACK_IMPORTED_MODULE_8__["SyseditpasswordComponent"],
            nzWrapClassName: 'edituser-dialog-wrap',
            nzComponentParams: {
                oldPassword: '',
                newPassword: 'newPassword'
            },
            nzFooter: null
        });
        modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
        modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));
        setTimeout(() => {
            const instance = modal.getContentComponent();
            instance.newPassword = 'passWord is changed';
        }, 2000);
    }
    /**
     * 清除缓存
     */
    clearCache() {
        src_fccore_service_cache_service__WEBPACK_IMPORTED_MODULE_9__["CacheService"].clear();
        this.message.success('清除缓存成功！');
    }
};
LayoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"] },
    { type: src_app_share_service__WEBPACK_IMPORTED_MODULE_5__["ShareService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navside', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    // 项目名
    )
], LayoutComponent.prototype, "navside", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], LayoutComponent.prototype, "_onOutsideClick", null);
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'layout',
        template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layout/layout.component.html"),
        styles: ["\n      .layout {\n        width: 100%;\n        height: 100%;\n      }\n      .logo {\n        height: 64px;\n        line-height: 64px;\n        float: left;\n      }\n      .logo:after, .fc-header-right:after {\n        content:'';\n        display: block;\n        clear: both;\n      }\n      .logo img{\n        margin-right: 20px;\n        vertical-align: top;\n        height: 50px;\n        margin-top: 7px;\n        margin-left: -10px;\n        float: left;\n      }\n      .logo .iconfont {\n        color: #fff;\n        font-size: 30px;\n        cursor: pointer;\n      }\n      .logo-text {\n        color: #fff;\n        font-size: 20px;\n      }\n      .fc-header-icon-wrap {\n        float: left;\n        transition: .2s;\n        width: 40px;\n        height: 40px;\n        text-align: center;\n        line-height: 40px;\n        cursor: pointer;\n        margin-top: 12px;\n        margin-right: 10px;\n      }\n      .fc-header-icon-wrap:hover {\n        background: #40a9ff;\n        color: #fff;\n      }\n      .fc-header-dropdown {\n        width: auto;\n      }\n      .fc-header-left .icon {\n        float: none;\n        font-size: 24px;\n        cursor: pointer;\n      }\n      .fc-header-right {\n        height: 64px;\n        line-height: 64px;\n        float: right;\n        overflow: hidden;\n      }\n      .fc-header-right .fc-header-icon {\n        font-size: 24px;\n        color: #fff;\n        cursor: pointer;\n      }\n      .fc-header-right .text {\n        font-size: 16px;\n        color: #fff;\n        margin-right: 15px;\n        cursor: pointer;\n      }\n      .fc-header-right .text .iconfont {\n        margin-right: 5px;\n      }\n      .fc-header-right .avatar {\n        cursor: pointer;\n        float: left;\n        margin: 4px 10px 0 10px;\n      }\n      .sidebar-nav {\n        position: relative;\n      }\n      .layout-toggle {\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        height: 40px;\n        line-height: 40px;\n        text-align: center;\n        background-color: #f5f5f5;\n        border-right: 1px solid #e8e8e8;\n      }\n      .layout-toggle .iconfont {\n        color: #333333;\n        font-size: 18px;\n        cursor: pointer;\n        transition: transform ease-in 0.8;\n        display: inline-block;\n      }\n      .layout-toggle .iconfont.arrowright {\n        transform: rotate(180deg);\n      }\n      .layout-toggle .iconfont:hover {\n        color: #000000;\n        font-weight: bold;\n      }\n      .fc-main-wrap {\n        background: #f2f6f9;\n      }\n      .fc-main {\n        width: 100%;\n        height: 100%;\n        overflow:hidden;\n      }\n      ::ng-deep .navside-drawer.ant-drawer-content-wrapper {\n        background-color: #ffffff;\n        top: 64px;\n        height: calc(100% - 64px);\n      }\n      ::ng-deep .navside-drawer .ant-drawer-body {\n        padding: 0;\n      }\n      ::ng-deep .ant-tabs .anticon-close {\n        cursor: pointer;\n      }\n      ::ng-deep .fc-sidebar-menu {\n        background: #ffffff;\n      }\n      ::ng-deep .fc-sidebar-menu .ant-menu-inline-collapsed > .ant-menu-item {\n        padding: 0!important;\n        text-align: center;\n      }\n      ::ng-deep .fc-sidebar-menu .ant-menu-inline-collapsed {\n        width: 64px;\n      }\n      ::ng-deep .fc-sidebar-menu .ant-menu-inline-collapsed .first-level-title {\n        display: none;\n      }\n      ::ng-deep .fc-sidebar-menu .ant-menu-inline-collapsed > .ant-menu-submenu {\n        text-align: center;\n      }\n      ::ng-deep\n        .fc-sidebar-menu\n        .ant-menu-inline-collapsed\n        > .ant-menu-submenu\n        > .ant-menu-submenu-title {\n        padding: 0 !important;\n      }\n      ::ng-deep .fc-sidebar-menu .menu-icon {\n        color: #333333;\n        margin-right: 10px;\n      }\n      ::ng-deep .fc-sidebar-menu .ant-menu-inline-collapsed .menu-icon {\n        margin-right: 0px;\n      }\n      ::ng-deep .ant-menu-popup::before {\n        opacity: 1;\n        background-color: red;\n      }\n      ::ng-deep .ant-menu-popup {\n        z-index: 1000;\n      }\n      ::ng-deep .fc-tabnav {\n        min-height: 40px;\n        background-color: #ffffff;\n        box-shadow: 0 3px 5px -6px #1890ff;\n      }\n      ::ng-deep .fc-tabnav .ant-tabs-bar {\n        margin-bottom: 0;\n      }\n      ::ng-deep .fc-tabnav .ant-tabs-nav .ant-tabs-tab {\n        margin-left: 0px;\n        margin-right: 0px;\n        padding: 8px 5px 8px 16px;\n      }\n      ::ng-deep .fc-tabnav .ant-tabs-nav-wrap {\n        margin-bottom: 0;\n      }\n      ::ng-deep .fc-tabnav .ant-tabs-nav .ant-tabs-tab .anticon {\n        margin-right: 8px;\n        font-size: 12px;\n        transform: scale(0.9);\n        margin-left: 10px;\n      }\n      .tab-home {\n        padding-right: 15px;\n      }\n      ::ng-deep .navside-drawer .ant-tabs-nav .ant-tabs-tab {\n        width: 50%;\n        text-align: center;\n        margin: 0;\n      }\n      ::ng-deep .navside-drawer .ant-drawer-body {\n        height: 100%;\n      }\n      ::ng-deep .navside-drawer .ant-drawer-body .ant-tabs {\n        height: 100%;\n        overflow: hidden;\n      }\n      ::ng-deep .navside-drawer .ant-drawer-body .ant-tabs-content {\n        height: 100%;\n      }\n      .navside-information-icon {\n        padding: 0 10px;\n      }\n      .navside-information-icon .icon {\n       font-size: 22px;\n      }\n      .navside-message-noread .navside-information-icon .icon{\n        color:  #ffd740;\n      }\n      .navside-message-isread .navside-information-icon .icon{\n        color:  #1890ff;\n      }\n      .navside-item-content {\n        flex: 1;\n        overflow: hidden;\n      }\n      .navside-title {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n      .navside-time {\n        font-size: 12px;\n        color: rgba(0,0,0,.54);\n      }\n      ::ng-deep .navside-drawer .ant-list-item:hover {\n        cursor: pointer;\n        background-color: rgba(0,0,0,.04);\n      }\n      ::ng-deep .navside-drawer .ant-tabs-nav {\n        width: 100%;\n      }\n      ::ng-deep .navside-drawer .ant-tabs .ant-tabs-top-content > .ant-tabs-tabpane, \n      ::ng-deep .navside-drawer .ant-tabs .ant-tabs-bottom-content > .ant-tabs-tabpane {\n        height: calc(100% - 60px);\n        overflow: auto;\n      }\n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_service_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"],
        src_app_share_service__WEBPACK_IMPORTED_MODULE_5__["ShareService"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])
], LayoutComponent);



/***/ }),

/***/ "./src/app/components/lockscreen/lockscreen.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/lockscreen/lockscreen.component.ts ***!
  \***************************************************************/
/*! exports provided: LockscreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockscreenComponent", function() { return LockscreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 锁屏
 * @email: 3300536651@qq.com
 * @Date: 2019-02-18 10:59:15
 * @LastEditTime: 2019-04-17 10:10:10
 */


let LockscreenComponent = class LockscreenComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
LockscreenComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LockscreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'lockscreen',
        template: __webpack_require__(/*! raw-loader!./lockscreen.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/lockscreen/lockscreen.component.html"),
        styles: ["\n  "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LockscreenComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.dev */ "./src/environments/environment.dev.ts");
/* harmony import */ var src_fccore_service_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/fccore/service/cache.service */ "./src/fccore/service/cache.service.ts");
/* harmony import */ var src_fccomponents_fcverifycode_fcverifycode_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/fccomponents/fcverifycode/fcverifycode.component */ "./src/fccomponents/fcverifycode/fcverifycode.component.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 登录
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-10-11 15:28:50
 */





const PROJECT_NAME = src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_3__["environment"].projectName;
let SigninComponent = class SigninComponent {
    constructor(router) {
        this.router = router;
        this.hasError = false;
        this.msg = '用户名或者密码错误';
        this.userId = '';
        this.password = '';
        // 显示错误
        this.showError = 'N';
    }
    ngOnInit() {
        if (this.loginValid(this.userId, this.password)) {
            this.router.navigate([
                '/' + src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_3__["environment"].pid.toLocaleLowerCase() + '/home'
            ]);
        }
    }
    /**
     * 根据用户密码登录，并存储当前用户的相关信息
     */
    login() {
        if (this.loginValid(this.userId, this.password)) {
            this.hasError = false;
            src_fccore_service_cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"].setS('userinfo', { USERCODE: 'admin' });
            src_fccore_service_cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"].setS('token', 'ab2be4ef08c0418bab13a6a88c9772e7');
            this.router.navigate([
                '/' + src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_3__["environment"].pid.toLocaleLowerCase() + '/home'
            ]);
        }
        else {
            this.hasError = true;
        }
    }
    loginValid(userId, password) {
        if (userId === 'admin' && password === 'admin') {
            return true;
        }
        else {
            return false;
        }
    }
};
SigninComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('verifyCode', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_fccomponents_fcverifycode_fcverifycode_component__WEBPACK_IMPORTED_MODULE_5__["Fcverifycode"])
], SigninComponent.prototype, "verifyCode", void 0);
SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'signin',
        template: __webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/signin/signin.component.html"),
        styles: [__webpack_require__(/*! ./signin.less */ "./src/app/components/signin/signin.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SigninComponent);



/***/ }),

/***/ "./src/app/components/signin/signin.less":
/*!***********************************************!*\
  !*** ./src/app/components/signin/signin.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * @Author: honghong\n * @LastEditors: honghong\n * @Description: 登录页面的样式\n * @email: 3300536651@qq.com\n * @Date: 2019-04-01 14:01:49\n * @LastEditTime: 2019-07-05 12:47:47\n */\n.login-in {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.login-bg {\n  width: 100%;\n  height: 100%;\n  background: url('login_bg.jpeg') no-repeat fixed top;\n  background-size: 100% 100%;\n  position: fixed;\n}\n.login-bg .login-content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -348px;\n  margin-top: -210px;\n  min-height: 400px;\n  height: 400px;\n  box-shadow: 0 1px 5px 0px rgba(50, 50, 50, 0.2);\n  background: #fff;\n}\n.login-bg .login-content .login-left {\n  float: left;\n  width: 390px;\n  height: 100%;\n  background: #4E8AEC;\n  position: relative;\n}\n.login-bg .login-content .login-left .map-img {\n  width: 336px;\n  height: 300px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -168px;\n  margin-top: -150px;\n}\n.login-bg .login-content .login-left .left-img {\n  width: 365px;\n  height: 156px;\n  position: absolute;\n  left: 50%;\n  margin-left: -182px;\n  top: 130px;\n}\n.login-bg .login-content .login-right {\n  float: right;\n  width: 296px;\n  height: 100%;\n  background: #fff;\n  position: relative;\n}\n.login-bg .login-content .login-right .login-right-content {\n  width: 80%;\n  position: absolute;\n  left: 30px;\n  top: 60px;\n}\n.login-bg .login-content .login-right .login-h2 {\n  width: 100%;\n  font-size: 16px;\n  color: #323232;\n  text-align: center;\n  margin-bottom: 20px;\n  font-weight: 400;\n}\n.login-bg .login-content .login-right .login-date {\n  margin-bottom: 5px !important;\n}\n.login-bg .login-content .login-right .user-box {\n  width: 100%;\n  height: 30px;\n  border-radius: 3px;\n  margin-bottom: 20px;\n}\n.login-bg .login-content .login-right .user-box .user-input {\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  line-height: 30px;\n  outline: none;\n  border: 1px solid #aaa;\n  border-radius: 4px;\n  color: #666;\n  font-size: 12px;\n}\n.login-bg .login-content .login-right .user-box input::-webkit-input-placeholder {\n  color: #cccccc !important;\n  font-size: 12px !important;\n}\n.login-bg .login-content .login-right .user-box input::-moz-placeholder {\n  color: #cccccc !important;\n  font-size: 12px !important;\n}\n.login-bg .login-content .login-right .user-box input::-ms-input-placeholder {\n  color: #cccccc !important;\n  font-size: 12px !important;\n}\n.login-bg .login-content .login-right .user-box input::placeholder {\n  color: #cccccc !important;\n  font-size: 12px !important;\n}\n.login-bg .login-content .login-right .user-box input:focus::-webkit-input-placeholder {\n  color: transparent !important;\n}\n.login-bg .login-content .login-right .user-box input:focus::-moz-placeholder {\n  color: transparent !important;\n}\n.login-bg .login-content .login-right .user-box input:focus::-ms-input-placeholder {\n  color: transparent !important;\n}\n.login-bg .login-content .login-right .user-box input:focus::placeholder {\n  color: transparent !important;\n}\n.login-bg .login-content .login-right .user-box .user-input:hover {\n  color: #666;\n  background-color: #ffffff;\n  border-color: #666;\n}\n.login-bg .login-content .login-right .user-box .user-input:focus {\n  color: #666;\n  border-color: #666 !important;\n  background-color: #fff;\n}\n.login-bg .login-content .login-right .save-word {\n  width: 100%;\n  text-align: center;\n}\n.login-bg .login-content .login-right .save-word .mat-checkbox-inner-container {\n  width: 14px;\n  height: 14px;\n  border-color: #929292;\n}\n.login-bg .login-content .login-right .save-word .mat-checkbox-layout .mat-checkbox-label {\n  font-size: 12px;\n  color: #666;\n}\n.login-bg .login-content .login-right .save-word .mat-checkbox-frame {\n  border-width: 1px;\n}\n.login-bg .login-content .login-right .save-word .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background: #3f77e4;\n}\n.login-bg .login-content .login-right .login-button {\n  display: block;\n  width: 100%;\n  height: 30px;\n  outline: none;\n  border: none;\n  background: #3f77e4;\n  font-size: 12px;\n  color: #fff;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.login-bg .login-content .login-right .login-button:hover {\n  background: #3f77e4;\n}\n.login-bg .login-content .login-right .login-btn {\n  margin-top: 7px;\n}\n.login-bg .login-content .login-right .google-download {\n  width: 100%;\n}\n.login-bg .login-content .login-right .google-download p {\n  font-size: 12px;\n  text-align: center;\n  color: #666;\n}\n.login-bg .login-content .login-right .google-download a {\n  font-size: 12px;\n  color: #ff7573;\n  cursor: pointer;\n}\n.login-bg .user-input.ng-invalid {\n  border: 1px solid #ff7573 !important;\n}\n.login-bg .user-input.ng-valid {\n  border: 1px solid #aaa !important;\n}\n.login-bg .user-box {\n  position: relative;\n}\n.login-bg .required-color {\n  width: 100%;\n  height: 20px;\n  position: absolute;\n  left: 0;\n  top: 30px;\n  font-size: 12px;\n  text-align: center;\n  color: #ff7573;\n  z-index: 9;\n  border-radius: 2px;\n}\n.login-bg .required-color p {\n  height: 20px;\n  line-height: 20px;\n}\n/* 块级按钮文字不浮动 */\n:host ::ng-deep .login-btn .fc-button-block > span {\n  float: none;\n}\n.sigin-body .sigin-error {\n  width: 100%;\n  margin-bottom: 30px;\n  line-height: 24px;\n  box-sizing: border-box;\n  font-size: 14px;\n  margin-top: 20px;\n}\n.sigin-error-in {\n  background: #FEEEEB;\n  border: 1px solid #F15532;\n  color: #F15533;\n  text-align: left;\n  padding: 3px 6px;\n  margin-bottom: 20px;\n}\n.project-name {\n  font-size: 30px;\n  color: #fff;\n  display: block;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  top: 40%;\n}\n.fc-form-error {\n  font-size: 12px;\n  color: #f5222d;\n}\n.fc-form-error .ant-input {\n  background-color: #fff;\n  border-color: #f5222d;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmxlc3MiLCIvQXBwbGljYXRpb25zL2hvbmdob25nL2dpdGh1Yi9mYy1hbmd1bGFyL3NyYy9hcHAvY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7RUFPRTtBQ0NGO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURDRjtBQ0VBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvREFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBREFGO0FDR0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLCtDQUFBO0VBQ0EsZ0JBQUE7QURERjtBQ0tBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBREhGO0FDTUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FESkY7QUNPQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FETEY7QUNRQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURORjtBQ1NBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QURQRjtBQ1VBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FEUkY7QUNXQTtFQUNFLDZCQUFBO0FEVEY7QUNZQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRFZGO0FDYUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FEWEY7QUNjQTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QURaRjtBQ1VBO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBRFpGO0FDVUE7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FEWkY7QUNVQTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QURaRjtBQ2VBO0VBQ0UsNkJBQUE7QURiRjtBQ1lBO0VBQ0UsNkJBQUE7QURiRjtBQ1lBO0VBQ0UsNkJBQUE7QURiRjtBQ1lBO0VBQ0UsNkJBQUE7QURiRjtBQ2dCQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FEZEY7QUNpQkE7RUFDRSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBRGZGO0FDa0JBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FEaEJGO0FDbUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBRGpCRjtBQ29CQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FEbEJGO0FDcUJBO0VBQ0UsaUJBQUE7QURuQkY7QUNzQkE7RUFDRSxtQkFBQTtBRHBCRjtBQ3VCQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBRHJCRjtBQ3dCQTtFQUNFLG1CQUFBO0FEdEJGO0FDeUJBO0VBQ0UsZUFBQTtBRHZCRjtBQzBCQTtFQUNFLFdBQUE7QUR4QkY7QUMyQkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FEekJGO0FDNEJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEMUJGO0FDNkJBO0VBQ0Usb0NBQUE7QUQzQkY7QUM4QkE7RUFDRSxpQ0FBQTtBRDVCRjtBQytCQTtFQUNFLGtCQUFBO0FEN0JGO0FDZ0NBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBRDlCRjtBQ2lDQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBRC9CRjtBQUNBLGNBQWM7QUNvQ2Q7RUFDRSxXQUFBO0FEbENGO0FDcUNBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRG5DRjtBQ3NDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FEcENGO0FDdUNBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBRHJDRjtBQ3dDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FEdENGO0FDd0NFO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtBRHRDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbmluL3NpZ25pbi5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBBdXRob3I6IGhvbmdob25nXG4gKiBATGFzdEVkaXRvcnM6IGhvbmdob25nXG4gKiBARGVzY3JpcHRpb246IOeZu+W9lemhtemdoueahOagt+W8j1xuICogQGVtYWlsOiAzMzAwNTM2NjUxQHFxLmNvbVxuICogQERhdGU6IDIwMTktMDQtMDEgMTQ6MDE6NDlcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMTktMDctMDUgMTI6NDc6NDdcbiAqL1xuLmxvZ2luLWluIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubG9naW4tYmcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9sb2dpbl9iZy5qcGVnJykgbm8tcmVwZWF0IGZpeGVkIHRvcDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0zNDhweDtcbiAgbWFyZ2luLXRvcDogLTIxMHB4O1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuMik7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLWxlZnQge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDM5MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICM0RThBRUM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tbGVmdCAubWFwLWltZyB7XG4gIHdpZHRoOiAzMzZweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTE2OHB4O1xuICBtYXJnaW4tdG9wOiAtMTUwcHg7XG59XG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLWxlZnQgLmxlZnQtaW1nIHtcbiAgd2lkdGg6IDM2NXB4O1xuICBoZWlnaHQ6IDE1NnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xODJweDtcbiAgdG9wOiAxMzBweDtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAyOTZweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC5sb2dpbi1yaWdodC1jb250ZW50IHtcbiAgd2lkdGg6IDgwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzMHB4O1xuICB0b3A6IDYwcHg7XG59XG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC5sb2dpbi1oMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzIzMjMyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC5sb2dpbi1kYXRlIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC51c2VyLWJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLnVzZXItYm94IC51c2VyLWlucHV0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAudXNlci1ib3ggaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNjY2NjY2MgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC51c2VyLWJveCBpbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLnVzZXItYm94IC51c2VyLWlucHV0OmhvdmVyIHtcbiAgY29sb3I6ICM2NjY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogIzY2Njtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLnVzZXItYm94IC51c2VyLWlucHV0OmZvY3VzIHtcbiAgY29sb3I6ICM2NjY7XG4gIGJvcmRlci1jb2xvcjogIzY2NiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAuc2F2ZS13b3JkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLnNhdmUtd29yZCAubWF0LWNoZWNrYm94LWlubmVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGJvcmRlci1jb2xvcjogIzkyOTI5Mjtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLnNhdmUtd29yZCAubWF0LWNoZWNrYm94LWxheW91dCAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLnNhdmUtd29yZCAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG59XG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC5zYXZlLXdvcmQgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogIzNmNzdlNDtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLmxvZ2luLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICMzZjc3ZTQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAubG9naW4tYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzNmNzdlNDtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLmxvZ2luLWJ0biB7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLmdvb2dsZS1kb3dubG9hZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAuZ29vZ2xlLWRvd25sb2FkIHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2NjY7XG59XG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC5nb29nbGUtZG93bmxvYWQgYSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZjc1NzM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5sb2dpbi1iZyAudXNlci1pbnB1dC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmNzU3MyAhaW1wb3J0YW50O1xufVxuLmxvZ2luLWJnIC51c2VyLWlucHV0Lm5nLXZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYSAhaW1wb3J0YW50O1xufVxuLmxvZ2luLWJnIC51c2VyLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5sb2dpbi1iZyAucmVxdWlyZWQtY29sb3Ige1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMzBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmY3NTczO1xuICB6LWluZGV4OiA5O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4ubG9naW4tYmcgLnJlcXVpcmVkLWNvbG9yIHAge1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLyog5Z2X57qn5oyJ6ZKu5paH5a2X5LiN5rWu5YqoICovXG46aG9zdCA6Om5nLWRlZXAgLmxvZ2luLWJ0biAuZmMtYnV0dG9uLWJsb2NrID4gc3BhbiB7XG4gIGZsb2F0OiBub25lO1xufVxuLnNpZ2luLWJvZHkgLnNpZ2luLWVycm9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uc2lnaW4tZXJyb3ItaW4ge1xuICBiYWNrZ3JvdW5kOiAjRkVFRUVCO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRjE1NTMyO1xuICBjb2xvcjogI0YxNTUzMztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogM3B4IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5wcm9qZWN0LW5hbWUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDQwJTtcbn1cbi5mYy1mb3JtLWVycm9yIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2Y1MjIyZDtcbn1cbi5mYy1mb3JtLWVycm9yIC5hbnQtaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICNmNTIyMmQ7XG59XG4iLCIvKlxuICogQEF1dGhvcjogaG9uZ2hvbmdcbiAqIEBMYXN0RWRpdG9yczogaG9uZ2hvbmdcbiAqIEBEZXNjcmlwdGlvbjog55m75b2V6aG16Z2i55qE5qC35byPXG4gKiBAZW1haWw6IDMzMDA1MzY2NTFAcXEuY29tXG4gKiBARGF0ZTogMjAxOS0wNC0wMSAxNDowMTo0OVxuICogQExhc3RFZGl0VGltZTogMjAxOS0wNy0wNSAxMjo0Nzo0N1xuICovXG4ubG9naW4taW4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxvZ2luLWJnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2UvbG9naW5fYmcuanBlZycpIG5vLXJlcGVhdCBmaXhlZCB0b3A7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0zNDhweDtcbiAgbWFyZ2luLXRvcDogLTIxMHB4O1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuMik7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIDtcbn1cblxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzOTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjNEU4QUVDO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tbGVmdCAubWFwLWltZyB7XG4gIHdpZHRoOiAzMzZweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTE2OHB4O1xuICBtYXJnaW4tdG9wOiAtMTUwcHg7XG59XG5cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tbGVmdCAubGVmdC1pbWcge1xuICB3aWR0aDogMzY1cHg7XG4gIGhlaWdodDogMTU2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTE4MnB4O1xuICB0b3A6IDEzMHB4O1xufVxuXG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMjk2cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC5sb2dpbi1yaWdodC1jb250ZW50IHtcbiAgd2lkdGg6IDgwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzMHB4O1xuICB0b3A6IDYwcHg7XG59XG5cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLmxvZ2luLWgyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMjMyMzI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAubG9naW4tZGF0ZSB7XG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xufVxuXG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC51c2VyLWJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAudXNlci1ib3ggLnVzZXItaW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLnVzZXItYm94IGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjY2NjY2NjICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuXG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC51c2VyLWJveCBpbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAudXNlci1ib3ggLnVzZXItaW5wdXQ6aG92ZXIge1xuICBjb2xvcjogIzY2NjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjNjY2O1xufVxuXG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC51c2VyLWJveCAudXNlci1pbnB1dDpmb2N1cyB7XG4gIGNvbG9yOiAjNjY2O1xuICBib3JkZXItY29sb3I6ICM2NjYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAuc2F2ZS13b3JkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAuc2F2ZS13b3JkIC5tYXQtY2hlY2tib3gtaW5uZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgYm9yZGVyLWNvbG9yOiAjOTI5MjkyO1xufVxuXG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC5zYXZlLXdvcmQgLm1hdC1jaGVja2JveC1sYXlvdXQgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLnNhdmUtd29yZCAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG59XG5cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLnNhdmUtd29yZCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjM2Y3N2U0O1xufVxuXG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC5sb2dpbi1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjM2Y3N2U0O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAubG9naW4tYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzNmNzdlNDtcbn1cblxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAubG9naW4tYnRuIHtcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuXG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC5nb29nbGUtZG93bmxvYWQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAuZ29vZ2xlLWRvd25sb2FkIHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLmdvb2dsZS1kb3dubG9hZCBhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmNzU3MztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9naW4tYmcgLnVzZXItaW5wdXQubmctaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjc1NzMgIWltcG9ydGFudDtcbn1cblxuLmxvZ2luLWJnIC51c2VyLWlucHV0Lm5nLXZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYSAhaW1wb3J0YW50O1xufVxuXG4ubG9naW4tYmcgLnVzZXItYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubG9naW4tYmcgLnJlcXVpcmVkLWNvbG9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmNzU3MztcbiAgei1pbmRleDogOTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4ubG9naW4tYmcgLnJlcXVpcmVkLWNvbG9yIHAge1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG5cbi8qIOWdl+e6p+aMiemSruaWh+Wtl+S4jea1ruWKqCAqL1xuXG46aG9zdCA6Om5nLWRlZXAgLmxvZ2luLWJ0biAuZmMtYnV0dG9uLWJsb2NrPnNwYW4ge1xuICBmbG9hdDogbm9uZTtcbn1cblxuLnNpZ2luLWJvZHkgLnNpZ2luLWVycm9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zaWdpbi1lcnJvci1pbiB7XG4gIGJhY2tncm91bmQ6ICNGRUVFRUI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGMTU1MzI7XG4gIGNvbG9yOiAjRjE1NTMzO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAzcHggNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucHJvamVjdC1uYW1lIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiA0MCU7XG59XG5cbi5mYy1mb3JtLWVycm9yIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2Y1MjIyZDtcblxuICAmIC5hbnQtaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjUyMjJkO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment_dev__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment.dev */ "./src/environments/environment.dev.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 注册
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 10:10:48
 */




let SignupComponent = class SignupComponent {
    constructor(router, fb) {
        this.router = router;
        this.fb = fb;
        this._projectName = _environments_environment_dev__WEBPACK_IMPORTED_MODULE_4__["environment"].projectName;
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            uname: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    getFormControl(name) {
        return this.validateForm.controls[name];
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/signup/signup.component.html"),
        styles: ["\n  "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], SignupComponent);



/***/ }),

/***/ "./src/app/service/layout.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/layout.service.ts ***!
  \*******************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _mock_menus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _mock/_menus */ "./_mock/_menus.ts");
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share.service */ "./src/app/share.service.ts");
/* harmony import */ var src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment.dev */ "./src/environments/environment.dev.ts");
/* harmony import */ var src_fccore_service_log_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/fccore/service/log.service */ "./src/fccore/service/log.service.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: layout业务
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-07-24 11:09:21
 */







let LayoutService = class LayoutService {
    constructor(Router, messageService, shareService) {
        this.Router = Router;
        this.messageService = messageService;
        this.shareService = shareService;
        // 项目名称
        this.pid = src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_6__["environment"].pid.toLocaleLowerCase();
    }
    /**
     * @description: 获取菜单信息
     * @param {type} []
     * @return:  []
     */
    getMenus() {
        return _mock_menus__WEBPACK_IMPORTED_MODULE_4__["menus"];
    }
    /**
     * 跳转路由
     * @param menu
     */
    navMenu(router, menu, refresh) {
        if (refresh === undefined) {
            refresh = 'Y';
        }
        if (menu.MENUTYPE === 'APP') {
            // 开启加载条
            let loadId = this.messageService.loading('loading...').messageId;
            let params = {
                queryParams: {
                    refresh: refresh,
                    ID: menu.ID,
                    MENUID: menu.MENUID,
                    MENUNAME: menu.MENUNAME,
                    MENUICON: menu.MENUICON,
                    MENUTYPE: menu.MENUTYPE,
                    ROUTER: menu.ROUTER,
                    PID: menu.PID,
                    APPID: menu.APPID,
                    PARAM: menu.param
                }
            };
            src_fccore_service_log_service__WEBPACK_IMPORTED_MODULE_7__["LogService"].debug(params);
            router
                .navigate(['/' + this.pid + '/' + menu.ROUTER], params)
                .then(() => {
                // this.providers.msgService.endAntLoading();
            })
                .catch(error => {
                console.log(error);
                this.messageService.remove(loadId);
                router.navigate(['/error']);
            });
        }
        else if (menu.MENUTYPE === 'INURL') {
            router
                .navigate(['/' + this.pid + '/' + menu.ROUTER], {
                queryParams: {
                    refresh: refresh,
                    ID: menu.ID,
                    MENUID: menu.MENUID,
                    MENUNAME: menu.MENUNAME,
                    MENUICON: menu.MENUICON,
                    MENUTYPE: menu.MENUTYPE,
                    ROUTER: menu.ROUTER,
                    PID: menu.PID,
                    APPID: menu.APPID,
                    PARAM: menu.param
                }
            })
                .then(() => {
            })
                .catch(error => {
                console.log(error);
            });
        }
        else {
            router
                .navigate(['/' + this.pid + '/' + menu.ROUTER], {
                queryParams: {
                    refresh: refresh,
                    ID: menu.ID,
                    MENUID: menu.MENUID,
                    MENUNAME: menu.MENUNAME,
                    MENUTYPE: menu.MENUTYPE,
                    ROUTER: menu.ROUTER,
                    PID: menu.PID,
                    APPID: menu.APPID,
                    PARAM: menu.param,
                    MENUURL: menu.MENUURL
                }
            })
                .then(() => {
            })
                .catch(error => {
                console.log(error);
                router.navigate(['/error']);
            });
        }
    }
};
LayoutService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
    { type: _share_service__WEBPACK_IMPORTED_MODULE_5__["ShareService"] }
];
LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
        _share_service__WEBPACK_IMPORTED_MODULE_5__["ShareService"]])
], LayoutService);



/***/ }),

/***/ "./src/app/service/routereusestrategy.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/service/routereusestrategy.service.ts ***!
  \*******************************************************/
/*! exports provided: FcRouteReuseStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcRouteReuseStrategy", function() { return FcRouteReuseStrategy; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 路由复用策略,跳转路由时，params的refresh='Y'时，刷新页面，refresh='N'时，不刷新页面，保留用户操作状态
 * @email: 3300536651@qq.com
 * @Date: 2019-02-18 10:59:15
 * @LastEditTime: 2019-07-05 12:15:00
 */

class FcRouteReuseStrategy {
    /**
     * @description: 表示对所有路由允许复用 如果你有路由不想利用可以在这加一些业务逻辑判断
     * @param {type}
     * @return:
     */
    shouldDetach(route) {
        if (route.routeConfig.path === 'home' || route.routeConfig.path === 'error') {
            return false; // 不允许路由复用
        }
        if (route.routeConfig['data'] && !route.routeConfig['data']['keepAlive']) {
            return false; // 不允许路由复用
        }
        if (!route.routeConfig || route.routeConfig.loadChildren) {
            return false;
        }
        return true;
    }
    /**
     * @description: 当路由离开时会触发，存储路由,按path作为key存储路由快照&组件当前实例对象
     * @param {type}
     * @return:
     */
    store(route, handle) {
        if (route.routeConfig.path === 'signin') {
            FcRouteReuseStrategy.handlers = {};
        }
        let url = this.getRouteUrl(route);
        FcRouteReuseStrategy.handlers[url] = handle;
    }
    /**
     * @description:若 path 在缓存中有的都认为允许还原路由
     * @param {type}
     * @return:
     */
    shouldAttach(route) {
        if (route.queryParams['refresh'] === 'Y') {
            return false;
        }
        let url = this.getRouteUrl(route);
        return !!FcRouteReuseStrategy.handlers[url];
    }
    /**
     * @description: 从缓存中获取快照，若无则返回null
     * @param {type}
     * @return:
     */
    retrieve(route) {
        if (!route.routeConfig || route.queryParams['refresh'] === 'Y' || route.routeConfig.loadChildren) {
            return null;
        }
        let url = this.getRouteUrl(route);
        let rtn = FcRouteReuseStrategy.handlers[url];
        if (rtn !== undefined) {
            return rtn;
        }
        else {
            return null;
        }
    }
    /**
     * @description: 进入路由触发，判断是否同一路由
     * @param {type}
     * @return:
     */
    shouldReuseRoute(future, curr) {
        return (
        // 同一路由时复用路由
        future.routeConfig === curr.routeConfig && JSON.stringify(future.params) === JSON.stringify(curr.params));
    }
    /**
     * @description:获取路由路径
     * @param {type}
     * @return:
     */
    getRouteUrl(route) {
        // let path = environment.pid + '_' + route['routeConfig'].path
        let path = route['_routerState'].url.replace(/\//g, '_');
        return path;
    }
    /**
     * @description:
     * @param {type}
     * @return:
     */
    getRouteUrl0(route) {
        let namedOutletCount = 0;
        return (route.pathFromRoot.reduce((path, route) => {
            let config = route.routeConfig;
            if (config) {
                if (config.outlet && config.outlet !== _angular_router__WEBPACK_IMPORTED_MODULE_0__["PRIMARY_OUTLET"]) {
                    path += `(${config.outlet}:`;
                    namedOutletCount++;
                }
                else {
                    path += '/';
                }
                return (path += config.path);
            }
            return path;
        }, '') + (namedOutletCount ? new Array(namedOutletCount + 1).join(')') : ''));
    }
    /**
     * @description: 删除快照
     * @param {type}
     * @return:
     */
    static deleteRouteSnapshot(name) {
        if (FcRouteReuseStrategy.handlers[name]) {
            delete FcRouteReuseStrategy.handlers[name];
        }
        else {
            FcRouteReuseStrategy.waitDelete = name;
        }
    }
}
FcRouteReuseStrategy.handlers = {};


/***/ }),

/***/ "./src/app/share.service.ts":
/*!**********************************!*\
  !*** ./src/app/share.service.ts ***!
  \**********************************/
/*! exports provided: ShareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareService", function() { return ShareService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 单例服务，参考网址: https://angular.cn/guide/singleton-services
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-05-07 18:12:10
 */


let ShareService = class ShareService {
    constructor() {
        // 切换项目名称
        this.switchProjectSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
};
ShareService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ShareService);



/***/ }),

/***/ "./src/environments/environment.dev.ts":
/*!*********************************************!*\
  !*** ./src/environments/environment.dev.ts ***!
  \*********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 开发环境的环境配置
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-19 17:46:33
 */
// 当前环境的文件内容将在构建期间覆盖这些内容。
// 构建系统默认使用`environment.ts`的开发环境，但是如果你这样做的话
// 开发环境使用`ng build --env = dev` 会使用`environment.dev.ts`代替。
// 可以在`.angular-cli.json`中找到environment映射到文件的列表。
// 开发环境
const environment = {
    production: false,
    node_env: 'mock',
    pid: "FC",
    projectName: "fc-angular",
    systemurl: "/server/",
    apiurl: "/server/api/",
    logurl: "/server/api/",
    authurl: "/server/api/",
    wsurl: "",
    license: ''
};


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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

/***/ "./src/fccomponents/fccomponent.module.ts":
/*!************************************************!*\
  !*** ./src/fccomponents/fccomponent.module.ts ***!
  \************************************************/
/*! exports provided: FccomponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FccomponentModule", function() { return FccomponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared */ "./src/shared/index.ts");
/* harmony import */ var _fcimgview_fcimgview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fcimgview/fcimgview.component */ "./src/fccomponents/fcimgview/fcimgview.component.ts");
/* harmony import */ var _fcg2radar_fcg2radar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fcg2radar/fcg2radar.component */ "./src/fccomponents/fcg2radar/fcg2radar.component.ts");
/* harmony import */ var _fcg2bar_fcg2bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fcg2bar/fcg2bar.component */ "./src/fccomponents/fcg2bar/fcg2bar.component.ts");
/* harmony import */ var _fcg2line_fcg2line_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fcg2line/fcg2line.component */ "./src/fccomponents/fcg2line/fcg2line.component.ts");
/* harmony import */ var _fcg2minibar_fcg2minibar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fcg2minibar/fcg2minibar.component */ "./src/fccomponents/fcg2minibar/fcg2minibar.component.ts");
/* harmony import */ var _fcg2pie_fcg2pie_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fcg2pie/fcg2pie.component */ "./src/fccomponents/fcg2pie/fcg2pie.component.ts");
/* harmony import */ var _fcverifycode_fcverifycode_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fcverifycode/fcverifycode.component */ "./src/fccomponents/fcverifycode/fcverifycode.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: fccomponent平台组件模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-10-17 09:58:37
 */










let FccomponentModule = class FccomponentModule {
};
FccomponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        ],
        declarations: [
            _fcimgview_fcimgview_component__WEBPACK_IMPORTED_MODULE_3__["FcimgviewComponent"],
            _fcg2radar_fcg2radar_component__WEBPACK_IMPORTED_MODULE_4__["Fcg2radarComponent"],
            _fcg2bar_fcg2bar_component__WEBPACK_IMPORTED_MODULE_5__["Fcg2barComponent"],
            _fcg2line_fcg2line_component__WEBPACK_IMPORTED_MODULE_6__["Fcg2linerComponent"],
            _fcg2minibar_fcg2minibar_component__WEBPACK_IMPORTED_MODULE_7__["Fcg2minibarComponent"],
            _fcg2pie_fcg2pie_component__WEBPACK_IMPORTED_MODULE_8__["Fcg2pieComponent"],
            _fcverifycode_fcverifycode_component__WEBPACK_IMPORTED_MODULE_9__["Fcverifycode"] // 验证码
        ],
        exports: [
            _fcimgview_fcimgview_component__WEBPACK_IMPORTED_MODULE_3__["FcimgviewComponent"],
            _fcg2radar_fcg2radar_component__WEBPACK_IMPORTED_MODULE_4__["Fcg2radarComponent"],
            _fcg2bar_fcg2bar_component__WEBPACK_IMPORTED_MODULE_5__["Fcg2barComponent"],
            _fcg2line_fcg2line_component__WEBPACK_IMPORTED_MODULE_6__["Fcg2linerComponent"],
            _fcg2minibar_fcg2minibar_component__WEBPACK_IMPORTED_MODULE_7__["Fcg2minibarComponent"],
            _fcg2pie_fcg2pie_component__WEBPACK_IMPORTED_MODULE_8__["Fcg2pieComponent"],
            _fcverifycode_fcverifycode_component__WEBPACK_IMPORTED_MODULE_9__["Fcverifycode"]
        ]
    })
], FccomponentModule);



/***/ }),

/***/ "./src/fccomponents/fcg2bar/fcg2bar.component.ts":
/*!*******************************************************!*\
  !*** ./src/fccomponents/fcg2bar/fcg2bar.component.ts ***!
  \*******************************************************/
/*! exports provided: Fcg2barComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fcg2barComponent", function() { return Fcg2barComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @antv/g2 */ "./node_modules/@antv/g2/build/g2.js");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_antv_g2__WEBPACK_IMPORTED_MODULE_2__);

/*
 * @Author: honghong
 * @Date: 2019-10-14 10:50:43
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-16 10:21:48
 * @Description:
 * @email: 3300536651@qq.com
 */


let Fcg2barComponent = class Fcg2barComponent {
    constructor() {
    }
    // 初始化组件视图和子视图后调用，只调用一次 ， 可以进行dom操作
    ngAfterViewInit() {
        this.createChartBar(this.fcId, this.fcData);
        // 自适应宽度
        this.chartBar.forceFit();
    }
    createChartBar(id, data) {
        this.chartBar = new _antv_g2__WEBPACK_IMPORTED_MODULE_2__["Chart"]({
            container: id,
            forceFit: true,
            height: 300,
            padding: { top: 20, right: 20, bottom: 30, left: 30 }
        });
        this.chartBar.source(data);
        this.chartBar.scale('sales', {
            tickInterval: 20
        });
        this.chartBar.interval().position('year*sales');
        // 渲染柱状图
        this.chartBar.render();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], Fcg2barComponent.prototype, "fcId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], Fcg2barComponent.prototype, "fcData", void 0);
Fcg2barComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fc-g2bar',
        template: __webpack_require__(/*! raw-loader!./fcg2bar.component.html */ "./node_modules/raw-loader/index.js!./src/fccomponents/fcg2bar/fcg2bar.component.html"),
        styles: ["\n    .fc-chart {\n        width: 100%;\n    }\n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Fcg2barComponent);



/***/ }),

/***/ "./src/fccomponents/fcg2line/fcg2line.component.ts":
/*!*********************************************************!*\
  !*** ./src/fccomponents/fcg2line/fcg2line.component.ts ***!
  \*********************************************************/
/*! exports provided: Fcg2linerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fcg2linerComponent", function() { return Fcg2linerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @antv/g2 */ "./node_modules/@antv/g2/build/g2.js");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_antv_g2__WEBPACK_IMPORTED_MODULE_2__);

/*
 * @Author: honghong
 * @Date: 2019-10-14 10:52:47
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-14 17:22:43
 * @Description:
 * @email: 3300536651@qq.com
 */


let Fcg2linerComponent = class Fcg2linerComponent {
    constructor() {
    }
    ngAfterViewInit() {
        this.createChartLine(this.fcId, this.fcData);
    }
    /**
       * 创建多折线图
       * @param containerId
       * @param data
       */
    createChartLine(containerId, data) {
        this.chartLine = new _antv_g2__WEBPACK_IMPORTED_MODULE_2__["Chart"]({
            container: containerId,
            forceFit: true,
            height: 300,
            padding: [100, 20, 30, 45] // 上右下左
        });
        this.chartLine.source(data);
        this.chartLine.tooltip({
            follow: false,
            crosshairs: 'y',
            htmlContent: function htmlContent(title, items) {
                var alias = {
                    download: '当日累计下载量',
                    register: '当日累计注册量',
                    bill: '当日累计成交量'
                };
                var html = '<div class="custom-tooltip">';
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    var color = item.color;
                    var name = alias[item.name];
                    var value = item.value;
                    var domHead = '<div class="custom-tooltip-item" style="border-left-color:' + color + '">';
                    var domName = '<div class="custom-tooltip-item-name">' + name + '</div>';
                    var domValue = '<div class="custom-tooltip-item-value">' + value + '</div>';
                    var domTail = '</div>';
                    html += domHead + domName + domValue + domTail;
                }
                return html + '</div>';
            }
        });
        this.chartLine.axis('date', {
            label: {
                textStyle: {
                    fill: '#aaaaaa'
                }
            }
        });
        this.chartLine.axis('value', {
            label: {
                textStyle: {
                    fill: '#aaaaaa'
                },
                formatter: function formatter(text) {
                    return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
                }
            }
        });
        this.chartLine.legend(false);
        this.chartLine
            .line()
            .position('date*value')
            .color('type');
        this.chartLine.render();
        this.chartLine.showTooltip({
            x: 300 - 20,
            y: 100
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], Fcg2linerComponent.prototype, "fcId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], Fcg2linerComponent.prototype, "fcData", void 0);
Fcg2linerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fc-g2line',
        template: __webpack_require__(/*! raw-loader!./fcg2line.component.html */ "./node_modules/raw-loader/index.js!./src/fccomponents/fcg2line/fcg2line.component.html"),
        styles: ["\n    ::ng-deep  .custom-tooltip {\n        width: 100% !important;\n        height: 10% !important;\n        position: absolute;\n        top: 0px;\n        left: 0px;\n        box-shadow: none!important;\n    }\n    ::ng-deep  .custom-tooltip-item {\n        width: 150px;\n        height: 50px;\n        position: relative;\n        float: left;\n        margin-left: 20px;\n        border-left-style: solid;\n        border-left-width: 5px;\n    }\n    ::ng-deep  .custom-tooltip-item:first-child {\n         margin-left: 0\n    }\n    ::ng-deep  .custom-tooltip-item-name {\n        width: 80%;\n        height: 20px;\n        position: absolute;\n        top: 0px;\n        left: 10px;\n        color: rgba(0, 0, 0, 0.45);\n        font-size: 14px;\n    }\n    ::ng-deep  .custom-tooltip-item-value {\n        width: 80%;\n        height: 30px;\n        position: absolute;\n        bottom: 0px;\n        left: 10px;\n        color: #262626;\n        font-size: 22px;\n    }\n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Fcg2linerComponent);



/***/ }),

/***/ "./src/fccomponents/fcg2minibar/fcg2minibar.component.ts":
/*!***************************************************************!*\
  !*** ./src/fccomponents/fcg2minibar/fcg2minibar.component.ts ***!
  \***************************************************************/
/*! exports provided: Fcg2minibarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fcg2minibarComponent", function() { return Fcg2minibarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @antv/g2 */ "./node_modules/@antv/g2/build/g2.js");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_antv_g2__WEBPACK_IMPORTED_MODULE_2__);

/*
 * @Author: honghong
 * @Date: 2019-10-14 10:50:43
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-14 14:35:23
 * @Description:
 * @email: 3300536651@qq.com
 */


let Fcg2minibarComponent = class Fcg2minibarComponent {
    constructor() {
    }
    ngAfterViewInit() {
        this.createMiniBarChart(this.fcId, this.fcData);
    }
    /**
   * 迷你
   * @param containerId
   * @param data
   * @param sum
   */
    createMiniBarChart(containerId, data, sum) {
        let chart = new _antv_g2__WEBPACK_IMPORTED_MODULE_2__["Chart"]({
            container: containerId,
            forceFit: true,
            height: 35,
            padding: [36, 30, 30, 30]
        });
        chart.source(data);
        chart.legend(false);
        chart.axis(false);
        chart.tooltip({
            type: 'mini'
        });
        chart
            .interval()
            .position('index*value')
            .opacity(0.85)
            .color('#fff');
        // 渲染迷你柱状图
        chart.render();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], Fcg2minibarComponent.prototype, "fcId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], Fcg2minibarComponent.prototype, "fcData", void 0);
Fcg2minibarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fc-g2minibar',
        template: __webpack_require__(/*! raw-loader!./fcg2minibar.component.html */ "./node_modules/raw-loader/index.js!./src/fccomponents/fcg2minibar/fcg2minibar.component.html"),
        styles: [""]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Fcg2minibarComponent);



/***/ }),

/***/ "./src/fccomponents/fcg2pie/fcg2pie.component.ts":
/*!*******************************************************!*\
  !*** ./src/fccomponents/fcg2pie/fcg2pie.component.ts ***!
  \*******************************************************/
/*! exports provided: Fcg2pieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fcg2pieComponent", function() { return Fcg2pieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @antv/g2 */ "./node_modules/@antv/g2/build/g2.js");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_antv_g2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _antv_data_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @antv/data-set */ "./node_modules/@antv/data-set/build/data-set.js");
/* harmony import */ var _antv_data_set__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_antv_data_set__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);

/*
 * @Author: honghong
 * @Date: 2019-10-14 10:52:01
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-14 15:16:37
 * @Description:
 * @email: 3300536651@qq.com
 */




let Fcg2pieComponent = class Fcg2pieComponent {
    constructor() {
    }
    ngAfterViewInit() {
        this.createChartPie();
    }
    createChartPie() {
        let data = [{
                type: '评估中',
                percent: 0.23
            }, {
                type: '设计中',
                percent: 0.28
            }, {
                type: '正在开发',
                percent: 0.30
            }, {
                type: '已上线',
                percent: 0.19
            }];
        let sum = 500;
        let ds = new _antv_data_set__WEBPACK_IMPORTED_MODULE_3___default.a();
        let dv = ds.createView().source(data);
        dv.transform({
            type: 'map',
            callback: function callback(row) {
                let res = sum * row.percent + '';
                row.value = parseInt(res);
                return row;
            }
        });
        var chart = new _antv_g2__WEBPACK_IMPORTED_MODULE_2__["Chart"]({
            container: 'mountNode',
            forceFit: true,
            height: window.innerHeight,
            padding: 'auto'
        });
        chart.source(dv);
        chart.tooltip(false);
        chart.legend({
            position: 'right-center',
            offsetX: -100
        });
        chart.coord('theta', {
            radius: 0.75,
            innerRadius: 0.6
        });
        chart.intervalStack().position('percent').color('type', ['#0a7aca', '#0a9afe', '#4cb9ff', '#8ed1ff']).opacity(1).label('percent', {
            offset: -18,
            textStyle: {
                fill: 'white',
                fontSize: 12,
                shadowBlur: 2,
                shadowColor: 'rgba(0, 0, 0, .45)'
            },
            rotate: 0,
            autoRotate: false,
            formatter: function formatter(text, item) {
                let res = item.point.percent * 100 + '';
                return String(parseInt(res)) + '%';
            }
        });
        chart.guide().html({
            position: ['50%', '50%'],
            html: '<div class="g2-guide-html"><p class="title">项目总计</p><p class="value">500</p></div>'
        });
        chart.on('interval:mouseenter', function (ev) {
            var data = ev.data._origin;
            jquery__WEBPACK_IMPORTED_MODULE_4__(".g2-guide-html").css('opacity', 1);
            jquery__WEBPACK_IMPORTED_MODULE_4__(".g2-guide-html .title").text(data.type);
            jquery__WEBPACK_IMPORTED_MODULE_4__(".g2-guide-html .value").text(data.value);
        });
        chart.on('interval:mouseleave', function () {
            jquery__WEBPACK_IMPORTED_MODULE_4__(".g2-guide-html .title").text('项目总计');
            jquery__WEBPACK_IMPORTED_MODULE_4__(".g2-guide-html .value").text(500);
        });
        chart.render();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], Fcg2pieComponent.prototype, "fcId", void 0);
Fcg2pieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fc-g2pie',
        template: __webpack_require__(/*! raw-loader!./fcg2pie.component.html */ "./node_modules/raw-loader/index.js!./src/fccomponents/fcg2pie/fcg2pie.component.html"),
        styles: [""]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Fcg2pieComponent);



/***/ }),

/***/ "./src/fccomponents/fcg2radar/fcg2radar.component.ts":
/*!***********************************************************!*\
  !*** ./src/fccomponents/fcg2radar/fcg2radar.component.ts ***!
  \***********************************************************/
/*! exports provided: Fcg2radarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fcg2radarComponent", function() { return Fcg2radarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _antv_data_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @antv/data-set */ "./node_modules/@antv/data-set/build/data-set.js");
/* harmony import */ var _antv_data_set__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_antv_data_set__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @antv/g2 */ "./node_modules/@antv/g2/build/g2.js");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_antv_g2__WEBPACK_IMPORTED_MODULE_3__);

/*
 * @Author: honghong
 * @Date: 2019-10-14 10:52:47
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-14 11:12:06
 * @Description:
 * @email: 3300536651@qq.com
 */



let Fcg2radarComponent = class Fcg2radarComponent {
    constructor() {
    }
    ngAfterViewInit() {
        this.createRadarChart('chartRadar', this.fcData);
    }
    /**
     * @description: 绘制雷达图
     * @param {containerId}id
     * @param {data}数据
     */
    createRadarChart(containerId, data) {
        let _DataSet = new _antv_data_set__WEBPACK_IMPORTED_MODULE_2___default.a();
        let DataView = _DataSet.DataSet.DataView;
        this.radarDv = new DataView().source(data);
        this.radarDv.transform({
            type: 'fold',
            fields: ['a', 'b'],
            key: 'user',
            value: 'score' // value字段
        });
        this.chartRadar = new _antv_g2__WEBPACK_IMPORTED_MODULE_3__["Chart"]({
            container: containerId,
            forceFit: true,
            height: window.innerHeight,
            padding: [20, 20, 95, 20]
        });
        this.chartRadar.source(this.radarDv, {
            score: {
                min: 0,
                max: 80
            }
        });
        this.chartRadar.coord('polar', {
            radius: 0.8
        });
        this.chartRadar.axis('item', {
            line: null,
            tickLine: null,
            grid: {
                lineStyle: {
                    lineDash: null
                },
                hideFirstLine: false
            }
        });
        this.chartRadar.axis('score', {
            line: null,
            tickLine: null,
            grid: {
                type: 'polygon',
                lineStyle: {
                    lineDash: null
                }
            }
        });
        this.chartRadar.legend('user', {
            marker: 'circle',
            offset: 30
        });
        this.chartRadar.line().position('item*score').color('user').size(2);
        this.chartRadar.point().position('item*score').color('user').shape('circle').size(4).style({
            stroke: '#fff',
            lineWidth: 1,
            fillOpacity: 1
        });
        this.chartRadar.area().position('item*score').color('user');
        this.chartRadar.render();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], Fcg2radarComponent.prototype, "fcId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], Fcg2radarComponent.prototype, "fcData", void 0);
Fcg2radarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fc-g2radar',
        template: __webpack_require__(/*! raw-loader!./fcg2radar.component.html */ "./node_modules/raw-loader/index.js!./src/fccomponents/fcg2radar/fcg2radar.component.html"),
        styles: [""]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Fcg2radarComponent);



/***/ }),

/***/ "./src/fccomponents/fcimgview/fcimgview.component.less":
/*!*************************************************************!*\
  !*** ./src/fccomponents/fcimgview/fcimgview.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * @Author: honghong\n * @LastEditors: honghong\n * @Description: 图片查看组件的样式\n * @email: 3300536651@qq.com\n * @Date: 2019-04-16 15:57:43\n * @LastEditTime: 2019-04-17 10:45:34\n */\n.imgview-wrap {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  padding-top: 40px;\n}\n.imgview-content {\n  position: relative;\n  overflow: auto;\n  overflow-y: auto;\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n  background-color: #ffffff;\n  border: 2px solid #ddd;\n}\n.imgview-content .imgview-detail {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  left: 0;\n  top: 0;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n  cursor: pointer;\n  max-width: none;\n}\n.imgview-wrap .imgview-toolbar {\n  width: 100%;\n  height: 50px;\n  background-color: #f6f6f6;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 5px;\n  text-align: right;\n}\n.imgview-wrap .toolbar-action {\n  margin-right: 5px;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  display: inline-block;\n  padding: 0;\n  font-size: 18px;\n  border-radius: 50%;\n  color: #ffffff;\n  background-color: #1890ff;\n  border-color: #1890ff;\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);\n  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);\n  text-align: center;\n  outline: none;\n  cursor: pointer;\n}\n.imgview-wrap .toolbar-action:hover {\n  color: #fff;\n  background-color: #40a9ff;\n  border-color: #40a9ff;\n}\n.imgview-wrap .toolbar-action i {\n  font-size: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mY2NvbXBvbmVudHMvZmNpbWd2aWV3L2ZjaW1ndmlldy5jb21wb25lbnQubGVzcyIsIi9BcHBsaWNhdGlvbnMvaG9uZ2hvbmcvZ2l0aHViL2ZjLWFuZ3VsYXIvc3JjL2ZjY29tcG9uZW50cy9mY2ltZ3ZpZXcvZmNpbWd2aWV3LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0VBT0U7QUNDRjtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRENGO0FDRUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QURBRjtBQ0dBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBSUEsa0NBQUE7RUFBQSwwQkFBQTtFQUFBLGtEQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QURERjtBQ0lBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QURGRjtBQ0tBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5Q0FBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBREhGO0FDTUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBREpGO0FDT0E7RUFDRSxlQUFBO0FETEYiLCJmaWxlIjoic3JjL2ZjY29tcG9uZW50cy9mY2ltZ3ZpZXcvZmNpbWd2aWV3LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBBdXRob3I6IGhvbmdob25nXG4gKiBATGFzdEVkaXRvcnM6IGhvbmdob25nXG4gKiBARGVzY3JpcHRpb246IOWbvueJh+afpeeci+e7hOS7tueahOagt+W8j1xuICogQGVtYWlsOiAzMzAwNTM2NjUxQHFxLmNvbVxuICogQERhdGU6IDIwMTktMDQtMTYgMTU6NTc6NDNcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMTktMDQtMTcgMTA6NDU6MzRcbiAqL1xuLmltZ3ZpZXctd3JhcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4uaW1ndmlldy1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcbn1cbi5pbWd2aWV3LWNvbnRlbnQgLmltZ3ZpZXctZGV0YWlsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjNzO1xuICAtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gMC4zcztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWF4LXdpZHRoOiBub25lO1xufVxuLmltZ3ZpZXctd3JhcCAuaW1ndmlldy10b29sYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uaW1ndmlldy13cmFwIC50b29sYmFyLWFjdGlvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODkwZmY7XG4gIGJvcmRlci1jb2xvcjogIzE4OTBmZjtcbiAgdGV4dC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA0NSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmltZ3ZpZXctd3JhcCAudG9vbGJhci1hY3Rpb246aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwYTlmZjtcbiAgYm9yZGVyLWNvbG9yOiAjNDBhOWZmO1xufVxuLmltZ3ZpZXctd3JhcCAudG9vbGJhci1hY3Rpb24gaSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbiIsIi8qXG4gKiBAQXV0aG9yOiBob25naG9uZ1xuICogQExhc3RFZGl0b3JzOiBob25naG9uZ1xuICogQERlc2NyaXB0aW9uOiDlm77niYfmn6XnnIvnu4Tku7bnmoTmoLflvI9cbiAqIEBlbWFpbDogMzMwMDUzNjY1MUBxcS5jb21cbiAqIEBEYXRlOiAyMDE5LTA0LTE2IDE1OjU3OjQzXG4gKiBATGFzdEVkaXRUaW1lOiAyMDE5LTA0LTE3IDEwOjQ1OjM0XG4gKi9cbi5pbWd2aWV3LXdyYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG4uaW1ndmlldy1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcbn1cblxuLmltZ3ZpZXctY29udGVudCAuaW1ndmlldy1kZXRhaWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSAwLjNzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXgtd2lkdGg6IG5vbmU7XG59XG5cbi5pbWd2aWV3LXdyYXAgLmltZ3ZpZXctdG9vbGJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uaW1ndmlldy13cmFwIC50b29sYmFyLWFjdGlvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODkwZmY7XG4gIGJvcmRlci1jb2xvcjogIzE4OTBmZjtcbiAgdGV4dC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgYm94LXNoYWRvdzogMCAycHggMCByZ2JhKDAsIDAsIDAsIC4wNDUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmltZ3ZpZXctd3JhcCAudG9vbGJhci1hY3Rpb246aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwYTlmZjtcbiAgYm9yZGVyLWNvbG9yOiAjNDBhOWZmO1xufVxuXG4uaW1ndmlldy13cmFwIC50b29sYmFyLWFjdGlvbiBpIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/fccomponents/fcimgview/fcimgview.component.ts":
/*!***********************************************************!*\
  !*** ./src/fccomponents/fcimgview/fcimgview.component.ts ***!
  \***********************************************************/
/*! exports provided: FcimgviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcimgviewComponent", function() { return FcimgviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 图片查看
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-06-19 16:30:58
 */


let FcimgviewComponent = class FcimgviewComponent {
    constructor(el, renderer, eventManager) {
        this.el = el;
        this.renderer = renderer;
        this.eventManager = eventManager;
        // 图片的路径
        this.imgSrc = 'assets/image/noimg.jpeg';
        this.hidden = false;
    }
    ngOnInit() {
        this.eventManager.addGlobalEventListener('window', 'keyup.esc', () => {
            this.styleJsonStr = {};
            this.hidden = false;
        });
    }
    ngOnChanges() {
        if (this.imgSrc === undefined || this.imgSrc === null || this.imgSrc === '') {
            this.imgSrc = 'assets/img/imgview1.jpg';
            this.renderer.setStyle(this.imgDetailRef.nativeElement, 'height', `100%`);
        }
    }
    /**
     * 放大
     */
    enlarge(event) {
        // 获取图片的宽
        this.width = this.imgDetailRef.nativeElement.offsetWidth + 300 + '';
        // 获取图片的高
        this.height = this.imgDetailRef.nativeElement.offsetHeight + 300 + '';
        this.renderer.setStyle(this.imgDetailRef.nativeElement, 'width', `${this.width}px`);
        this.renderer.setStyle(this.imgDetailRef.nativeElement, 'height', `auto`);
    }
    /**
     * 缩小
     */
    narrow(event) {
        // 获取图片的宽
        this.width = this.imgDetailRef.nativeElement.offsetWidth - 100 + '';
        // 获取图片的高
        this.height = this.imgDetailRef.nativeElement.offsetHeight - 100 + '';
        this.renderer.setStyle(this.imgDetailRef.nativeElement, 'width', `${this.width}px`);
        this.renderer.setStyle(this.imgDetailRef.nativeElement, 'height', `auto`);
    }
    qp(event) {
        // 获取图片的宽
        this.hidden = true;
        this.styleJsonStr = {
            color: '#FBFBFF',
            position: 'fixed',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            margin: '10px auto',
            flex: 1
        };
    }
    /**
     * 旋转
     */
    rotate(event) { }
    /**
     * 向左移动
     */
    moveLeft(event) { }
    /**
     * 向右移动
     */
    moveRight(event) { }
    /**
     * 恢复
     */
    recovery(event) {
        this.renderer.setStyle(this.imgDetailRef.nativeElement, 'width', `100%`);
        this.renderer.setStyle(this.imgDetailRef.nativeElement, 'height', `100%`);
        this.renderer.setStyle(this.imgDetailRef.nativeElement, 'marginLeft', `0`);
        this.renderer.setStyle(this.imgDetailRef.nativeElement, 'marginTop', `0`);
    }
    /**
     * 用户开始拖动元素时触发
     * @param event
     */
    dargStart(event) {
        // this.x1 = event.clientX
        // this.y1 = event.clientY
        console.log('dragStart===>');
    }
    /**
     * 元素正在拖动时触发
     * @param $event
     */
    drag(event) {
        // this.x2 = event.clientX
        // this.y2 = event.clientY
        // var direction = this.direction(this.x1, this.y1, this.x2, this.y2)
        // console.log('drag拖拽过程中')
        // if (direction.directionX === 'left') {
        //   this.renderer.setStyle(this.imgDetailRef.nativeElement, 'marginLeft', `-${direction.spacingX}px`)
        // }
        // if (direction.directionX === 'right') {
        //   this.renderer.setStyle(this.imgDetailRef.nativeElement, 'marginLeft', `${direction.spacingX}px`)
        // }
        // if (direction.directionX === 'top') {
        //   this.renderer.setStyle(this.imgDetailRef.nativeElement, 'marginTop', `-${direction.spacingX}px`)
        // }
        // if (direction.directionX === 'bottom') {
        //   this.renderer.setStyle(this.imgDetailRef.nativeElement, 'marginTop', `${direction.spacingX}px`)
        // }
        // // 移动图片距离后重置x1,y1  坐标
        // this.x1 = event.clientX
        // this.y1 = event.clientY
    }
    /**
     * 用户完成元素拖动后触发
     * @param $event
     */
    dragEnd(event) {
        // this.x2 = event.clientX
        // this.y2 = event.clientY
        // this.direction(this.x1, this.y1, this.x2, this.y2)
        // console.log('dragEnd====>')
    }
    /**
     * 如何判断用户是想往左还是往右拖拽或者是滚动，用户在开始拖拽时缓存坐标点x1,y1，在拖拽过程中实时获取鼠标拖拽处的x2,y2坐标点，
     * @param x1 开始拖拽时的横坐标
     * @param y1 开始拖拽时的纵坐标
     * @param x2 拖拽过程中的横坐标
     * @param y2
     */
    direction(x1, y1, x2, y2) {
        let directionObj = {
            directionX: '',
            directionY: '',
            spacingX: 0,
            spacingY: 0
        };
        // 判断左右方向
        directionObj.directionX = x2 - x1 < 0 ? 'left' : 'right';
        // 判断上下方向
        directionObj.directionY = y2 - y1 > 0 ? 'bottom' : 'top';
        // 计算横向移动距离
        directionObj.spacingX = Math.abs(x1 - x2);
        // 计算纵向移动距离
        directionObj.spacingX = Math.abs(y1 - y2);
        return directionObj;
    }
};
FcimgviewComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["EventManager"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FcimgviewComponent.prototype, "imgSrc", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imgDetail', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], FcimgviewComponent.prototype, "imgDetailRef", void 0);
FcimgviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fc-imgview',
        template: __webpack_require__(/*! raw-loader!./fcimgview.component.html */ "./node_modules/raw-loader/index.js!./src/fccomponents/fcimgview/fcimgview.component.html"),
        styles: [__webpack_require__(/*! ./fcimgview.component.less */ "./src/fccomponents/fcimgview/fcimgview.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["EventManager"]])
], FcimgviewComponent);



/***/ }),

/***/ "./src/fccomponents/fcverifycode/fcverifycode.component.ts":
/*!*****************************************************************!*\
  !*** ./src/fccomponents/fcverifycode/fcverifycode.component.ts ***!
  \*****************************************************************/
/*! exports provided: Fcverifycode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fcverifycode", function() { return Fcverifycode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/*
 * @Author: honghong
 * @Date: 2019-10-17 09:43:45
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-18 14:10:50
 * @Description:
 * @email: 3300536651@qq.com
 */
let Fcverifycode = class Fcverifycode {
    /*
     * @Author: honghong
     * @Date: 2019-10-17 09:43:45
     * @LastEditors: honghong
     * @LastEditTime: 2019-10-18 14:10:50
     * @Description:
     * @email: 3300536651@qq.com
     */
    constructor() {
        // 显示错误
        this.fcShowError = 'Y';
    }
    Constructor() {
    }
    ngOnInit() {
        this.draw([]);
        console.log(this.validVerifyCode);
    }
    //生成并渲染出验证码图形
    draw(show_num) {
        let elem = this.canvasRef.nativeElement;
        console.dir(elem);
        // let canvas_width = elem.offsetWidth;
        // let canvas_height = elem.offsetHeight;
        let canvas_width = 100;
        let canvas_height = 30;
        let canvas = elem; //获取到canvas的对象，演员
        let context = canvas.getContext("2d"); //获取到canvas画图的环境，演员表演的舞台
        canvas.width = canvas_width;
        canvas.height = canvas_height;
        let sCode = "a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
        let aCode = sCode.split(",");
        let aLength = aCode.length; //获取到数组的长度
        for (let i = 0; i < 4; i++) { //这里的for循环可以控制验证码位数（如果想显示6位数，4改成6即可）
            let j = Math.floor(Math.random() * aLength); //获取到随机的索引值
            // var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
            let deg = Math.random() - 0.5; //产生一个随机弧度
            let txt = aCode[j]; //得到随机的一个内容
            show_num[i] = txt.toLowerCase();
            let x = 10 + i * 20; //文字在canvas上的x坐标
            let y = 20 + Math.random() * 8; //文字在canvas上的y坐标
            context.font = "bold 23px 微软雅黑";
            context.translate(x, y);
            context.rotate(deg);
            context.fillStyle = this.randomColor();
            context.fillText(txt, 0, 0);
            context.rotate(-deg);
            context.translate(-x, -y);
        }
        for (let i = 0; i <= 5; i++) { //验证码上显示线条
            context.strokeStyle = this.randomColor();
            context.beginPath();
            context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
            context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
            context.stroke();
        }
        for (let i = 0; i <= 30; i++) { //验证码上显示小点
            context.strokeStyle = this.randomColor();
            context.beginPath();
            let x = Math.random() * canvas_width;
            let y = Math.random() * canvas_height;
            context.moveTo(x, y);
            context.lineTo(x + 1, y + 1);
            context.stroke();
        }
        this.validVerifyCode = show_num.join('');
    }
    //得到随机的颜色值
    randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('verifyCode', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], Fcverifycode.prototype, "canvasRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], Fcverifycode.prototype, "fcCode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], Fcverifycode.prototype, "fcShowError", void 0);
Fcverifycode = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fc-verifycode',
        template: __webpack_require__(/*! raw-loader!./fcverifycode.component.html */ "./node_modules/raw-loader/index.js!./src/fccomponents/fcverifycode/fcverifycode.component.html"),
        styles: ["\n        .fc-verifycode {\n            width: 100%;\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n            position: relative;\n        }\n        .fc-verifycode input {\n            width: calc(100% - 110px);\n        }\n        .fc-verifycode canvas{\n            border: 1px solid #d9d9d9;\n            border-radius: 4px;\n            cursor: pointer;\n        }\n        .fc-verifycode  .fc-form-error {\n            position: absolute;\n            left: 0;\n            top: 32px;\n            font-size: 12px;\n            color: #f5222d;\n        }\n        .fc-verifycode  .fc-form-error input{\n            background-color: #fff;\n            border-color: #f5222d;\n        }\n        "]
    })
], Fcverifycode);



/***/ }),

/***/ "./src/fccomponents/index.ts":
/*!***********************************!*\
  !*** ./src/fccomponents/index.ts ***!
  \***********************************/
/*! exports provided: FccomponentModule, FcimgviewComponent, Fcg2radarComponent, Fcg2barComponent, Fcg2linerComponent, Fcg2minibarComponent, Fcg2pieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fccomponent_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fccomponent.module */ "./src/fccomponents/fccomponent.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FccomponentModule", function() { return _fccomponent_module__WEBPACK_IMPORTED_MODULE_0__["FccomponentModule"]; });

/* harmony import */ var _fcimgview_fcimgview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fcimgview/fcimgview.component */ "./src/fccomponents/fcimgview/fcimgview.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FcimgviewComponent", function() { return _fcimgview_fcimgview_component__WEBPACK_IMPORTED_MODULE_1__["FcimgviewComponent"]; });

/* harmony import */ var _fcg2radar_fcg2radar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fcg2radar/fcg2radar.component */ "./src/fccomponents/fcg2radar/fcg2radar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fcg2radarComponent", function() { return _fcg2radar_fcg2radar_component__WEBPACK_IMPORTED_MODULE_2__["Fcg2radarComponent"]; });

/* harmony import */ var _fcg2bar_fcg2bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fcg2bar/fcg2bar.component */ "./src/fccomponents/fcg2bar/fcg2bar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fcg2barComponent", function() { return _fcg2bar_fcg2bar_component__WEBPACK_IMPORTED_MODULE_3__["Fcg2barComponent"]; });

/* harmony import */ var _fcg2line_fcg2line_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fcg2line/fcg2line.component */ "./src/fccomponents/fcg2line/fcg2line.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fcg2linerComponent", function() { return _fcg2line_fcg2line_component__WEBPACK_IMPORTED_MODULE_4__["Fcg2linerComponent"]; });

/* harmony import */ var _fcg2minibar_fcg2minibar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fcg2minibar/fcg2minibar.component */ "./src/fccomponents/fcg2minibar/fcg2minibar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fcg2minibarComponent", function() { return _fcg2minibar_fcg2minibar_component__WEBPACK_IMPORTED_MODULE_5__["Fcg2minibarComponent"]; });

/* harmony import */ var _fcg2pie_fcg2pie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fcg2pie/fcg2pie.component */ "./src/fccomponents/fcg2pie/fcg2pie.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fcg2pieComponent", function() { return _fcg2pie_fcg2pie_component__WEBPACK_IMPORTED_MODULE_6__["Fcg2pieComponent"]; });

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 导出fccomponent模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-10-14 15:10:13
 */









/***/ }),

/***/ "./src/fccore/fccore.module.ts":
/*!*************************************!*\
  !*** ./src/fccore/fccore.module.ts ***!
  \*************************************/
/*! exports provided: FccoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FccoreModule", function() { return FccoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _service_dao_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/dao.service */ "./src/fccore/service/dao.service.ts");
/* harmony import */ var _service_log_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/log.service */ "./src/fccore/service/log.service.ts");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/common.service */ "./src/fccore/service/common.service.ts");
/* harmony import */ var _service_cache_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/cache.service */ "./src/fccore/service/cache.service.ts");
/* harmony import */ var _service_message_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/message.service */ "./src/fccore/service/message.service.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 平台核心模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 14:49:10
 */












Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3___default.a);
let FccoreModule = class FccoreModule {
};
FccoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
        ],
        declarations: [],
        providers: [
            _service_dao_service__WEBPACK_IMPORTED_MODULE_8__["DaoService"],
            _service_log_service__WEBPACK_IMPORTED_MODULE_9__["LogService"],
            _service_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
            _service_cache_service__WEBPACK_IMPORTED_MODULE_11__["CacheService"],
            _service_message_service__WEBPACK_IMPORTED_MODULE_12__["MessageService"]
        ],
        bootstrap: []
    })
], FccoreModule);



/***/ }),

/***/ "./src/fccore/service/cache.service.ts":
/*!*********************************************!*\
  !*** ./src/fccore/service/cache.service.ts ***!
  \*********************************************/
/*! exports provided: CacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheService", function() { return CacheService; });
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 缓存服务
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 11:41:24
 */
class CacheService {
    static set(key, value) {
        if (value instanceof Object) {
            window.localStorage.setItem(key, JSON.stringify(value));
        }
        else {
            window.localStorage.setItem(key, value);
        }
    }
    ;
    static get(key, defaultValue) {
        var v = window.localStorage.getItem(key);
        if (v === null) {
            return defaultValue ? defaultValue : null;
        }
        else {
            try {
                return JSON.parse(v);
            }
            catch (e) {
                return v;
            }
        }
    }
    ;
    static clear() {
        window.localStorage.clear();
    }
    ;
    static clearByKey(key) {
        window.localStorage.removeItem(key);
    }
    ;
    static setS(key, value) {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    }
    ;
    static getS(key, defaultValue) {
        var obj = window.sessionStorage.getItem(key);
        if (obj === null) {
            return defaultValue ? defaultValue : null;
        }
        else {
            try {
                return JSON.parse(obj);
            }
            catch (e) {
                return obj;
            }
        }
    }
    ;
    static clearS() {
        window.sessionStorage.clear();
    }
    ;
    static clearSByKey(key) {
        window.sessionStorage.removeItem(key);
    }
    ;
}


/***/ }),

/***/ "./src/fccore/service/common.service.ts":
/*!**********************************************!*\
  !*** ./src/fccore/service/common.service.ts ***!
  \**********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 公共方法
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 11:42:53
 */

let CommonService = class CommonService {
    constructor() { }
    /**
     * 发生事件
     * @param actCode 事件名称
     */
    static event(eventName, param) {
        this.eventEmit.emit({
            eventName: eventName,
            param: param
        });
    }
    /**
     * 订阅事件
     * @param 获取
     * @param 方法
     */
    static subscribe(actCode, func) {
        return this.eventEmit.subscribe(function (value) {
            if (value.eventName === actCode) {
                return func(value);
            }
            else {
                return func(null);
            }
        });
    }
};
CommonService.eventEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CommonService);



/***/ }),

/***/ "./src/fccore/service/dao.service.ts":
/*!*******************************************!*\
  !*** ./src/fccore/service/dao.service.ts ***!
  \*******************************************/
/*! exports provided: FCCONFIG, DaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FCCONFIG", function() { return FCCONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaoService", function() { return DaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.dev */ "./src/environments/environment.dev.ts");
/* harmony import */ var _cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cache.service */ "./src/fccore/service/cache.service.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common.service */ "./src/fccore/service/common.service.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 前后端通道
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 11:43:25
 */





const FCCONFIG = src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_3__["environment"];
let DaoService = class DaoService {
    constructor(http) {
        this.FCCONFIG = src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_3__["environment"];
        this.http = http;
        this.cacheService = _cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"];
        this.commonService = _common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"];
    }
};
DaoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], DaoService);



/***/ }),

/***/ "./src/fccore/service/log.service.ts":
/*!*******************************************!*\
  !*** ./src/fccore/service/log.service.ts ***!
  \*******************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cache.service */ "./src/fccore/service/cache.service.ts");
/* harmony import */ var _dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dao.service */ "./src/fccore/service/dao.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 打印服务,上线环境自动关闭打印
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 11:43:44
 */




const isDev = !src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production;
let LogService = class LogService {
    constructor(daoService, cacheService) {
        this.daoService = daoService;
        this.cacheService = cacheService;
    }
    static debug(msg, describtion) {
        if (isDev) {
            console.log(msg, describtion);
        }
    }
    info(msg) {
        if (isDev) {
            console.log(msg);
        }
    }
    error(msg) {
        throw new Error(msg);
    }
};
LogService.ctorParameters = () => [
    { type: _dao_service__WEBPACK_IMPORTED_MODULE_3__["DaoService"] },
    { type: _cache_service__WEBPACK_IMPORTED_MODULE_2__["CacheService"] }
];
LogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dao_service__WEBPACK_IMPORTED_MODULE_3__["DaoService"], _cache_service__WEBPACK_IMPORTED_MODULE_2__["CacheService"]])
], LogService);



/***/ }),

/***/ "./src/fccore/service/message.service.ts":
/*!***********************************************!*\
  !*** ./src/fccore/service/message.service.ts ***!
  \***********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description:消息服务
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-10-16 17:42:39
 */
class MessageService {
    constructor() {
    }
}


/***/ }),

/***/ "./src/fccore/service/user.service.ts":
/*!********************************************!*\
  !*** ./src/fccore/service/user.service.ts ***!
  \********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 用户服务、路由守卫
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 11:44:14
 */


// @Injectable() 装饰器会接受该服务的元数据对象
let UserService = class UserService {
    constructor(router) {
        this.router = router;
    }
    /**
     *
     * @param route
     * @param state
     */
    canActivate(route, state) {
        return true;
    }
    /**
     * @description 系统登录
     * @param userId 用户编码
     * @param password 用户密码
     */
    login(userId, password) {
        return;
    }
};
UserService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UserService);



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grapecity/spread-sheets */ "./node_modules/@grapecity/spread-sheets/index.js");
/* harmony import */ var _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment_dev__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment.dev */ "./src/environments/environment.dev.ts");
/*
 * @Author: honghong
 * @Date: 2019-10-11 09:17:21
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-11 15:26:56
 * @Description:
 * @email: 3300536651@qq.com
 */





_grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_2__["Spread"].Sheets.LicenseKey = ''; // 正式环境需要购买
if (_environments_environment_dev__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/shared/forbidden-name.directive.ts":
/*!************************************************!*\
  !*** ./src/shared/forbidden-name.directive.ts ***!
  \************************************************/
/*! exports provided: forbiddenNameValidator, ForbiddenValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forbiddenNameValidator", function() { return forbiddenNameValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenValidatorDirective", function() { return ForbiddenValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

var ForbiddenValidatorDirective_1;


function forbiddenNameValidator(reg) {
    return (control) => {
        if (control.value && control.value.length === 4) {
            const forbidden = !reg.test(control.value); // 用于检测一个字符串是否匹配某个模式
            return forbidden ? { 'fcVerifyCodeName': { value: control.value } } : null;
        }
    };
}
let ForbiddenValidatorDirective = ForbiddenValidatorDirective_1 = class ForbiddenValidatorDirective {
    /**
     * 验证码是否输入正确
     * @param control
     */
    validate(control) {
        // 执行对大小写不敏感的匹配
        console.log(forbiddenNameValidator(new RegExp(this.fcVerifyCodeName, 'i'))(control), 'result');
        return this.fcVerifyCodeName ? forbiddenNameValidator(new RegExp(this.fcVerifyCodeName, 'i'))(control)
            : null;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('fcVerifyCodeName'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ForbiddenValidatorDirective.prototype, "fcVerifyCodeName", void 0);
ForbiddenValidatorDirective = ForbiddenValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[fcVerifyCodeName]',
        providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: ForbiddenValidatorDirective_1, multi: true }]
    })
], ForbiddenValidatorDirective);



/***/ }),

/***/ "./src/shared/index.ts":
/*!*****************************!*\
  !*** ./src/shared/index.ts ***!
  \*****************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "./src/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });




/***/ }),

/***/ "./src/shared/shared.module.ts":
/*!*************************************!*\
  !*** ./src/shared/shared.module.ts ***!
  \*************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _forbidden_name_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forbidden-name.directive */ "./src/shared/forbidden-name.directive.ts");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_mock */ "./_mock/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 共享模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-19 10:08:26
 * @LastEditTime: 2019-04-19 10:12:39
 */







// 只对开发环境有效


const MOCK_MODULES = !_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production ? [{ data: _mock__WEBPACK_IMPORTED_MODULE_7__ }] : [];
let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
        ],
        declarations: [
            _forbidden_name_directive__WEBPACK_IMPORTED_MODULE_6__["ForbiddenValidatorDirective"],
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
            _forbidden_name_directive__WEBPACK_IMPORTED_MODULE_6__["ForbiddenValidatorDirective"]
        ],
    })
], SharedModule);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/honghong/github/fc-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map