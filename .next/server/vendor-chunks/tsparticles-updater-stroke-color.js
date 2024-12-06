"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-updater-stroke-color";
exports.ids = ["vendor-chunks/tsparticles-updater-stroke-color"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-updater-stroke-color/esm/StrokeColorUpdater.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/tsparticles-updater-stroke-color/esm/StrokeColorUpdater.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StrokeColorUpdater: () => (/* binding */ StrokeColorUpdater)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/Utils.js\");\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/ColorUtils.js\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils */ \"(ssr)/./node_modules/tsparticles-updater-stroke-color/esm/Utils.js\");\n\n\nclass StrokeColorUpdater {\n    constructor(container) {\n        this.container = container;\n    }\n    init(particle) {\n        const container = this.container, options = particle.options;\n        const stroke = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.itemFromSingleOrMultiple)(options.stroke, particle.id, options.reduceDuplicates);\n        particle.strokeWidth = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__.getRangeValue)(stroke.width) * container.retina.pixelRatio;\n        particle.strokeOpacity = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__.getRangeValue)(stroke.opacity ?? 1);\n        particle.strokeAnimation = stroke.color?.animation;\n        const strokeHslColor = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__.rangeColorToHsl)(stroke.color) ?? particle.getFillColor();\n        if (strokeHslColor) {\n            particle.strokeColor = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__.getHslAnimationFromHsl)(strokeHslColor, particle.strokeAnimation, container.retina.reduceFactor);\n        }\n    }\n    isEnabled(particle) {\n        const color = particle.strokeAnimation, { strokeColor } = particle;\n        return (!particle.destroyed &&\n            !particle.spawning &&\n            !!color &&\n            ((strokeColor?.h.value !== undefined && strokeColor.h.enable) ||\n                (strokeColor?.s.value !== undefined && strokeColor.s.enable) ||\n                (strokeColor?.l.value !== undefined && strokeColor.l.enable)));\n    }\n    update(particle, delta) {\n        if (!this.isEnabled(particle)) {\n            return;\n        }\n        (0,_Utils__WEBPACK_IMPORTED_MODULE_3__.updateStrokeColor)(particle, delta);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1zdHJva2UtY29sb3IvZXNtL1N0cm9rZUNvbG9yVXBkYXRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1SDtBQUMzRTtBQUNyQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNEVBQXdCO0FBQy9DLCtCQUErQixpRUFBYTtBQUM1QyxpQ0FBaUMsaUVBQWE7QUFDOUM7QUFDQSwrQkFBK0IsbUVBQWU7QUFDOUM7QUFDQSxtQ0FBbUMsMEVBQXNCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFpQjtBQUN6QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMTVfcG9ydGZvbGlvX25leHRfdHMvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1zdHJva2UtY29sb3IvZXNtL1N0cm9rZUNvbG9yVXBkYXRlci5qcz9mNDZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEhzbEFuaW1hdGlvbkZyb21Ic2wsIGdldFJhbmdlVmFsdWUsIGl0ZW1Gcm9tU2luZ2xlT3JNdWx0aXBsZSwgcmFuZ2VDb2xvclRvSHNsLCB9IGZyb20gXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIjtcbmltcG9ydCB7IHVwZGF0ZVN0cm9rZUNvbG9yIH0gZnJvbSBcIi4vVXRpbHNcIjtcbmV4cG9ydCBjbGFzcyBTdHJva2VDb2xvclVwZGF0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB9XG4gICAgaW5pdChwYXJ0aWNsZSkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lciwgb3B0aW9ucyA9IHBhcnRpY2xlLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHN0cm9rZSA9IGl0ZW1Gcm9tU2luZ2xlT3JNdWx0aXBsZShvcHRpb25zLnN0cm9rZSwgcGFydGljbGUuaWQsIG9wdGlvbnMucmVkdWNlRHVwbGljYXRlcyk7XG4gICAgICAgIHBhcnRpY2xlLnN0cm9rZVdpZHRoID0gZ2V0UmFuZ2VWYWx1ZShzdHJva2Uud2lkdGgpICogY29udGFpbmVyLnJldGluYS5waXhlbFJhdGlvO1xuICAgICAgICBwYXJ0aWNsZS5zdHJva2VPcGFjaXR5ID0gZ2V0UmFuZ2VWYWx1ZShzdHJva2Uub3BhY2l0eSA/PyAxKTtcbiAgICAgICAgcGFydGljbGUuc3Ryb2tlQW5pbWF0aW9uID0gc3Ryb2tlLmNvbG9yPy5hbmltYXRpb247XG4gICAgICAgIGNvbnN0IHN0cm9rZUhzbENvbG9yID0gcmFuZ2VDb2xvclRvSHNsKHN0cm9rZS5jb2xvcikgPz8gcGFydGljbGUuZ2V0RmlsbENvbG9yKCk7XG4gICAgICAgIGlmIChzdHJva2VIc2xDb2xvcikge1xuICAgICAgICAgICAgcGFydGljbGUuc3Ryb2tlQ29sb3IgPSBnZXRIc2xBbmltYXRpb25Gcm9tSHNsKHN0cm9rZUhzbENvbG9yLCBwYXJ0aWNsZS5zdHJva2VBbmltYXRpb24sIGNvbnRhaW5lci5yZXRpbmEucmVkdWNlRmFjdG9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc0VuYWJsZWQocGFydGljbGUpIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSBwYXJ0aWNsZS5zdHJva2VBbmltYXRpb24sIHsgc3Ryb2tlQ29sb3IgfSA9IHBhcnRpY2xlO1xuICAgICAgICByZXR1cm4gKCFwYXJ0aWNsZS5kZXN0cm95ZWQgJiZcbiAgICAgICAgICAgICFwYXJ0aWNsZS5zcGF3bmluZyAmJlxuICAgICAgICAgICAgISFjb2xvciAmJlxuICAgICAgICAgICAgKChzdHJva2VDb2xvcj8uaC52YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHN0cm9rZUNvbG9yLmguZW5hYmxlKSB8fFxuICAgICAgICAgICAgICAgIChzdHJva2VDb2xvcj8ucy52YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHN0cm9rZUNvbG9yLnMuZW5hYmxlKSB8fFxuICAgICAgICAgICAgICAgIChzdHJva2VDb2xvcj8ubC52YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHN0cm9rZUNvbG9yLmwuZW5hYmxlKSkpO1xuICAgIH1cbiAgICB1cGRhdGUocGFydGljbGUsIGRlbHRhKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0VuYWJsZWQocGFydGljbGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlU3Ryb2tlQ29sb3IocGFydGljbGUsIGRlbHRhKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-stroke-color/esm/StrokeColorUpdater.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-stroke-color/esm/Utils.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles-updater-stroke-color/esm/Utils.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateStrokeColor: () => (/* binding */ updateStrokeColor)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n\nfunction updateColorValue(delta, colorValue, valueAnimation, max, decrease) {\n    if (!colorValue ||\n        !valueAnimation.enable ||\n        ((colorValue.maxLoops ?? 0) > 0 && (colorValue.loops ?? 0) > (colorValue.maxLoops ?? 0))) {\n        return;\n    }\n    if (!colorValue.time) {\n        colorValue.time = 0;\n    }\n    if ((colorValue.delayTime ?? 0) > 0 && colorValue.time < (colorValue.delayTime ?? 0)) {\n        colorValue.time += delta.value;\n    }\n    if ((colorValue.delayTime ?? 0) > 0 && colorValue.time < (colorValue.delayTime ?? 0)) {\n        return;\n    }\n    const offset = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.randomInRange)(valueAnimation.offset), velocity = (colorValue.velocity ?? 0) * delta.factor + offset * 3.6, decay = colorValue.decay ?? 1;\n    if (!decrease || colorValue.status === \"increasing\") {\n        colorValue.value += velocity;\n        if (colorValue.value > max) {\n            if (!colorValue.loops) {\n                colorValue.loops = 0;\n            }\n            colorValue.loops++;\n            if (decrease) {\n                colorValue.status = \"decreasing\";\n                colorValue.value -= colorValue.value % max;\n            }\n        }\n    }\n    else {\n        colorValue.value -= velocity;\n        if (colorValue.value < 0) {\n            if (!colorValue.loops) {\n                colorValue.loops = 0;\n            }\n            colorValue.loops++;\n            colorValue.status = \"increasing\";\n            colorValue.value += colorValue.value;\n        }\n    }\n    if (colorValue.velocity && decay !== 1) {\n        colorValue.velocity *= decay;\n    }\n    if (colorValue.value > max) {\n        colorValue.value %= max;\n    }\n}\nfunction updateStrokeColor(particle, delta) {\n    if (!particle.strokeColor || !particle.strokeAnimation) {\n        return;\n    }\n    const { h, s, l } = particle.strokeColor, { h: hAnimation, s: sAnimation, l: lAnimation } = particle.strokeAnimation;\n    if (h) {\n        updateColorValue(delta, h, hAnimation, 360, false);\n    }\n    if (s) {\n        updateColorValue(delta, s, sAnimation, 100, true);\n    }\n    if (l) {\n        updateColorValue(delta, l, lAnimation, 100, true);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1zdHJva2UtY29sb3IvZXNtL1V0aWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpRUFBYTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVLDBCQUEwQiw4Q0FBOEM7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xNV9wb3J0Zm9saW9fbmV4dF90cy8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy11cGRhdGVyLXN0cm9rZS1jb2xvci9lc20vVXRpbHMuanM/NTc5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByYW5kb21JblJhbmdlLCB9IGZyb20gXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIjtcbmZ1bmN0aW9uIHVwZGF0ZUNvbG9yVmFsdWUoZGVsdGEsIGNvbG9yVmFsdWUsIHZhbHVlQW5pbWF0aW9uLCBtYXgsIGRlY3JlYXNlKSB7XG4gICAgaWYgKCFjb2xvclZhbHVlIHx8XG4gICAgICAgICF2YWx1ZUFuaW1hdGlvbi5lbmFibGUgfHxcbiAgICAgICAgKChjb2xvclZhbHVlLm1heExvb3BzID8/IDApID4gMCAmJiAoY29sb3JWYWx1ZS5sb29wcyA/PyAwKSA+IChjb2xvclZhbHVlLm1heExvb3BzID8/IDApKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghY29sb3JWYWx1ZS50aW1lKSB7XG4gICAgICAgIGNvbG9yVmFsdWUudGltZSA9IDA7XG4gICAgfVxuICAgIGlmICgoY29sb3JWYWx1ZS5kZWxheVRpbWUgPz8gMCkgPiAwICYmIGNvbG9yVmFsdWUudGltZSA8IChjb2xvclZhbHVlLmRlbGF5VGltZSA/PyAwKSkge1xuICAgICAgICBjb2xvclZhbHVlLnRpbWUgKz0gZGVsdGEudmFsdWU7XG4gICAgfVxuICAgIGlmICgoY29sb3JWYWx1ZS5kZWxheVRpbWUgPz8gMCkgPiAwICYmIGNvbG9yVmFsdWUudGltZSA8IChjb2xvclZhbHVlLmRlbGF5VGltZSA/PyAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9mZnNldCA9IHJhbmRvbUluUmFuZ2UodmFsdWVBbmltYXRpb24ub2Zmc2V0KSwgdmVsb2NpdHkgPSAoY29sb3JWYWx1ZS52ZWxvY2l0eSA/PyAwKSAqIGRlbHRhLmZhY3RvciArIG9mZnNldCAqIDMuNiwgZGVjYXkgPSBjb2xvclZhbHVlLmRlY2F5ID8/IDE7XG4gICAgaWYgKCFkZWNyZWFzZSB8fCBjb2xvclZhbHVlLnN0YXR1cyA9PT0gXCJpbmNyZWFzaW5nXCIpIHtcbiAgICAgICAgY29sb3JWYWx1ZS52YWx1ZSArPSB2ZWxvY2l0eTtcbiAgICAgICAgaWYgKGNvbG9yVmFsdWUudmFsdWUgPiBtYXgpIHtcbiAgICAgICAgICAgIGlmICghY29sb3JWYWx1ZS5sb29wcykge1xuICAgICAgICAgICAgICAgIGNvbG9yVmFsdWUubG9vcHMgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29sb3JWYWx1ZS5sb29wcysrO1xuICAgICAgICAgICAgaWYgKGRlY3JlYXNlKSB7XG4gICAgICAgICAgICAgICAgY29sb3JWYWx1ZS5zdGF0dXMgPSBcImRlY3JlYXNpbmdcIjtcbiAgICAgICAgICAgICAgICBjb2xvclZhbHVlLnZhbHVlIC09IGNvbG9yVmFsdWUudmFsdWUgJSBtYXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbG9yVmFsdWUudmFsdWUgLT0gdmVsb2NpdHk7XG4gICAgICAgIGlmIChjb2xvclZhbHVlLnZhbHVlIDwgMCkge1xuICAgICAgICAgICAgaWYgKCFjb2xvclZhbHVlLmxvb3BzKSB7XG4gICAgICAgICAgICAgICAgY29sb3JWYWx1ZS5sb29wcyA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb2xvclZhbHVlLmxvb3BzKys7XG4gICAgICAgICAgICBjb2xvclZhbHVlLnN0YXR1cyA9IFwiaW5jcmVhc2luZ1wiO1xuICAgICAgICAgICAgY29sb3JWYWx1ZS52YWx1ZSArPSBjb2xvclZhbHVlLnZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjb2xvclZhbHVlLnZlbG9jaXR5ICYmIGRlY2F5ICE9PSAxKSB7XG4gICAgICAgIGNvbG9yVmFsdWUudmVsb2NpdHkgKj0gZGVjYXk7XG4gICAgfVxuICAgIGlmIChjb2xvclZhbHVlLnZhbHVlID4gbWF4KSB7XG4gICAgICAgIGNvbG9yVmFsdWUudmFsdWUgJT0gbWF4O1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdHJva2VDb2xvcihwYXJ0aWNsZSwgZGVsdGEpIHtcbiAgICBpZiAoIXBhcnRpY2xlLnN0cm9rZUNvbG9yIHx8ICFwYXJ0aWNsZS5zdHJva2VBbmltYXRpb24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IGgsIHMsIGwgfSA9IHBhcnRpY2xlLnN0cm9rZUNvbG9yLCB7IGg6IGhBbmltYXRpb24sIHM6IHNBbmltYXRpb24sIGw6IGxBbmltYXRpb24gfSA9IHBhcnRpY2xlLnN0cm9rZUFuaW1hdGlvbjtcbiAgICBpZiAoaCkge1xuICAgICAgICB1cGRhdGVDb2xvclZhbHVlKGRlbHRhLCBoLCBoQW5pbWF0aW9uLCAzNjAsIGZhbHNlKTtcbiAgICB9XG4gICAgaWYgKHMpIHtcbiAgICAgICAgdXBkYXRlQ29sb3JWYWx1ZShkZWx0YSwgcywgc0FuaW1hdGlvbiwgMTAwLCB0cnVlKTtcbiAgICB9XG4gICAgaWYgKGwpIHtcbiAgICAgICAgdXBkYXRlQ29sb3JWYWx1ZShkZWx0YSwgbCwgbEFuaW1hdGlvbiwgMTAwLCB0cnVlKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-stroke-color/esm/Utils.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-stroke-color/esm/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles-updater-stroke-color/esm/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadStrokeColorUpdater: () => (/* binding */ loadStrokeColorUpdater)\n/* harmony export */ });\n/* harmony import */ var _StrokeColorUpdater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StrokeColorUpdater */ \"(ssr)/./node_modules/tsparticles-updater-stroke-color/esm/StrokeColorUpdater.js\");\n\nasync function loadStrokeColorUpdater(engine, refresh = true) {\n    await engine.addParticleUpdater(\"strokeColor\", (container) => new _StrokeColorUpdater__WEBPACK_IMPORTED_MODULE_0__.StrokeColorUpdater(container), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1zdHJva2UtY29sb3IvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBEO0FBQ25EO0FBQ1Asc0VBQXNFLG1FQUFrQjtBQUN4RiIsInNvdXJjZXMiOlsid2VicGFjazovLzE1X3BvcnRmb2xpb19uZXh0X3RzLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXVwZGF0ZXItc3Ryb2tlLWNvbG9yL2VzbS9pbmRleC5qcz9jYmZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cm9rZUNvbG9yVXBkYXRlciB9IGZyb20gXCIuL1N0cm9rZUNvbG9yVXBkYXRlclwiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRTdHJva2VDb2xvclVwZGF0ZXIoZW5naW5lLCByZWZyZXNoID0gdHJ1ZSkge1xuICAgIGF3YWl0IGVuZ2luZS5hZGRQYXJ0aWNsZVVwZGF0ZXIoXCJzdHJva2VDb2xvclwiLCAoY29udGFpbmVyKSA9PiBuZXcgU3Ryb2tlQ29sb3JVcGRhdGVyKGNvbnRhaW5lciksIHJlZnJlc2gpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-stroke-color/esm/index.js\n");

/***/ })

};
;