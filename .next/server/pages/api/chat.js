"use strict";
(() => {
var exports = {};
exports.id = 170;
exports.ids = [170];
exports.modules = {

/***/ 953:
/***/ ((module) => {

module.exports = require("follow-redirects");

/***/ }),

/***/ 941:
/***/ ((module) => {

module.exports = require("form-data");

/***/ }),

/***/ 149:
/***/ ((module) => {

module.exports = require("proxy-from-env");

/***/ }),

/***/ 361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);

async function handler(req, res) {
    if (req.method !== "POST") {
        res.status(405).json({
            message: "Method should be POST"
        });
    } else {
        try {
            const { body  } = req;
            const url = "https://api.openai.com/v1/chat/completions";
            const headers = {
                "Content-type": "application/json",
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
            };
            const response = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(url, body, {
                headers: headers
            });
            res.status(200).json(response.data);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Something went wrong"
            });
        }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [47], () => (__webpack_exec__(571)));
module.exports = __webpack_exports__;

})();