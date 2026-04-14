/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/edit/route";
exports.ids = ["app/api/edit/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fedit%2Froute&page=%2Fapi%2Fedit%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fedit%2Froute.ts&appDir=C%3A%5CUsers%5CHuyhi%5CDownloads%5CTelegram%20Desktop%5Cnew1%5Cnew1%20(2)%20-%20Copy%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHuyhi%5CDownloads%5CTelegram%20Desktop%5Cnew1%5Cnew1%20(2)%20-%20Copy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fedit%2Froute&page=%2Fapi%2Fedit%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fedit%2Froute.ts&appDir=C%3A%5CUsers%5CHuyhi%5CDownloads%5CTelegram%20Desktop%5Cnew1%5Cnew1%20(2)%20-%20Copy%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHuyhi%5CDownloads%5CTelegram%20Desktop%5Cnew1%5Cnew1%20(2)%20-%20Copy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Huyhi_Downloads_Telegram_Desktop_new1_new1_2_Copy_src_app_api_edit_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/edit/route.ts */ \"(rsc)/./src/app/api/edit/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/edit/route\",\n        pathname: \"/api/edit\",\n        filename: \"route\",\n        bundlePath: \"app/api/edit/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Huyhi\\\\Downloads\\\\Telegram Desktop\\\\new1\\\\new1 (2) - Copy\\\\src\\\\app\\\\api\\\\edit\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Huyhi_Downloads_Telegram_Desktop_new1_new1_2_Copy_src_app_api_edit_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZlZGl0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZlZGl0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZWRpdCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNIdXloaSU1Q0Rvd25sb2FkcyU1Q1RlbGVncmFtJTIwRGVza3RvcCU1Q25ldzElNUNuZXcxJTIwKDIpJTIwLSUyMENvcHklNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0h1eWhpJTVDRG93bmxvYWRzJTVDVGVsZWdyYW0lMjBEZXNrdG9wJTVDbmV3MSU1Q25ldzElMjAoMiklMjAtJTIwQ29weSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDbUQ7QUFDaEk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEh1eWhpXFxcXERvd25sb2Fkc1xcXFxUZWxlZ3JhbSBEZXNrdG9wXFxcXG5ldzFcXFxcbmV3MSAoMikgLSBDb3B5XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGVkaXRcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2VkaXQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9lZGl0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9lZGl0L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcSHV5aGlcXFxcRG93bmxvYWRzXFxcXFRlbGVncmFtIERlc2t0b3BcXFxcbmV3MVxcXFxuZXcxICgyKSAtIENvcHlcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcZWRpdFxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fedit%2Froute&page=%2Fapi%2Fedit%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fedit%2Froute.ts&appDir=C%3A%5CUsers%5CHuyhi%5CDownloads%5CTelegram%20Desktop%5Cnew1%5Cnew1%20(2)%20-%20Copy%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHuyhi%5CDownloads%5CTelegram%20Desktop%5Cnew1%5Cnew1%20(2)%20-%20Copy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/edit/route.ts":
/*!***********************************!*\
  !*** ./src/app/api/edit/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _utils_telegram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/telegram */ \"(rsc)/./src/utils/telegram.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\nconst POST = async (req)=>{\n    try {\n        const body = await req.json();\n        const { message, message_id } = body;\n        if (!message || !message_id) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                success: false\n            }, {\n                status: 400\n            });\n        }\n        const url = `https://api.telegram.org/bot${_utils_telegram__WEBPACK_IMPORTED_MODULE_0__.TELEGRAM_CONFIG.TOKEN}/editMessageText`;\n        const payload = {\n            chat_id: _utils_telegram__WEBPACK_IMPORTED_MODULE_0__.TELEGRAM_CONFIG.CHAT_ID,\n            message_id: message_id,\n            text: message,\n            parse_mode: 'HTML'\n        };\n        const response = await fetch(url, {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify(payload)\n        });\n        const data = await response.json();\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            success: response.ok && data.ok\n        });\n    } catch  {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            success: false\n        }, {\n            status: 500\n        });\n    }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9lZGl0L3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFtRDtBQUNLO0FBRXhELE1BQU1FLE9BQU8sT0FBT0M7SUFDaEIsSUFBSTtRQUNBLE1BQU1DLE9BQU8sTUFBTUQsSUFBSUUsSUFBSTtRQUMzQixNQUFNLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFLEdBQUdIO1FBRWhDLElBQUksQ0FBQ0UsV0FBVyxDQUFDQyxZQUFZO1lBQ3pCLE9BQU9OLHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7Z0JBQUVHLFNBQVM7WUFBTSxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDL0Q7UUFFQSxNQUFNQyxNQUFNLENBQUMsNEJBQTRCLEVBQUVWLDREQUFlQSxDQUFDVyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7UUFDbEYsTUFBTUMsVUFBVTtZQUNaQyxTQUFTYiw0REFBZUEsQ0FBQ2MsT0FBTztZQUNoQ1AsWUFBWUE7WUFDWlEsTUFBTVQ7WUFDTlUsWUFBWTtRQUNoQjtRQUVBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTVIsS0FBSztZQUM5QlMsUUFBUTtZQUNSQyxTQUFTO2dCQUNMLGdCQUFnQjtZQUNwQjtZQUNBaEIsTUFBTWlCLEtBQUtDLFNBQVMsQ0FBQ1Y7UUFDekI7UUFFQSxNQUFNVyxPQUFPLE1BQU1OLFNBQVNaLElBQUk7UUFFaEMsT0FBT0oscURBQVlBLENBQUNJLElBQUksQ0FBQztZQUNyQkcsU0FBU1MsU0FBU08sRUFBRSxJQUFJRCxLQUFLQyxFQUFFO1FBQ25DO0lBQ0osRUFBRSxPQUFNO1FBQ0osT0FBT3ZCLHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7WUFBRUcsU0FBUztRQUFNLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQy9EO0FBQ0o7QUFFZ0IiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSHV5aGlcXERvd25sb2Fkc1xcVGVsZWdyYW0gRGVza3RvcFxcbmV3MVxcbmV3MSAoMikgLSBDb3B5XFxzcmNcXGFwcFxcYXBpXFxlZGl0XFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBURUxFR1JBTV9DT05GSUcgfSBmcm9tICdAL3V0aWxzL3RlbGVncmFtJztcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5cbmNvbnN0IFBPU1QgPSBhc3luYyAocmVxOiBOZXh0UmVxdWVzdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xuICAgICAgICBjb25zdCB7IG1lc3NhZ2UsIG1lc3NhZ2VfaWQgfSA9IGJvZHk7XG5cbiAgICAgICAgaWYgKCFtZXNzYWdlIHx8ICFtZXNzYWdlX2lkKSB7XG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLnRlbGVncmFtLm9yZy9ib3Qke1RFTEVHUkFNX0NPTkZJRy5UT0tFTn0vZWRpdE1lc3NhZ2VUZXh0YDtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgICAgIGNoYXRfaWQ6IFRFTEVHUkFNX0NPTkZJRy5DSEFUX0lELFxuICAgICAgICAgICAgbWVzc2FnZV9pZDogbWVzc2FnZV9pZCxcbiAgICAgICAgICAgIHRleHQ6IG1lc3NhZ2UsXG4gICAgICAgICAgICBwYXJzZV9tb2RlOiAnSFRNTCdcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlc3BvbnNlLm9rICYmIGRhdGEub2tcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gICAgfVxufTtcblxuZXhwb3J0IHsgUE9TVCB9O1xuIl0sIm5hbWVzIjpbIlRFTEVHUkFNX0NPTkZJRyIsIk5leHRSZXNwb25zZSIsIlBPU1QiLCJyZXEiLCJib2R5IiwianNvbiIsIm1lc3NhZ2UiLCJtZXNzYWdlX2lkIiwic3VjY2VzcyIsInN0YXR1cyIsInVybCIsIlRPS0VOIiwicGF5bG9hZCIsImNoYXRfaWQiLCJDSEFUX0lEIiwidGV4dCIsInBhcnNlX21vZGUiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwib2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/edit/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/utils/telegram.ts":
/*!*******************************!*\
  !*** ./src/utils/telegram.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TELEGRAM_CONFIG: () => (/* binding */ TELEGRAM_CONFIG),\n/* harmony export */   escapeHTML: () => (/* binding */ escapeHTML)\n/* harmony export */ });\nconst TELEGRAM_CONFIG = {\n    TOKEN: '8283812654:AAFmqINCpaI10uxgMtA4HidNzuqGzghvdvg',\n    CHAT_ID: '-5190877073'\n};\nconst escapeHTML = (text)=>{\n    if (!text) return '';\n    return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;').replace(/'/g, '&#39;');\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvdGVsZWdyYW0udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxNQUFNQSxrQkFBa0I7SUFDM0JDLE9BQU87SUFDUEMsU0FBUztBQUNiLEVBQUU7QUFFSyxNQUFNQyxhQUFhLENBQUNDO0lBQ3ZCLElBQUksQ0FBQ0EsTUFBTSxPQUFPO0lBQ2xCLE9BQU9DLE9BQU9ELE1BQ1RFLE9BQU8sQ0FBQyxNQUFNLFNBQ2RBLE9BQU8sQ0FBQyxNQUFNLFFBQ2RBLE9BQU8sQ0FBQyxNQUFNLFFBQ2RBLE9BQU8sQ0FBQyxNQUFNLFVBQ2RBLE9BQU8sQ0FBQyxNQUFNO0FBQ3ZCLEVBQUUiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSHV5aGlcXERvd25sb2Fkc1xcVGVsZWdyYW0gRGVza3RvcFxcbmV3MVxcbmV3MSAoMikgLSBDb3B5XFxzcmNcXHV0aWxzXFx0ZWxlZ3JhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgVEVMRUdSQU1fQ09ORklHID0ge1xuICAgIFRPS0VOOiAnODI4MzgxMjY1NDpBQUZtcUlOQ3BhSTEwdXhnTXRBNEhpZE56dXFHemdodmR2ZycsXG4gICAgQ0hBVF9JRDogJy01MTkwODc3MDczJ1xufTtcblxuZXhwb3J0IGNvbnN0IGVzY2FwZUhUTUwgPSAodGV4dDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICBpZiAoIXRleHQpIHJldHVybiAnJztcbiAgICByZXR1cm4gU3RyaW5nKHRleHQpXG4gICAgICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAgICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgICAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXG4gICAgICAgIC5yZXBsYWNlKC8nL2csICcmIzM5OycpO1xufTtcbiJdLCJuYW1lcyI6WyJURUxFR1JBTV9DT05GSUciLCJUT0tFTiIsIkNIQVRfSUQiLCJlc2NhcGVIVE1MIiwidGV4dCIsIlN0cmluZyIsInJlcGxhY2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/telegram.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fedit%2Froute&page=%2Fapi%2Fedit%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fedit%2Froute.ts&appDir=C%3A%5CUsers%5CHuyhi%5CDownloads%5CTelegram%20Desktop%5Cnew1%5Cnew1%20(2)%20-%20Copy%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHuyhi%5CDownloads%5CTelegram%20Desktop%5Cnew1%5Cnew1%20(2)%20-%20Copy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();