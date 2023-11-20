var niw;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./src/Project/project-form.ts ***!
  \*************************************/

class Project {
    static onLoad(executionContext) {
        var _a, _b;
        this.formContext = executionContext.getFormContext();
        let desc = (_b = (_a = this.formContext.getAttribute("jpc_name")) === null || _a === void 0 ? void 0 : _a.getValue()) === null || _b === void 0 ? void 0 : _b.toString();
        console.log("project");
    }
}

niw = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=project-form.js.map