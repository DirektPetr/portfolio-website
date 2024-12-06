"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-updater-roll";
exports.ids = ["vendor-chunks/tsparticles-updater-roll"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-updater-roll/esm/Options/Classes/Roll.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles-updater-roll/esm/Options/Classes/Roll.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Roll: () => (/* binding */ Roll)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Options/Classes/OptionsColor.js\");\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n/* harmony import */ var _RollLight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RollLight */ \"(ssr)/./node_modules/tsparticles-updater-roll/esm/Options/Classes/RollLight.js\");\n\n\nclass Roll {\n    constructor() {\n        this.darken = new _RollLight__WEBPACK_IMPORTED_MODULE_0__.RollLight();\n        this.enable = false;\n        this.enlighten = new _RollLight__WEBPACK_IMPORTED_MODULE_0__.RollLight();\n        this.mode = \"vertical\";\n        this.speed = 25;\n    }\n    load(data) {\n        if (!data) {\n            return;\n        }\n        if (data.backColor !== undefined) {\n            this.backColor = tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__.OptionsColor.create(this.backColor, data.backColor);\n        }\n        this.darken.load(data.darken);\n        if (data.enable !== undefined) {\n            this.enable = data.enable;\n        }\n        this.enlighten.load(data.enlighten);\n        if (data.mode !== undefined) {\n            this.mode = data.mode;\n        }\n        if (data.speed !== undefined) {\n            this.speed = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__.setRangeValue)(data.speed);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1yb2xsL2VzbS9PcHRpb25zL0NsYXNzZXMvUm9sbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtFO0FBQzFCO0FBQ2pDO0FBQ1A7QUFDQSwwQkFBMEIsaURBQVM7QUFDbkM7QUFDQSw2QkFBNkIsaURBQVM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw0REFBWTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpRUFBYTtBQUN0QztBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xNV9wb3J0Zm9saW9fbmV4dF90cy8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy11cGRhdGVyLXJvbGwvZXNtL09wdGlvbnMvQ2xhc3Nlcy9Sb2xsLmpzP2NkNGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3B0aW9uc0NvbG9yLCBzZXRSYW5nZVZhbHVlLCB9IGZyb20gXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIjtcbmltcG9ydCB7IFJvbGxMaWdodCB9IGZyb20gXCIuL1JvbGxMaWdodFwiO1xuZXhwb3J0IGNsYXNzIFJvbGwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhcmtlbiA9IG5ldyBSb2xsTGlnaHQoKTtcbiAgICAgICAgdGhpcy5lbmFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbmxpZ2h0ZW4gPSBuZXcgUm9sbExpZ2h0KCk7XG4gICAgICAgIHRoaXMubW9kZSA9IFwidmVydGljYWxcIjtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDI1O1xuICAgIH1cbiAgICBsb2FkKGRhdGEpIHtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEuYmFja0NvbG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYmFja0NvbG9yID0gT3B0aW9uc0NvbG9yLmNyZWF0ZSh0aGlzLmJhY2tDb2xvciwgZGF0YS5iYWNrQ29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGFya2VuLmxvYWQoZGF0YS5kYXJrZW4pO1xuICAgICAgICBpZiAoZGF0YS5lbmFibGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGUgPSBkYXRhLmVuYWJsZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVubGlnaHRlbi5sb2FkKGRhdGEuZW5saWdodGVuKTtcbiAgICAgICAgaWYgKGRhdGEubW9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGUgPSBkYXRhLm1vZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEuc3BlZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IHNldFJhbmdlVmFsdWUoZGF0YS5zcGVlZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-roll/esm/Options/Classes/Roll.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-roll/esm/Options/Classes/RollLight.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles-updater-roll/esm/Options/Classes/RollLight.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RollLight: () => (/* binding */ RollLight)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n\nclass RollLight {\n    constructor() {\n        this.enable = false;\n        this.value = 0;\n    }\n    load(data) {\n        if (!data) {\n            return;\n        }\n        if (data.enable !== undefined) {\n            this.enable = data.enable;\n        }\n        if (data.value !== undefined) {\n            this.value = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.setRangeValue)(data.value);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1yb2xsL2VzbS9PcHRpb25zL0NsYXNzZXMvUm9sbExpZ2h0LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW1EO0FBQzVDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlFQUFhO0FBQ3RDO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLzE1X3BvcnRmb2xpb19uZXh0X3RzLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXVwZGF0ZXItcm9sbC9lc20vT3B0aW9ucy9DbGFzc2VzL1JvbGxMaWdodC5qcz9jNWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNldFJhbmdlVmFsdWUgfSBmcm9tIFwidHNwYXJ0aWNsZXMtZW5naW5lXCI7XG5leHBvcnQgY2xhc3MgUm9sbExpZ2h0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbmFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IDA7XG4gICAgfVxuICAgIGxvYWQoZGF0YSkge1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5lbmFibGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGUgPSBkYXRhLmVuYWJsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gc2V0UmFuZ2VWYWx1ZShkYXRhLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-roll/esm/Options/Classes/RollLight.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-roll/esm/RollUpdater.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles-updater-roll/esm/RollUpdater.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RollUpdater: () => (/* binding */ RollUpdater)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"(ssr)/./node_modules/tsparticles-updater-roll/esm/Utils.js\");\n/* harmony import */ var _Options_Classes_Roll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options/Classes/Roll */ \"(ssr)/./node_modules/tsparticles-updater-roll/esm/Options/Classes/Roll.js\");\n\n\nclass RollUpdater {\n    getTransformValues(particle) {\n        const roll = particle.roll?.enable && particle.roll, rollHorizontal = roll && roll.horizontal, rollVertical = roll && roll.vertical;\n        return {\n            a: rollHorizontal ? Math.cos(roll.angle) : undefined,\n            d: rollVertical ? Math.sin(roll.angle) : undefined,\n        };\n    }\n    init(particle) {\n        (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.initParticle)(particle);\n    }\n    isEnabled(particle) {\n        const roll = particle.options.roll;\n        return !particle.destroyed && !particle.spawning && !!roll?.enable;\n    }\n    loadOptions(options, ...sources) {\n        if (!options.roll) {\n            options.roll = new _Options_Classes_Roll__WEBPACK_IMPORTED_MODULE_1__.Roll();\n        }\n        for (const source of sources) {\n            options.roll.load(source?.roll);\n        }\n    }\n    update(particle, delta) {\n        if (!this.isEnabled(particle)) {\n            return;\n        }\n        (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.updateRoll)(particle, delta);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1yb2xsL2VzbS9Sb2xsVXBkYXRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUQ7QUFDTDtBQUN2QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFZO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHVEQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQVU7QUFDbEI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLzE1X3BvcnRmb2xpb19uZXh0X3RzLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXVwZGF0ZXItcm9sbC9lc20vUm9sbFVwZGF0ZXIuanM/Mzk1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0UGFydGljbGUsIHVwZGF0ZVJvbGwgfSBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IHsgUm9sbCB9IGZyb20gXCIuL09wdGlvbnMvQ2xhc3Nlcy9Sb2xsXCI7XG5leHBvcnQgY2xhc3MgUm9sbFVwZGF0ZXIge1xuICAgIGdldFRyYW5zZm9ybVZhbHVlcyhwYXJ0aWNsZSkge1xuICAgICAgICBjb25zdCByb2xsID0gcGFydGljbGUucm9sbD8uZW5hYmxlICYmIHBhcnRpY2xlLnJvbGwsIHJvbGxIb3Jpem9udGFsID0gcm9sbCAmJiByb2xsLmhvcml6b250YWwsIHJvbGxWZXJ0aWNhbCA9IHJvbGwgJiYgcm9sbC52ZXJ0aWNhbDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGE6IHJvbGxIb3Jpem9udGFsID8gTWF0aC5jb3Mocm9sbC5hbmdsZSkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkOiByb2xsVmVydGljYWwgPyBNYXRoLnNpbihyb2xsLmFuZ2xlKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaW5pdChwYXJ0aWNsZSkge1xuICAgICAgICBpbml0UGFydGljbGUocGFydGljbGUpO1xuICAgIH1cbiAgICBpc0VuYWJsZWQocGFydGljbGUpIHtcbiAgICAgICAgY29uc3Qgcm9sbCA9IHBhcnRpY2xlLm9wdGlvbnMucm9sbDtcbiAgICAgICAgcmV0dXJuICFwYXJ0aWNsZS5kZXN0cm95ZWQgJiYgIXBhcnRpY2xlLnNwYXduaW5nICYmICEhcm9sbD8uZW5hYmxlO1xuICAgIH1cbiAgICBsb2FkT3B0aW9ucyhvcHRpb25zLCAuLi5zb3VyY2VzKSB7XG4gICAgICAgIGlmICghb3B0aW9ucy5yb2xsKSB7XG4gICAgICAgICAgICBvcHRpb25zLnJvbGwgPSBuZXcgUm9sbCgpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3Qgc291cmNlIG9mIHNvdXJjZXMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMucm9sbC5sb2FkKHNvdXJjZT8ucm9sbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKHBhcnRpY2xlLCBkZWx0YSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNFbmFibGVkKHBhcnRpY2xlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZVJvbGwocGFydGljbGUsIGRlbHRhKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-roll/esm/RollUpdater.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-roll/esm/Utils.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles-updater-roll/esm/Utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initParticle: () => (/* binding */ initParticle),\n/* harmony export */   updateRoll: () => (/* binding */ updateRoll)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/ColorUtils.js\");\n\nfunction initParticle(particle) {\n    const rollOpt = particle.options.roll;\n    if (!rollOpt?.enable) {\n        particle.roll = {\n            enable: false,\n            horizontal: false,\n            vertical: false,\n            angle: 0,\n            speed: 0,\n        };\n        return;\n    }\n    particle.roll = {\n        enable: rollOpt.enable,\n        horizontal: rollOpt.mode === \"horizontal\" || rollOpt.mode === \"both\",\n        vertical: rollOpt.mode === \"vertical\" || rollOpt.mode === \"both\",\n        angle: (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRandom)() * Math.PI * 2,\n        speed: (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(rollOpt.speed) / 360,\n    };\n    if (rollOpt.backColor) {\n        particle.backColor = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__.rangeColorToHsl)(rollOpt.backColor);\n    }\n    else if (rollOpt.darken.enable && rollOpt.enlighten.enable) {\n        const alterType = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRandom)() >= 0.5 ? \"darken\" : \"enlighten\";\n        particle.roll.alter = {\n            type: alterType,\n            value: (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(alterType === \"darken\" ? rollOpt.darken.value : rollOpt.enlighten.value),\n        };\n    }\n    else if (rollOpt.darken.enable) {\n        particle.roll.alter = {\n            type: \"darken\",\n            value: (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(rollOpt.darken.value),\n        };\n    }\n    else if (rollOpt.enlighten.enable) {\n        particle.roll.alter = {\n            type: \"enlighten\",\n            value: (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(rollOpt.enlighten.value),\n        };\n    }\n}\nfunction updateRoll(particle, delta) {\n    const roll = particle.options.roll, data = particle.roll;\n    if (!data || !roll?.enable) {\n        return;\n    }\n    const speed = data.speed * delta.factor, max = 2 * Math.PI;\n    data.angle += speed;\n    if (data.angle > max) {\n        data.angle -= max;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1yb2xsL2VzbS9VdGlscy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQStFO0FBQ3hFO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw2REFBUztBQUN4QixlQUFlLGlFQUFhO0FBQzVCO0FBQ0E7QUFDQSw2QkFBNkIsbUVBQWU7QUFDNUM7QUFDQTtBQUNBLDBCQUEwQiw2REFBUztBQUNuQztBQUNBO0FBQ0EsbUJBQW1CLGlFQUFhO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUVBQWE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpRUFBYTtBQUNoQztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMTVfcG9ydGZvbGlvX25leHRfdHMvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1yb2xsL2VzbS9VdGlscy5qcz9mYzQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFJhbmRvbSwgZ2V0UmFuZ2VWYWx1ZSwgcmFuZ2VDb2xvclRvSHNsIH0gZnJvbSBcInRzcGFydGljbGVzLWVuZ2luZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRQYXJ0aWNsZShwYXJ0aWNsZSkge1xuICAgIGNvbnN0IHJvbGxPcHQgPSBwYXJ0aWNsZS5vcHRpb25zLnJvbGw7XG4gICAgaWYgKCFyb2xsT3B0Py5lbmFibGUpIHtcbiAgICAgICAgcGFydGljbGUucm9sbCA9IHtcbiAgICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBob3Jpem9udGFsOiBmYWxzZSxcbiAgICAgICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICAgICAgICAgIGFuZ2xlOiAwLFxuICAgICAgICAgICAgc3BlZWQ6IDAsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcGFydGljbGUucm9sbCA9IHtcbiAgICAgICAgZW5hYmxlOiByb2xsT3B0LmVuYWJsZSxcbiAgICAgICAgaG9yaXpvbnRhbDogcm9sbE9wdC5tb2RlID09PSBcImhvcml6b250YWxcIiB8fCByb2xsT3B0Lm1vZGUgPT09IFwiYm90aFwiLFxuICAgICAgICB2ZXJ0aWNhbDogcm9sbE9wdC5tb2RlID09PSBcInZlcnRpY2FsXCIgfHwgcm9sbE9wdC5tb2RlID09PSBcImJvdGhcIixcbiAgICAgICAgYW5nbGU6IGdldFJhbmRvbSgpICogTWF0aC5QSSAqIDIsXG4gICAgICAgIHNwZWVkOiBnZXRSYW5nZVZhbHVlKHJvbGxPcHQuc3BlZWQpIC8gMzYwLFxuICAgIH07XG4gICAgaWYgKHJvbGxPcHQuYmFja0NvbG9yKSB7XG4gICAgICAgIHBhcnRpY2xlLmJhY2tDb2xvciA9IHJhbmdlQ29sb3JUb0hzbChyb2xsT3B0LmJhY2tDb2xvcik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJvbGxPcHQuZGFya2VuLmVuYWJsZSAmJiByb2xsT3B0LmVubGlnaHRlbi5lbmFibGUpIHtcbiAgICAgICAgY29uc3QgYWx0ZXJUeXBlID0gZ2V0UmFuZG9tKCkgPj0gMC41ID8gXCJkYXJrZW5cIiA6IFwiZW5saWdodGVuXCI7XG4gICAgICAgIHBhcnRpY2xlLnJvbGwuYWx0ZXIgPSB7XG4gICAgICAgICAgICB0eXBlOiBhbHRlclR5cGUsXG4gICAgICAgICAgICB2YWx1ZTogZ2V0UmFuZ2VWYWx1ZShhbHRlclR5cGUgPT09IFwiZGFya2VuXCIgPyByb2xsT3B0LmRhcmtlbi52YWx1ZSA6IHJvbGxPcHQuZW5saWdodGVuLnZhbHVlKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAocm9sbE9wdC5kYXJrZW4uZW5hYmxlKSB7XG4gICAgICAgIHBhcnRpY2xlLnJvbGwuYWx0ZXIgPSB7XG4gICAgICAgICAgICB0eXBlOiBcImRhcmtlblwiLFxuICAgICAgICAgICAgdmFsdWU6IGdldFJhbmdlVmFsdWUocm9sbE9wdC5kYXJrZW4udmFsdWUpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChyb2xsT3B0LmVubGlnaHRlbi5lbmFibGUpIHtcbiAgICAgICAgcGFydGljbGUucm9sbC5hbHRlciA9IHtcbiAgICAgICAgICAgIHR5cGU6IFwiZW5saWdodGVuXCIsXG4gICAgICAgICAgICB2YWx1ZTogZ2V0UmFuZ2VWYWx1ZShyb2xsT3B0LmVubGlnaHRlbi52YWx1ZSksXG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVJvbGwocGFydGljbGUsIGRlbHRhKSB7XG4gICAgY29uc3Qgcm9sbCA9IHBhcnRpY2xlLm9wdGlvbnMucm9sbCwgZGF0YSA9IHBhcnRpY2xlLnJvbGw7XG4gICAgaWYgKCFkYXRhIHx8ICFyb2xsPy5lbmFibGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzcGVlZCA9IGRhdGEuc3BlZWQgKiBkZWx0YS5mYWN0b3IsIG1heCA9IDIgKiBNYXRoLlBJO1xuICAgIGRhdGEuYW5nbGUgKz0gc3BlZWQ7XG4gICAgaWYgKGRhdGEuYW5nbGUgPiBtYXgpIHtcbiAgICAgICAgZGF0YS5hbmdsZSAtPSBtYXg7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-roll/esm/Utils.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-roll/esm/index.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles-updater-roll/esm/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadRollUpdater: () => (/* binding */ loadRollUpdater)\n/* harmony export */ });\n/* harmony import */ var _RollUpdater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RollUpdater */ \"(ssr)/./node_modules/tsparticles-updater-roll/esm/RollUpdater.js\");\n\nasync function loadRollUpdater(engine, refresh = true) {\n    await engine.addParticleUpdater(\"roll\", () => new _RollUpdater__WEBPACK_IMPORTED_MODULE_0__.RollUpdater(), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1yb2xsL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0QztBQUNyQztBQUNQLHNEQUFzRCxxREFBVztBQUNqRSIsInNvdXJjZXMiOlsid2VicGFjazovLzE1X3BvcnRmb2xpb19uZXh0X3RzLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXVwZGF0ZXItcm9sbC9lc20vaW5kZXguanM/ZDc3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb2xsVXBkYXRlciB9IGZyb20gXCIuL1JvbGxVcGRhdGVyXCI7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFJvbGxVcGRhdGVyKGVuZ2luZSwgcmVmcmVzaCA9IHRydWUpIHtcbiAgICBhd2FpdCBlbmdpbmUuYWRkUGFydGljbGVVcGRhdGVyKFwicm9sbFwiLCAoKSA9PiBuZXcgUm9sbFVwZGF0ZXIoKSwgcmVmcmVzaCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-roll/esm/index.js\n");

/***/ })

};
;