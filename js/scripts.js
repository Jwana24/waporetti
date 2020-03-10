// Show an element
var show = function (elem) {
	elem.style.display = 'block';
};

// Hide an element
var hide = function (elem) {
	elem.style.display = 'none';
};

// Toggle element visibility
var toggle = function (elem) {
	// If the element is visible, hide it
	if (window.getComputedStyle(elem).display === 'block') {
		hide(elem);
		return;
	}
	// Otherwise, show it
	show(elem);
};

document.addEventListener('click', function (event) {

	// Make sure clicked element is our toggle
	if (!event.target.classList.contains('toggle')) return;

	// Prevent default link behavior
	event.preventDefault();

	// Get the content
	var content = document.querySelector(event.target.hash);
	if (!content) return;

	// Toggle the content
	toggle(content);

}, false);


//////////////////////////////////////////////////////////////////
// CARTES ////////////////////////////////////////////////////////
// CARTE 1 ///////////////////////////////////////////////////////

///////// Initialize the map
var map = L.map('map1').setView([44.8623, -0.5405], 13);
 L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
}).addTo(map);
map.scrollWheelZoom.disable();

/////////  Define styles and icons
var myStyle = {
    "color": "#f57c00",
    "weight": 5,
    "opacity": 0.65
};

var orangeIcon = L.icon({
    iconUrl: 'images/morange.svg',
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [19, 60], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

/////////  Add way to map
L.geoJSON(firstWay, {
    style: myStyle
}).addTo(map);

/////////  add markers to map
L.marker([44.841325, -0.563221], {icon:orangeIcon}).addTo(map);
L.marker([44.877708, -0.534639], {icon:orangeIcon}).addTo(map);



// CARTE 2 ///////////////////////////////////////////////////////

///////// Initialize the map
var map2 = L.map('map2').setView([44.8520,-0.5565], 13);
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
}).addTo(map2);
map2.scrollWheelZoom.disable();

/////////  Define styles and icons
var myStyle2 = {
    "color": "#00bcd4",
    "weight": 5,
    "opacity": 0.65
};

var blueIcon = L.icon({
    iconUrl: 'images/mblue.svg',
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [19, 60],  // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

/////////  Add way to map
L.geoJSON(secondWay, {
  style: myStyle2
}).addTo(map2);

/////////  add markers to map
L.marker([44.84163, -0.563221], {icon:blueIcon}).addTo(map2);
L.marker([44.843394, -0.568972], {icon:blueIcon}).addTo(map2);
L.marker([44.85021, -0.563307], {icon:blueIcon}).addTo(map2);
L.marker([44.862135, -0.548716], {icon:blueIcon}).addTo(map2);



// CARTE 3 ///////////////////////////////////////////////////////

///////// Initialize the map
var map3 = L.map('map3').setView([44.8234,-0.5350], 13);
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
}).addTo(map3);
map3.scrollWheelZoom.disable();

/////////  Define styles and icons
var myStyle3 = {
    "color": "#e91e63",
    "weight": 5,
    "opacity": 0.65
};
var pinkIcon = L.icon({
    iconUrl: 'images/mpink.svg',
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [19, 60],  // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.geoJSON(thirdWay, {
  style: myStyle3
}).addTo(map3);

L.marker([44.84163,-0.562963], {icon:pinkIcon}).addTo(map3);
L.marker([44.832295,-0.548748], {icon:pinkIcon}).addTo(map3);
L.marker([44.826504,-0.546623], {icon:pinkIcon}).addTo(map3);
L.marker([44.818704,-0.530788], {icon:pinkIcon}).addTo(map3);
L.marker([44.799066,-0.528191], {icon:pinkIcon}).addTo(map3);
