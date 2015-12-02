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
		
		
	//Por ahora comento este código, ayq ue nos daría problemas y no lo necesitamos. Pruebo conm un iframe, que parece la mejor y única opción

	/////***************************************************////
		// Inject our custom JavaScript into the InAppBrowser window
			//var iabRef = null;
			/*
			var control = 1;
			function replaceHeaderImage() {
				if(control){
					iabRef.executeScript({
						//code: "var img=document.querySelector('#logo a img.hidden-xs'); img.src='http://cordova.apache.org/images/cordova_bot.png';"
						code: "var div = document.querySelector('#logo a span');div.innerHTML = '<button onclick=navigator.notification.vibrate([50,150,50,200]);>Tocame</button>';"					
					}, function(a) {
						iabRef.show();
						navigator.notification.vibrate([50,150,50,200,120,500,50,100]);
					})
					control=0;
				}else{
					control=1;
				}
			}*/
	/////***************************************************////
	
		 //window.open('http://subacuaticasrealsociedad.com/estado-de-la-mar/?app=1','_blank','location=no,zoom=no,closebuttoncaption=salir,toolbar=no');
		// iabRef.addEventListener('loadstop', replaceHeaderImage);
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


function capturate() {
	var imageLink;
    console.log('Calling from CapturePhoto');
    navigator.screenshot.save(function(error,res){
        if(error){
            alert(error);
        }else{
           // alert(res.filePath); //should be path/to/myScreenshot.jpg
            //alert('Elige compartir la captura realizada'); //should be path/to/myScreenshot.jpg
            //For android
			imageLink = res.filePath;
			window.plugins.socialsharing.share('Mira el estado de la mar en la APP de Subacuáticas de la Real Sociedad de Fútbol. +INFO:',null,'file://'+imageLink, 'http://www.subacuaticasrealsociedad.com/');
			//window.plugins.socialsharing.shareViaWhatsApp('Estado de la mar', 'Mira el estado de la mar en la web de la Secci&oacute;n de actividades subacuáticas de la Real Sociedad de F&uacute;tbol','file://'+imageLink, 'http://www.subacuaticasrealsociedad.com/');

           //For iOS
           //window.plugins.socialsharing.share(null,   null,imageLink, null)
		}
    },'jpg',50,'myScreenShot');
    navigator.notification.vibrate([50,150,50,200]);
}