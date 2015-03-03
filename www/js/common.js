function isUndefinedOrNull(obj) {
         return !angular.isDefined(obj) || obj===null;
}
function getCurrentPosition(){
	navigator.geolocation.getCurrentPosition(geolocationSuccess,geolocationError);
}
var geolocationSuccess = function(position){
  window.localStorage.setItem("latitude", position.coords.latitude);
} 
var geolocationError = function(error){
  //
} 
function isNorthern(){
	var latitude = window.localStorage.getItem("latitude");
	if(isUndefinedOrNull(latitude)){
		if(parseInt(latitude) >= 0) return true;
		return false;
	}
}
