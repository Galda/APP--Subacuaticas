/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		
		/*
		function replaceHeaderImage() {
			iabRef.executeScript({
				code: "var img=document.querySelector('#logo a img.hidden-xs'); img.src='http://cordova.apache.org/images/cordova_bot.png'; alert(img.src);"
			}, function() {});
		}
		
		iabRef = window.open('http://subacuaticasrealsociedad.com/estado-de-la-mar/?app=1','_blank','location=no');
		iabRef.addEventListener('loadstop', replaceHeaderImage);	
		
		*/
		
		
    // Inject our custom JavaScript into the InAppBrowser window
    //
		var iabRef = null;
		var control = 1;
		function replaceHeaderImage() {
			if(control){
				iabRef.executeScript({
					//code: "var img=document.querySelector('#logo a img.hidden-xs'); img.src='http://cordova.apache.org/images/cordova_bot.png';"
					code: "var div = document.querySelector('#logo a span'); var text='Dame un besito';div.innerHTML = '<button onclick=navigator.notification.vibrate([50,150,50,200]);>Tocame</button>';"					
				}, function(a) {
					iabRef.show();
					navigator.notification.vibrate([50,150,50,200,120,500,50,100]);
				})
				control=0;
			}else{
				control=1;
			}
		}

		// device APIs are available
		//
		 iabRef = window.open('http://subacuaticasrealsociedad.com/estado-de-la-mar/?app=1','_blank','location=no,hidden=yes,zoom=no,closebuttoncaption=salir,toolbar=no');
		 iabRef.addEventListener('loadstop', replaceHeaderImage);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

