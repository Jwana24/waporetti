// Show an element
$(document).ready (function() {


  $('.scrollTo').click(function() {
    $target = $(this).find('a').attr('href');
    $topScroll=$($target).offset().top;
    $("html, body").animate({scrollTop:$topScroll}, 400);
    $('#menu-burger').css('margin-left', '110vw');
    $('.burgerMenu').html('<i class="material-icons">menu</i>');
    $('.burgerMenu').addClass('show');
  });

  $(document).on('click', '.burgerMenu', function(e) {
    e.preventDefault();
    $this=$(this);
    if ($this.hasClass('show')) {
      $this.removeClass('show');
      $('#menu-burger').css('margin-left', '0px');
      $this.html('<i class="material-icons">close</i>');

    }
    else {
      $('#menu-burger').css('margin-left', '110vw');
      $this.html('<i class="material-icons">menu</i>');
      $this.addClass('show');
    }
  });

});

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
    iconSize:     [38, 60], // size of the icon
    iconAnchor:   [19, 60], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
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
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [19, 60],  // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

/////////  Add way to map
L.geoJSON(secondWay, {
  style: myStyle2
}).addTo(map2);

/////////  add markers to map
var marker21 = L.marker([44.843394, -0.568972], {icon:blueIcon}).addTo(map2);
marker21.bindPopup("<b>Stalingrad</b>");

var marker22 = L.marker([44.85021, -0.563307], {icon:blueIcon}).addTo(map2);
marker22.bindPopup("<b>Stalingrad</b>");

var marker23 = L.marker([44.862135, -0.548716], {icon:blueIcon}).addTo(map2);
marker23.bindPopup("<b>Stalingrad</b>");




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
