<<<<<<< HEAD

function scrollToSection(elem) {
    let clicked = document.getElementById(elem);
    let target = clicked.getAttribute('data-target');
    target=target.split('#');
    target=target[1];
    let destination = document.getElementById(target);
    let top = destination.offsetTop - 45;
    window.scrollTo(0, top);
=======

function scrollToSection(elem) {
    let clicked = document.getElementById(elem);
    let target = clicked.getAttribute('data-target');
    target=target.split('#');
    target=target[1];
    let destination = document.getElementById(target);
    let top = destination.offsetTop - 45;

    window.scrollTo(0, top);
    while(window.scrollY != top) {
      console.log(window.scrollTop);
    }


>>>>>>> feat/js
}


function burger() {
  var menu = document.getElementById('menu-burger');
  var button = document.getElementById('burger-button');
  var classButton = button.className;

  console.log(classButton);
  if (classButton == 'burgerMenu show') {
    menu.style.marginLeft='0px';
    button.className='burgerMenu hide';
    button.innerHTML='<i class="material-icons">close</i>';
  }
  if (classButton == 'burgerMenu hide') {
    menu.style.marginLeft='110vw';
    button.className='burgerMenu show';
    button.innerHTML='<i class="material-icons">menu</i>';
  }
}

function hideBurger() {
  var menu = document.getElementById('menu-burger');
  var button = document.getElementById('burger-button');
    menu.style.marginLeft='110vw';
    button.className='burgerMenu show';
    button.innerHTML='<i class="material-icons">menu</i>';
}

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
    "weight": 8,
    "opacity": 0.65
};

var orangeIcon = L.icon({
    iconUrl: 'images/morange.svg',
    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [19, 60],  // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

/////////  Add way to map
L.geoJSON(firstWay, {
    style: myStyle
}).addTo(map);

/////////  add markers to map
var marker11 = L.marker([44.841325, -0.563221], {icon:orangeIcon}).addTo(map);
marker11.bindPopup("<b>Stalingrad</b>");
var marker12 = L.marker([44.877708, -0.534639], {icon:orangeIcon}).addTo(map);
marker12.bindPopup("<b>Lormont</b>");



// CARTE 2 ///////////////////////////////////////////////////////

///////// Initialize the map
var map2 = L.map('map2').setView([44.8520,-0.5565], 13);
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
}).addTo(map2);
map2.scrollWheelZoom.disable();

/////////  Define styles and icons
var myStyle2 = {
    "color": "#00bcd4",
    "weight": 8,
    "opacity": 0.65
};

var blueIcon = L.icon({
    iconUrl: 'images/mblue.svg',
    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [19, 60],  // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

/////////  Add way to map
L.geoJSON(secondWay, {
  style: myStyle2
}).addTo(map2);

/////////  add markers to map
var marker21 = L.marker([44.843394, -0.568972], {icon:blueIcon}).addTo(map2);
marker21.bindPopup("<b>Bourse</b>");

var marker22 = L.marker([44.85021, -0.563307], {icon:blueIcon}).addTo(map2);
marker22.bindPopup("<b>La guiguette</b>");

var marker23 = L.marker([44.862135, -0.548716], {icon:blueIcon}).addTo(map2);
marker23.bindPopup("<b>Cité du vin</b>");

var marker24 = L.marker([44.841325, -0.563221], {icon:blueIcon}).addTo(map2);
marker24.bindPopup("<b>Stalingrad</b>");




// CARTE 3 ///////////////////////////////////////////////////////

///////// Initialize the map
var map3 = L.map('map3').setView([44.8234,-0.5350], 13);
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
}).addTo(map3);
map3.scrollWheelZoom.disable();

/////////  Define styles and icons
var myStyle3 = {
    "color": "#e91e63",
    "weight": 8,
    "opacity": 0.65
};
var pinkIcon = L.icon({
    iconUrl: 'images/mpink.svg',
    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [19, 60],  // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

L.geoJSON(thirdWay, {
  style: myStyle3
}).addTo(map3);

var marker31 = L.marker([44.84163,-0.562963], {icon:pinkIcon}).addTo(map3);
marker31.bindPopup("<b>Stalingrad</b>");

var marker32 = L.marker([44.832295,-0.548748], {icon:pinkIcon}).addTo(map3);
marker32.bindPopup("<b>Floirac</b>");

var marker33 = L.marker([44.826504,-0.546623], {icon:pinkIcon}).addTo(map3);
marker33.bindPopup("<b>MECA</b>");

var marker34 = L.marker([44.818704,-0.530788], {icon:pinkIcon}).addTo(map3);
marker34.bindPopup("<b>Bouliac</b>");

var marker35 = L.marker([44.799066,-0.528191], {icon:pinkIcon}).addTo(map3);
marker35.bindPopup("<b>Bègles</b>");
