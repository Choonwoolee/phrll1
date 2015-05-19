function isUndefinedOrNull(obj) {
         return !angular.isDefined(obj) || obj===null;
}
function getCurrentPosition(){
	navigator.geolocation.getCurrentPosition(geolocationSuccess,geolocationError);
}

function getLocale(){
	var locale = window.localStorage.getItem("locale");
	return validLocale(locale);
}
function validLocale(locale){
	var locales = ["en","ko","ja","zh","es"];
	for(var i=0;i<locales.length;i++){
		if(locale.indexOf(locales[i]) == 0){
			return locales[i];
		}
	}
	return locales[0];
}

function setLocale(){
	var lang = navigator.language;
	window.localStorage.setItem("locale", lang);
	/*
	navigator.globalization.getPreferredLanguage(
          function (language) {
          	alert("language:"+language);
            window.localStorage.setItem("locale", language.value);
          },
          function () {}
   );
	*/
}
function changeLocale(angular){
	alert("changeLocale");
	 angular.module('app').run(function (gettextCatalog) {
	 		var language = getLocale();
	 		alert("changeLocale:"+language);
	    gettextCatalog.setCurrentLanguage(language);
	    gettextCatalog.debug = true;
   });
}
var geolocationSuccess = function(position){
  window.localStorage.setItem("latitude", position.coords.latitude);
  var latitude = window.localStorage.getItem("latitude");
  var isNorthern = window.localStorage.getItem("isNorthern");
  if(!isUndefinedOrNull(latitude)&& isUndefinedOrNull(isNorthern)){
		if(parseInt(latitude) >= 0) {
			window.localStorage.setItem("isNorthern",1);
		}else{
			window.localStorage.setItem("isNorthern",0);
		}
	}
  
} 
var geolocationError = function(error){
  //
} 
function isNorthern(){
	var latitude = window.localStorage.getItem("isNorthern");
	if(latitude == 1 || isUndefinedOrNull(latitude)){
		return 1;
	}else return 0;
}
