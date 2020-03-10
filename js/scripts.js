
var map = L.map('map1').setView([44.8400,-0.5530], 13);

L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
}).addTo(map);



L.geoJSON(firstWay, {

}).addTo(map);



var map2 = L.map('map2').setView([44.8400,-0.5530], 13);

L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
}).addTo(map2);

L.geoJSON(secondWay, {

}).addTo(map2);


var map3 = L.map('map3').setView([44.8400,-0.5530], 13);

L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
}).addTo(map3);

L.geoJSON(thirdWay, {

}).addTo(map3);
