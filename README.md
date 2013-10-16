RAJO
====

*Random Assortment of JavaScript Objects*

This library is an assortment of JavaScript objects I have built and used
over time that needed a home. They make use of RequireJS AMD loader
and offer the following features.

* Utilities - Map/reduce functions, for each loops
* Publish/Subscribe - An object for event driven programming using the publish/subscribe model
* Services - Build JavaScript service objects that interface with RESTful-style back-ends
* Single Page App - An object for making single-page style apps
* Mozilla Persona - A simple Mozilla Persona wrapper that published events for login and log out
* Bootstrap Modal - A wrapper for dynamically creating and displaying a Bootstrap 3 modal dialog without having to create markup


## Building
To build a minified version and documentation you must have NodeJS + NPM + Grunt installed. Once
installed you can follow these commands to build.

```bash
$ npm install
$ grunt
```

This will generate a combined, minified JavaScript file in **dist/rajo.js** as well
as the library documentation in **dist/docs/html**.

## License - BSD 2-clause
Copyright (c) 2013, Adam Presley
All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

  Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.