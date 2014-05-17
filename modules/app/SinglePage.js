/**
 * Class: SinglePage
 * This class provide a simple way to build single-page, dynamic applications.
 * It is suitable for small-medium applications where you wish to load only
 * fragements of documents via URL hash fragments. This is inspired by
 * the Pagify jQuery plugin by Chris Polis (https://github.com/cmpolis/Pagify).
 *
 * This class is a part of the RAJO, or Random Assortment of JavaScript Objects
 * library.
 *
 * Author:
 *    Adam Presley
 *
 * The MIT License (MIT)
 * Copyright (c) 2014 Adam Presley
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
 * LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
define(["modules/util/PubSub", "jquery", "modules/util/FuncTools"], function(PubSub, $, FuncTools) {
	"use strict";

	return (function() {
		var
			self = this,

			/*
			 * Event names
			 */
			_BEFORE_LOAD = "rajo.singlepage.beforeload",
			_LOAD = "rajo.singlepage.load",
			_AFTER_LOAD = "rajo.singlepage.afterload",


			/*
			 * Private methods and variables
			 */

			_assemblePublishData = function(hashParserFn, requestedView) {
				var result = hashParserFn(requestedView);
				result.config = _config;
				return result;
			},

			_getFullPath = function(path) {
				return _config.baseViewPath + path + "." + _config.viewExtension;
			},

			_hashParser = function(requestedView) {
				if (!requestedView) {
					requestedView = window.location.hash.replace("#", "") || _config.defaultView;
				}

				return _parsePage(requestedView);
			},

			/*
			 * Breaks the hash into parts. Page, URL params after a ?, or even slash-delimited.
			 * If there is a ? get the into a key/value object. If there are just slashes
			 * after the page then place them into an array.
			 */
			_parsePage = function(path) {
				var
					page = path,
					params = null,
					split = [];

				if (path.indexOf("?") > -1) {
					params = {};
					split = path.split("?");
					page = split[0];

					split = split[1].split("&");

					FuncTools.each(split, function(item) {
						var temp = item.split("=");
						params[temp[0]] = (temp.length > 1) ? temp[1] : null;
					});
				} else if (path.indexOf("/") > -1) {
					params = [];
					split = path.split("/");
					page = split[0];

					if (split.length > 1) {
						FuncTools.each(split, function(item) { params.push(item); });
					}
				}

				return {
					page: page,
					params: params
				};
			},

			_loadViewFromFile = function(data, callback) {
				$.get(_getFullPath(data.page), function(content) {
					/*
					 * Prime cache if caching is enabled.
					 */
					if (_config.cacheViews) {
						_config.views[_getFullPath(data.page)] = content;
					}

					callback(data, content);
				});
			},

			_loadViewFromCache = function(data, callback) {
				callback(data, _config.views[_getFullPath(data.page)]);
			},

			_render = function(data, content) {
				var $el = $(_config.el);

				$el[_config.animationOut](_config.animationOutSpeed, function() {
					$el.html(content)[_config.animationIn](_config.animationInSpeed, function() {
						PubSub.publish(_AFTER_LOAD, data);
					});
				});
			},


			/*
			 * Default configuration
			 */
			_config = {

				/* Settings */
				el: null,
				baseViewPath: "",
				viewExtension: "html",
				cacheViews: false,
				defaultView: null,
				views: [],

				/* Animation */
				animationIn: "show",
				animationInSpeed: 0,
				animationOut: "hide",
				animationOutSpeed: 0,

				/* Events */
				beforeLoad: function(data) {
					PubSub.publish(_LOAD, data);
				},
				load: function(data) {
					if (_config.cacheViews && _getFullPath(data.page) in _config.views) {
						_loadViewFromCache(data, _render);
					} else {
						_loadViewFromFile(data, _render);
					}
				},
				afterLoad: function(data) {}
			};

		/*
		 * Public interface
		 */
		return {
			/**
			 * Enum: PAGE_EVENTS
			 *
			 * BEFORE_LOAD - Called prior to any page loading occurs
			 * LOAD - Called to handle page loading
			 * AFTER_LOAD - Called after page loading has finished
			 */
			BEFORE_LOAD: _BEFORE_LOAD,
			LOAD: _LOAD,
			AFTER_LOAD: _AFTER_LOAD,

			/**
			 * Function: getHash
			 * Returns the current hash portion of the URI. It will strip any preceding pound sign.
			 */
			getHash: function() {
				return window.location.hash.replace("#", "");
			},

			/**
			 * Function: getPublishData
			 * This function returns an object with information needed for the various
			 * events in the SinglePage class. It will provide the original configuration
			 * information as well as requested page data. This includes
			 *
			 *    * page (parsed from the hash)
			 *    * parameters
			 *
			 * Parameters:
			 *    view - The requested view/page
			 *
			 * Returns:
			 *    An object with config and requested view/page information
			 */
			getPublishData: function(view) {
				return _assemblePublishData(_hashParser, view);
			},

			/**
			 * Function: setup
			 * Sets up a listener for handling URL hash changes. It also prepares events
			 * fired before, during, and after hash change and page load. When a hash
			 * change occurs a BEFORE_LOAD event is fired, which in turn fires the
			 * LOAD event, which finally ends by calling the AFTER_LOAD event.
			 *
			 * The configuration object passed in to this function has the following
			 * possible values.
			 *
			 *    * el - Element on the page for holding view content (required)
			 *    * baseViewPath - Prefix path for where view pages are stored
			 *    * viewExtension - View file extension (defaults to "html")
			 *    * cacheViews - true/false to cache views after first load. Reduces number of AJAX calls
			 *    * views - Array of view page names
			 *
			 * Example:
			 *    > $singlepage.setup({
			 *    >    el: "#content",
			 *    >    baseViewPath: "/views",
			 *    >    viewExtension: "html",
			 *    >    views: [
			 *    >       "home",
			 *    >       "about-me",
			 *    >       "contact-us"
			 *    >    ]
			 *    > });
			 *
			 * Parameters:
			 *    config - Configuration object
			 */
			setup: function(config) {
				var iface = this;
				_config = $.extend(_config, config);

				/*
				 * Clean our base page path. Ensure it has a trailing slash.
				 */
				if (_config.baseViewPath.indexOf("/", _config.baseViewPath.length - 2) === -1) _config.baseViewPath += "/";

				/*
				 * Setup view event subscribers
				 */
				PubSub.subscribe(this.BEFORE_LOAD, _config.beforeLoad);
				PubSub.subscribe(this.LOAD, _config.load);
				PubSub.subscribe(this.AFTER_LOAD, _config.afterLoad);

				/*
				 * Listen for hash changes, then load the initial page.
				 */
				$(window).bind("hashchange", function() {
					PubSub.publish(iface.BEFORE_LOAD, iface.getPublishData());
				});

				if (window.location.hash)
					PubSub.publish(this.BEFORE_LOAD, this.getPublishData());
				else if(_config.defaultView)
					PubSub.publish(this.BEFORE_LOAD, this.getPublishData(_config.defaultView));
			}
		};
	}());
});
