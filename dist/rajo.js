/**
 * Class: rajo.util
 * This class provides handy utility methods for looping, number
 * ranges, and more.
 *
 * This class is a part of the RAJO, or Random Assortment of JavaScript Objects
 * library.
 *
 * Author:
 *    Adam Presley
 *
 * License (BSD 2-Clause):
 *    > Copyright 2013 Adam Presley. All rights reserved.
 *    >
 *    > Redistribution and use in source and binary forms, with or without
 *    > modification, are permitted provided that the following conditions are met:
 *    >
 *    > 1. Redistributions of source code must retain the above copyright notice, this
 *    >    list of conditions and the following disclaimer.
 *    >
 *    > 2. Redistributions in binary form must reproduce the above copyright notice,
 *    >    this list of conditions and the following disclaimer in the documentation
 *    >    and/or other materials provided with the distribution.
 *    >
 *    > THIS SOFTWARE IS PROVIDED BY Adam Presley "AS IS" AND ANY EXPRESS OR IMPLIED
 *    > WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 *    > MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
 *    > EVENT SHALL Adam Presley OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 *    > INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 *    > LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *    > PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 *    > LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
 *    > OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 *    > ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Class: rajo.dom
 * Class offering small, quick DOM utilities.
 *
 * This class is a part of the RAJO, or Random Assortment of JavaScript Objects
 * library.
 *
 * Author:
 *    Adam Presley
 *
 * Dependencies:
 *    * <rajo.util>
 *    * jquery
 *
 * License (BSD 2-Clause):
 *    > Copyright 2013 Adam Presley. All rights reserved.
 *    >
 *    > Redistribution and use in source and binary forms, with or without
 *    > modification, are permitted provided that the following conditions are met:
 *    >
 *    > 1. Redistributions of source code must retain the above copyright notice, this
 *    >    list of conditions and the following disclaimer.
 *    >
 *    > 2. Redistributions in binary form must reproduce the above copyright notice,
 *    >    this list of conditions and the following disclaimer in the documentation
 *    >    and/or other materials provided with the distribution.
 *    >
 *    > THIS SOFTWARE IS PROVIDED BY Adam Presley "AS IS" AND ANY EXPRESS OR IMPLIED
 *    > WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 *    > MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
 *    > EVENT SHALL Adam Presley OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 *    > INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 *    > LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *    > PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 *    > LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
 *    > OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 *    > ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Class: rajo.pubsub
 * PubSub, is a class which provies the functions necessary for implementing
 * the Publish/Subscribe Pattern (http://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern).
 *
 * This class is a part of the RAJO, or Random Assortment of JavaScript Objects
 * library.
 *
 * Author:
 *    Adam Presley
 *
 * Dependencies:
 *    * <rajo.util>
 *
 * License (BSD 2-Clause):
 *    > Copyright 2013 Adam Presley. All rights reserved.
 *    >
 *    > Redistribution and use in source and binary forms, with or without
 *    > modification, are permitted provided that the following conditions are met:
 *    >
 *    > 1. Redistributions of source code must retain the above copyright notice, this
 *    >    list of conditions and the following disclaimer.
 *    >
 *    > 2. Redistributions in binary form must reproduce the above copyright notice,
 *    >    this list of conditions and the following disclaimer in the documentation
 *    >    and/or other materials provided with the distribution.
 *    >
 *    > THIS SOFTWARE IS PROVIDED BY Adam Presley "AS IS" AND ANY EXPRESS OR IMPLIED
 *    > WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 *    > MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
 *    > EVENT SHALL Adam Presley OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 *    > INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 *    > LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *    > PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 *    > LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
 *    > OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 *    > ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Class: rajo.service
 * This object gives a JavaScript programmer the ability to define service
 * objects which provides a layer between the JavaScript application
 * and a RESTful service layer. An object created using this class
 * has helper methods which aide in performing common HTTP actions
 * such as GET, POST, DELETE, and PUT. A simple service object that
 * provides a basic GET method might look something like this.
 *
 *    > var ExampleService = RajoService.create({
 *    >    endpoint: "/example",
 *    >
 *    >    getRecord: function(id) {
 *    >        return this.$get([ id ]);
 *    >    }
 *    > });
 *
 * The above code will create a new service object (class) named
 * *ExampleService*. This object will have a function named
 * *getRecord()* which takes an ID, makes a GET request to the
 * endpoint found at the URL "/example", and returns a jQuery AJAX
 * promise object. The resulting GET URL would look like this if
 * the id parameter had a value of 100.
 *
 *    > /example/100
 *
 * This class is a part of the RAJO, or Random Assortment of JavaScript Objects
 * library.
 *
 * Author:
 *    Adam Presley
 *
 * Dependencies:
 *    * <rajo.util>
 *    * jquery
 *
 * License (BSD 2-Clause):
 *    > Copyright 2013 Adam Presley. All rights reserved.
 *    >
 *    > Redistribution and use in source and binary forms, with or without
 *    > modification, are permitted provided that the following conditions are met:
 *    >
 *    > 1. Redistributions of source code must retain the above copyright notice, this
 *    >    list of conditions and the following disclaimer.
 *    >
 *    > 2. Redistributions in binary form must reproduce the above copyright notice,
 *    >    this list of conditions and the following disclaimer in the documentation
 *    >    and/or other materials provided with the distribution.
 *    >
 *    > THIS SOFTWARE IS PROVIDED BY Adam Presley "AS IS" AND ANY EXPRESS OR IMPLIED
 *    > WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 *    > MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
 *    > EVENT SHALL Adam Presley OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 *    > INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 *    > LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *    > PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 *    > LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
 *    > OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 *    > ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Class: rajo.singlepage
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
 * Dependencies:
 *    * <rajo.pubsub>
 *    * <rajo.util>
 *    * jquery
 *
 * License (BSD 2-Clause):
 *    > Copyright 2013 Adam Presley. All rights reserved.
 *    >
 *    > Redistribution and use in source and binary forms, with or without
 *    > modification, are permitted provided that the following conditions are met:
 *    >
 *    > 1. Redistributions of source code must retain the above copyright notice, this
 *    >    list of conditions and the following disclaimer.
 *    >
 *    > 2. Redistributions in binary form must reproduce the above copyright notice,
 *    >    this list of conditions and the following disclaimer in the documentation
 *    >    and/or other materials provided with the distribution.
 *    >
 *    > THIS SOFTWARE IS PROVIDED BY Adam Presley "AS IS" AND ANY EXPRESS OR IMPLIED
 *    > WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 *    > MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
 *    > EVENT SHALL Adam Presley OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 *    > INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 *    > LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *    > PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 *    > LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
 *    > OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 *    > ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Class: rajo.identity.persona
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
 * License (BSD 2-Clause):
 *    > Copyright 2013 Adam Presley. All rights reserved.
 *    >
 *    > Redistribution and use in source and binary forms, with or without
 *    > modification, are permitted provided that the following conditions are met:
 *    >
 *    > 1. Redistributions of source code must retain the above copyright notice, this
 *    >    list of conditions and the following disclaimer.
 *    >
 *    > 2. Redistributions in binary form must reproduce the above copyright notice,
 *    >    this list of conditions and the following disclaimer in the documentation
 *    >    and/or other materials provided with the distribution.
 *    >
 *    > THIS SOFTWARE IS PROVIDED BY Adam Presley "AS IS" AND ANY EXPRESS OR IMPLIED
 *    > WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 *    > MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
 *    > EVENT SHALL Adam Presley OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 *    > INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 *    > LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *    > PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 *    > LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
 *    > OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 *    > ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/*
 * Class: rajo.ui.bootstrapmodal
 * Provides the ability to create arbitrary Bootstrap Modal dialogs
 * without having the supporting HTML markup. These functions will
 * generate the correct markup and handle display and teardown.
 *
 * This class is a part of the RAJO, or Random Assortment of JavaScript Objects
 * library.
 *
 * Author:
 *    Adam Presley
 *
 * Dependencies:
 *    * jquery
 *    * bootstrap
 *
 * License (BSD 2-Clause):
 *    > Copyright 2013 Adam Presley. All rights reserved.
 *    >
 *    > Redistribution and use in source and binary forms, with or without
 *    > modification, are permitted provided that the following conditions are met:
 *    >
 *    > 1. Redistributions of source code must retain the above copyright notice, this
 *    >    list of conditions and the following disclaimer.
 *    >
 *    > 2. Redistributions in binary form must reproduce the above copyright notice,
 *    >    this list of conditions and the following disclaimer in the documentation
 *    >    and/or other materials provided with the distribution.
 *    >
 *    > THIS SOFTWARE IS PROVIDED BY Adam Presley "AS IS" AND ANY EXPRESS OR IMPLIED
 *    > WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 *    > MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
 *    > EVENT SHALL Adam Presley OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 *    > INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 *    > LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *    > PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 *    > LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
 *    > OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 *    > ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

define("rajo.util",[],function(){var e={each:function(e,t){var n=0;if(e.hasOwnProperty("length"))for(n=0;n<e.length;n++)t(e[n]);else if(typeof e=="object")for(n in e)e.hasOwnProperty(n)&&t(e[n])},eachKvp:function(e,t){var n=0;for(n in e)e.hasOwnProperty(n)&&t({key:n,value:e[n]})},map:function(t,n){var r=[];return e.each(function(e){r.push(n(e))},t),r},mapArrayToObject:function(t,n){var r={},i=[];return e.each(function(e){i=n(e),r[i.key]=i.value},t),r},range:function(){var e=[],t=0,n=0,r=1,i=0;if(arguments.length>0){arguments.length===1?n=arguments[0]:arguments.length===2?(t=arguments[0],n=arguments[1]):arguments.length>2&&(t=arguments[0],n=arguments[1],r=arguments[2]);for(i=0;i<n;i+=r)e.push(i)}return e},reduce:function(t,n,r){var i=t;return e.eachKvp(n,function(e){i=r(i,e)}),i}};return e}),define("rajo.dom",["rajo.util","jquery"],function(e,t){var n={getEl:function(e){return document.getElementById(e)},getEls:function(t){return e.map(t,n.getEl)},makePacket:function(r){return e.mapArrayToObject(n.getEls(r),function(e){return{key:e.id,value:t(e).val()}})}};return n}),define("rajo.pubsub",["rajo.util"],function(e){var t={subscribers:{},subscribe:function(e,n,r){var i={eventName:e,handler:n,scope:r||undefined};e in t.subscribers?t.subscribers[e].push(i):t.subscribers[e]=[i]},publish:function(n,r){var i=0;r=r||{},t.subscribers.hasOwnProperty(n)&&e.each(t.subscribers[n],function(e){e.hasOwnProperty("scope")&&e.scope!==undefined?e.handler.call(e.scope,r):e.handler(r)})}};return t}),define("rajo.service",["rajo.util","jquery"],function(e,t){var n={$paramsToSlashes:function(t){var n=[];return t?t.hasOwnProperty("length")?"/"+t.join("/"):typeof t=="object"?(e.eachKvp(t,function(e){n.push(e.key),n.push(e.value)}),"/"+n.join("/")):"":""},$delete:function(e){var r={},i=this.endpoint;return this.useSlashWithGetParams?i+=n.$paramsToSlashes(e):e&&(r=e),t.ajax({url:i,dataType:"json",data:r,type:"DELETE"})},$get:function(e){var r={},i=this.endpoint;return this.useSlashWithGetParams?i+=n.$paramsToSlashes(e):e&&(r=e),t.ajax({url:i,dataType:"json",data:r,type:"GET"})},$post:function(e){var n=e||{};return t.ajax({url:this.endpoint,dataType:"json",data:n,type:"POST"})},$put:function(e,r){var i=r||{},s=this.endpoint;return this.useSlashWithGetParams?s+=n.$paramsToSlashes(e):e&&(i=e),t.ajax({url:s,dataType:"json",data:i,type:"PUT"})},create:function(t){var r={};if(!t.hasOwnProperty("endpoint"))throw"You must specify an endpoint when creating services!";return r.$delete=n.$delete,r.$get=n.$get,r.$post=n.$post,r.$put=n.$put,r.useSlashWithGetParams=!0,e.eachKvp(t,function(e){r[e.key]=e.value}),r}};return n}),define("rajo.singlepage",["rajo.pubsub","jquery","rajo.util"],function(e,t,n){return function(){var r=this,i="rajo.singlepage.beforeload",s="rajo.singlepage.load",o="rajo.singlepage.afterload",u=function(e,t){var n=e(t);return n.config=d,n},a=function(e){return d.baseViewPath+e+"."+d.viewExtension},f=function(e){return e||(e=window.location.hash.replace("#","")||d.defaultView),l(e)},l=function(e){var t=e,r=null,i=[];return e.indexOf("?")>-1?(r={},i=e.split("?"),t=i[0],i=i[1].split("&"),n.each(i,function(e){var t=e.split("=");r[t[0]]=t.length>1?t[1]:null})):e.indexOf("/")>-1&&(r=[],i=e.split("/"),t=i[0],i.length>1&&n.each(i,function(e){r.push(e)})),{page:t,params:r}},c=function(e,n){t.get(a(e.page),function(t){d.cacheViews&&(d.views[a(e.page)]=t),n(e,t)})},h=function(e,t){t(e,d.views[a(e.page)])},p=function(n,r){var i=t(d.el);i[d.animationOut](d.animationOutSpeed,function(){i.html(r)[d.animationIn](d.animationInSpeed,function(){e.publish(o,n)})})},d={el:null,baseViewPath:"",viewExtension:"html",cacheViews:!1,defaultView:null,views:[],animationIn:"show",animationInSpeed:"normal",animationOut:"hide",animationOutSpeed:"0",beforeLoad:function(t){e.publish(s,t)},load:function(e){d.cacheViews&&a(e.page)in d.views?h(e,p):c(e,p)},afterLoad:function(e){}};return{BEFORE_LOAD:i,LOAD:s,AFTER_LOAD:o,getHash:function(){return window.location.hash.replace("#","")},getPublishData:function(e){return u(f,e)},setup:function(n){var r=this;d=t.extend(d,n),d.baseViewPath.indexOf("/",d.baseViewPath.length-2)===-1&&(d.baseViewPath+="/"),e.subscribe(this.BEFORE_LOAD,d.beforeLoad),e.subscribe(this.LOAD,d.load),e.subscribe(this.AFTER_LOAD,d.afterLoad),t(window).bind("hashchange",function(){e.publish(r.BEFORE_LOAD,r.getPublishData())}),window.location.hash?e.publish(this.BEFORE_LOAD,this.getPublishData()):d.defaultView&&e.publish(this.BEFORE_LOAD,this.getPublishData(d.defaultView))}}}()}),define("rajo.identity.persona",["rajo.pubsub","//login.persona.org/include.js"],function(e){return{setup:function(t){navigator.id.watch({loggedInUser:t,onlogin:function(t){e.publish("identity.persona.login",t)},onlogout:function(){e.publish("identity.persona.logout")}})},signIn:function(){navigator.id.request()},signOut:function(){navigator.id.logout()}}}),define("rajo.ui.bootstrapmodal",["jquery","bootstrap"],function(e){var t={dialogInformationImage:"/resources/images/dialog-information.png",dialogErrorImage:"/resources/images/dialog-error.png"};return t.Modal=function(t){this.getId=function(){return u.id},this.close=function(){a.modal("hide")},this.show=function(){a.modal("show")},this.toggle=function(){a.modal("toggle")};var n=function(){var t,n,o,f,l,c,h,p,d;a=e("<div />").attr({"class":"modal "+(u.animate?" fade":""),id:u.id}),t=e("<div />").attr({"class":"modal-dialog"}),n=e("<div />").attr({"class":"modal-content"}),f=e("<button />").attr({type:"button","class":"close","data-dismiss":"modal","aria-hidden":!0}).html("&times;"),o=e("<h4 />").html(u.header),l=e("<div />").attr({"class":"modal-header"}),u.headerStyle.length>0&&l.attr({style:u.headerStyle}),l.append(f),l.append(o),c=e("<div />").attr({"class":"modal-body"}).html(u.body),u.bodyStyle.length>0&&c.attr({style:u.bodyStyle}),h=e("<div />").attr({"class":"modal-footer"});for(p in u.buttons){d="btn"+(u.buttons[p].type&&u.buttons[p].type==="primary"?" btn-primary":"");var v=e("<button />").attr({type:"button",href:"#","class":d,id:s("item"),name:s("item")}),m="";u.buttons[p].icon&&(m+='<span class="glyphicon glyphicon-'+u.buttons[p].icon+'"></span> '),m+=p,v.html(m).on("click",u.buttons[p].handler).appendTo(h)}n.append(l),n.append(c),n.append(h),t.append(n),a.append(t),e("body").append(a),a.modal({keyboard:u.keyboard,backdrop:u.backdrop,show:u.show}),a.on("hidden",i),r()},r=function(){var e=function(e){return function(){i(),u.events[e]()}};for(var t in u.events)t==="hidden"?a.on(t,e(t)):a.on(t,u.events[t])},i=function(){a.remove()},s=function(e){return e+(new Date).getTime()},o=this,u=e.extend({id:s("bsp-modal-"),header:"Header",headerStyle:"",body:"",bodyStyle:"",buttons:{Close:{type:"primary",handler:function(e){o.close()}}},keyboard:!0,backdrop:!0,show:!0,animate:!0,events:{}},t),a;n()},t.Modal.YesNo=function(n){var r=this,i=e.extend({header:n.header||"Header",body:n.body||"Are you sure?",buttons:{Yes:{handler:function(e){n.handler&&(n.hasOwnProperty("scope")?n.handler.call(n.scope,"yes",e):n.handler("yes",e)),r.modal.close()},icon:"thumbs-up"},No:{type:"primary",handler:function(e){n.handler&&(n.hasOwnProperty("scope")?n.handler.call(n.scope,"no",e):n.handler("no",e)),r.modal.close()},icon:"thumbs-down"}},show:n.show||!0},n);this.modal=new t.Modal(i)},t.Modal.OK=function(n){var r=this,i=e.extend({header:n.header||"Confirmation",body:n.body||"OK",buttons:{OK:{type:"primary",handler:function(e){n.handler&&(n.hasOwnProperty("scope")?n.handler.call(n.scope,"ok",e):n.handler("ok",e)),r.modal.close()}}},show:n.show||!0},n);this.modal=new t.Modal(i)},t.Modal.OkCancel=function(n){var r=this,i=e.extend({header:n.header||"Confirmation",body:n.body||"OK",buttons:{OK:{type:"primary",handler:function(e){n.handler&&(n.hasOwnProperty("scope")?n.handler.call(n.scope,"ok",e):n.handler("ok",e)),r.modal.close()}},Cancel:{handler:function(e){n.handler&&(n.hasOwnProperty("scope")?n.handler.call(n.scope,"cancel",e):n.handler("cancel",e)),r.modal.close()}}},show:n.show||!0},n);this.modal=new t.Modal(i)},t.Modal.Error=function(n){var r=this,i=e.extend({header:n.header||"Error",body:n.body||"Error",buttons:{OK:{type:"primary",handler:function(e){n.handler&&(n.hasOwnProperty("scope")?n.handler.call(n.scope,"ok",e):n.handler("ok",e)),r.modal.close()}}},show:n.show||!0},n);i.body='<img src="'+t.dialogErrorImage+'" style="float: left; margin-right: 10px" />'+i.body,this.modal=new t.Modal(i)},t}),define("rajo/rajo",["rajo.dom","rajo.pubsub","rajo.service","rajo.singlepage","rajo.util","rajo.identity.persona","rajo.ui.bootstrapmodal"],function(){});