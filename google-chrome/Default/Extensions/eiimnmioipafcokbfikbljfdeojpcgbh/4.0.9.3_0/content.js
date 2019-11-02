/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1020);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1020:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__background_js_config__ = __webpack_require__(32);


(function() {
	if (window.location.href.replace(/\/$/, '') !== __WEBPACK_IMPORTED_MODULE_0__background_js_config__["a" /* default */].thanks_url) {
		return;
	}

	if (localStorage.getItem('uninstallEmailSended')) {
		localStorage.removeItem('uninstallEmailSended');
		chrome.extension.sendMessage({ type: 'sendReinstallEmail' });
	}
})();


/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const apiBase = 'https://api.blocksite.co';
const config = {
    'extension_id':      '35',
    'home_domain':       'blocksite.co', 
    'thanks_url':        'https://blocksite.co/welcome',
    'uninstall_url':     'https://blocksite.co/uninstall',
    'webstoreId':        'eiimnmioipafcokbfikbljfdeojpcgbh',
    'gaCode':            'UA-109305899-2',
    'gaCid':             [Math.random(), Math.random(), Math.random()].join('-'),
    'default_locale':    'en',
    'suggestionList': [
        'facebook.com',
        'twitter.com',
        'youtube.com',
        'web.whatsapp.com',
        'reddit.com',
        'instagram.com',
        'pinterest.com',
        'tumblr.com',
        'yahoo.com',
        'messenger.com',
        'vk.com',
        'fb.com',
        'vimeo.com',
        'amazon.com',
        'ebay.com',
        'tmz.com',
        'ew.com',
        'deadline.com',
        'jezebel.com',
        'craigslist.org',
        'walmart.com',
        'pch.com',
        'lotto.pch.com',
        'xfinity.com',
        'imdb.com',
        'netflix.com',
        'hulu.com',
        'refinery29.com',
        'thecut.com',
        'fashionbeans.com'
    ],
    whitelist: [], 
    firefox_reviews_url: 'https://addons.mozilla.org/en-US/firefox/addon/blocksite/reviews/',
    chrome_reviews_url: 'https://chrome.google.com/webstore/detail/eiimnmioipafcokbfikbljfdeojpcgbh/reviews',
    privacy_policy_url: 'https://blocksite.co/privacy/',
    improve_survey_url: 'https://docs.google.com/forms/d/e/1FAIpQLSc9RJpLSFSiGmdZsftkAp55MDrF4-D2UQUN_SmoYikbcGZ5wA/viewform',
    android_app_link: 'https://play.google.com/store/apps/details?id=co.blocksite&utm_source=%utm_source_val%&utm_campaign=Extension',
    newtab_url: typeof browser !== 'undefined' ? 'about:blank' : 'about:newtab',
    forgot_pass_email_url: `${apiBase}/email/forgot`,
    uninstall_prevention_url: 'https://blocksite.co/uninstall-prevention',
    reinstall_email_url: `${apiBase}/email/reinstall`,
    account_protecton_on_email_url: `${apiBase}/email/protect`,
    email_verification_url: `${apiBase}/email/verify-v2`,
    check_vefication_firefox: `${apiBase}/verify-ff`,
    check_vefication_expiration: 1, //1 hour
    email_verification_link_regexp: /^https:\/\/blocksite\.co\/verify-link\.php\?eid=([a-z0-9]{32})/i,
    remote_config_url: `${apiBase}/config`,
    sync_timer: 60 * 1000,
    sync_get_id_url: `${apiBase}/sync/get_sync_id`,
    sync_update_settings: `${apiBase}/sync/settings`,
    sync_google_play_link: 'https://play.google.com/store/apps/details?id=co.blocksite&referrer=utm_source%3DExtension%26utm_content%3D%sync_id%%26utm_campaign%3Dsync',
    stop_sync_url: `${apiBase}/sync/stop_sync`,
    sync_get_settings: `${apiBase}/sync/get_settings`,
    gaSamplingRate: 10, //send ga events once every X times
    apiBase,
    number_of_times_to_show_sync_tooltip: 2,
    sync_google_play_link_blocked_tab: 'https://play.google.com/store/apps/details?id=co.blocksite&utm_source=blockedpage&utm_medium=blockedpage'
};
/* harmony default export */ __webpack_exports__["a"] = (config);


/***/ })

/******/ });