/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/delete.js":
/*!********************************!*\
  !*** ./resources/js/delete.js ***!
  \********************************/
/***/ (() => {

eval("$(function () {\n  $(\".delete\").trigger(\"click\")(function () {\n    var _this = this;\n\n    Swal.fire({\n      title: \"Czy na pewno chcesz usunąć rekord\",\n      icon: \"warning\",\n      showCancelButton: true,\n      confirmButtonColor: \"#3085d6\",\n      cancelButtonColor: \"#d33\",\n      cancelButtonText: \"Nie\",\n      confirmButtonText: \"Tak\"\n    }).then(function (result) {\n      if (result.isConfirmed) {\n        Swal.fire($.ajax({\n          method: \"DELETE\",\n          url: deleteUrl + $(_this).data(\"id\")\n        }).done(function (response) {\n          window.location.reload();\n        }).fail(function (response) {\n          Swal.fire({\n            icon: \"error\",\n            title: \"Oops...\",\n            text: \"Coś poszło nie tak!!\"\n          });\n        }));\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvZGVsZXRlLmpzLmpzIiwibmFtZXMiOlsiJCIsInRyaWdnZXIiLCJTd2FsIiwiZmlyZSIsInRpdGxlIiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvblRleHQiLCJjb25maXJtQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJkZWxldGVVcmwiLCJkYXRhIiwiZG9uZSIsInJlc3BvbnNlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJmYWlsIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2RlbGV0ZS5qcz82YzExIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xuICAgICQoXCIuZGVsZXRlXCIpLnRyaWdnZXIoXCJjbGlja1wiKShmdW5jdGlvbiAoKSB7XG4gICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogXCJDenkgbmEgcGV3bm8gY2hjZXN6IHVzdW7EhcSHIHJla29yZFwiLFxuXG4gICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzMwODVkNlwiLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IFwiI2QzM1wiLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJOaWVcIixcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlRha1wiLFxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoXG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGRlbGV0ZVVybCArICQodGhpcykuZGF0YShcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRvbmUoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mYWlsKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiT29wcy4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkNvxZsgcG9zesWCbyBuaWUgdGFrISFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUFBLENBQUMsQ0FBQyxZQUFZO0VBQ1ZBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYUMsT0FBYixDQUFxQixPQUFyQixFQUE4QixZQUFZO0lBQUE7O0lBQ3RDQyxJQUFJLENBQUNDLElBQUwsQ0FBVTtNQUNOQyxLQUFLLEVBQUUsbUNBREQ7TUFHTkMsSUFBSSxFQUFFLFNBSEE7TUFJTkMsZ0JBQWdCLEVBQUUsSUFKWjtNQUtOQyxrQkFBa0IsRUFBRSxTQUxkO01BTU5DLGlCQUFpQixFQUFFLE1BTmI7TUFPTkMsZ0JBQWdCLEVBQUUsS0FQWjtNQVFOQyxpQkFBaUIsRUFBRTtJQVJiLENBQVYsRUFTR0MsSUFUSCxDQVNRLFVBQUNDLE1BQUQsRUFBWTtNQUNoQixJQUFJQSxNQUFNLENBQUNDLFdBQVgsRUFBd0I7UUFDcEJYLElBQUksQ0FBQ0MsSUFBTCxDQUNJSCxDQUFDLENBQUNjLElBQUYsQ0FBTztVQUNIQyxNQUFNLEVBQUUsUUFETDtVQUVIQyxHQUFHLEVBQUVDLFNBQVMsR0FBR2pCLENBQUMsQ0FBQyxLQUFELENBQUQsQ0FBUWtCLElBQVIsQ0FBYSxJQUFiO1FBRmQsQ0FBUCxFQUlLQyxJQUpMLENBSVUsVUFBVUMsUUFBVixFQUFvQjtVQUN0QkMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjtRQUNILENBTkwsRUFPS0MsSUFQTCxDQU9VLFVBQVVKLFFBQVYsRUFBb0I7VUFDdEJsQixJQUFJLENBQUNDLElBQUwsQ0FBVTtZQUNORSxJQUFJLEVBQUUsT0FEQTtZQUVORCxLQUFLLEVBQUUsU0FGRDtZQUdOcUIsSUFBSSxFQUFFO1VBSEEsQ0FBVjtRQUtILENBYkwsQ0FESjtNQWdCSDtJQUNKLENBNUJEO0VBNkJILENBOUJEO0FBK0JILENBaENBLENBQUQifQ==\n//# sourceURL=webpack-internal:///./resources/js/delete.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/delete.js"]();
/******/ 	
/******/ })()
;