/**
 * Class: Persona
 * This class provides a simple object for quickly defining the setup for using
 * the Mozilla Persona identity management library. It offers functions for
 * signing in and logging out.
 *
 * This class is a part of the RAJO, or Random Assortment of JavaScript Objects
 * library.
 *
 * Author:
 *    Adam Presley
 *
 * Dependencies:
 *    * //login.persona.org/include.js
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
define(["modules/util/PubSub", "//login.persona.org/include.js"], function(PubSub) {
	"use strict";

	return {
		/**
		 * Function: setup
		 * Initializes the Mozilla Persona service interactions. You provide it a current
		 * email address, if any.
		 *
		 * This method also sets up events to be published when a log in and log out
		 * occurs. These events are published using the <rajo.pubsub> object.
		 *
		 * Events:
		 *    identity.persona.login - When a login attempt occurs. The Persona assertion object is passed to the subscriber
		 *    identity.persona.logout - When a logout attempt occurs.
		 *
		 * Parameters:
		 *    email - Email address. Blank if none provided yet
		 */
		setup: function(email) {
			navigator.id.watch({
				loggedInUser: email,
				onlogin: function(assertion) {
					PubSub.publish("identity.persona.login", assertion);
				},
				onlogout: function() {
					PubSub.publish("identity.persona.logout");
				}
			});
		},

		/**
		 * Function: signIn
		 * Attempts to verify the current email address as logged in with Persona.
		 */
		signIn: function() {
			navigator.id.request();
		},

		/**
		 * Function: signOut
		 * Attempts to sign the current email address out of Persona.
		 */
		signOut: function() {
			navigator.id.logout();
		}
	};
});