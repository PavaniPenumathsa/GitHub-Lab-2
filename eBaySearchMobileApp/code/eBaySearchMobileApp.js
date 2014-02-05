$("#Search").on("click", function (e) {


    var product = myproduct.value;

    var url = "http://svcs.ebay.com/services/search/FindingService/v1";
    url += "?OPERATION-NAME=findItemsByKeywords";
    url += "&SERVICE-VERSION=1.0.0";
    url += "&SECURITY-APPNAME=pavanipe-8b86-4665-b415-df5538660cfd";
    url += "&GLOBAL-ID=EBAY-US";
    url += "&RESPONSE-DATA-FORMAT=JSON";
    url += "&callback=_cb_findItemsByKeywords";
    url += "&REST-PAYLOAD";
    url += "&keywords=" + product;;
    url += "&paginationInput.entriesPerPage=6";
    url += urlfilter;

    // Submit the request 
    s = document.createElement('script'); // create script element
    s.src = url;

    document.body.appendChild(s);
});

var map;
var elevator;
var myOptions = {
    zoom: 6,
    mapTypeId: 'terrain'
};
map = new google.maps.Map($('#map')[0], myOptions);
var markers = [];

// Try HTML5 geolocation
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var pos = new google.maps.LatLng(position.coords.latitude,
        position.coords.longitude);

        var infowindow = new google.maps.InfoWindow({
            map: map,
            position: pos,
            content: 'Location found using HTML5.'
        });

        map.setCenter(pos);
    }, function () {
        handleNoGeolocation(true);
    });
} else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
}
