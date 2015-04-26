//Prepara el Mapa Base

var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'+' Powered by <a href="http://overpass-api.de/">overpass-api.de</a>',
    osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

var osm = new L.TileLayer(osmUrl, { attribution: osmAttrib});

//Juego de iconos

var iconografia ={

  asignaicono: function(ico) {
    
    var iniciosimbolo = '<i class="fa ';
    var finsimbolo ='"></i>';
    switch (ico){


//Turismo
      case "information": var simbolo = 'fa-info'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;
      case "camp_site": var simbolo = '<i class="icon-campsite"></i>'; return simbolo;
      case "caravan_site": var simbolo = '<i class="icon-campsite"></i>'; return simbolo;
      case "motel": var simbolo = 'fa-bed'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;
      case "hostel": var simbolo = 'fa-bed'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;
      case "guest_house": var simbolo = 'fa-bed'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;
      case "hotel": var simbolo = 'fa-bed'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;
 
      case "artwork": var simbolo = '<i class="icon-monument"></i>'; return simbolo;

      case "museum": var simbolo = '<i class="icon-museum"></i>'; return simbolo;
//ocio

      case "bar": var simbolo = '<i class="icon-bar"></i>'; return simbolo;
      case "nightclub": var simbolo = '<i class="icon-bar"></i>'; return simbolo;
      case "pub": var simbolo = '<i class="icon-bar"></i>'; return simbolo;
      case "cafe": var simbolo = '<i class="icon-cafe"></i>'; return simbolo;

      case "restaurant": var simbolo = '<i class="icon-restaurant"></i>'; return simbolo;
      case "food_court": var simbolo = '<i class="icon-restaurant"></i>'; return simbolo;    
      case "fast_food":  var simbolo = '<i class="icon-fast-food"></i>'; return simbolo;

      case "bicycle_rental": var simbolo = '<i class="icon-bicycle"></i>'; return simbolo;
      case "library": var simbolo = '<i class="icon-library"></i>'; return simbolo;
      case "cinema": var simbolo = '<i class="icon-cinema"></i>'; return simbolo;
      case "theatre": var simbolo = '<i class="icon-theatre"></i>'; return simbolo;

      case "arts_centre": var simbolo = '<i class="icon-art-gallery"></i>'; return simbolo;

      case "public_building": var simbolo = 'fa-university'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;

      case "viewpoint": var simbolo = 'fa-binoculars'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;
      case "place_of_worship": var simbolo = '<i class="icon-religious-christian"></i>'; return simbolo;
      case "telephone": var simbolo = 'fa-phone'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;

//public services

      case "police": var simbolo = '<i class="icon-police"></i>'; return simbolo;
      case "courthouse": var simbolo = 'fa-gavel'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;

      
      case "post_office": var simbolo = '<i class="icon-post"></i>'; return simbolo;
      case "swimming_pool": var simbolo = '<i class="icon-swimming"></i>'; return simbolo;
  
      case "townhall": var simbolo = '<i class="icon-town-hall"></i>'; return simbolo;
      case "waste_disposal":  var simbolo = 'fa-trash'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;


//education

      case "college": var simbolo = '<i class="icon-college"></i>'; return simbolo;
      case "university": var simbolo = '<i class="icon-college"></i>'; return simbolo;
      case "school": var simbolo = '<i class="icon-school"></i>'; return simbolo;
      case "kindergarten": var simbolo = '<i class="icon-school"></i>'; return simbolo;

//Health

      case "doctors": var simbolo = '<i class=" icon-hospital"></i>'; return simbolo;
      case "clinic": var simbolo = '<i class=" icon-hospital"></i>'; return simbolo;
      case "hospital": var simbolo = '<i class=" icon-hospital"></i>'; return simbolo;
      case "pharmacy": var simbolo = '<i class="icon-pharmacy"></i>'; return simbolo;

//transporte

      case "fuel": var simbolo = '<i class="icon-fuel"></i>'; return simbolo;
      case "metro": var simbolo = 'fa-subway'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;      
      case "taxi": var simbolo = 'fa-taxi'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;
     

//Comercios

      case "bank": var simbolo = 'fa-eur'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;
      case "atm": var simbolo = 'icon-credit-card'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;

      case "convenience": var simbolo = '<i class="icon-grocery-store"></i>'; return simbolo;finsimbolo;
      case "supermarket": var simbolo = '<i class="icon-grocery-store"></i>'; return simbolo;finsimbolo;
      case "mall": var simbolo = '<i class="icon-shop"></i>'; return simbolo;
      case "department_store": var simbolo = '<i class="icon-shop"></i>'; return simbolo;
      case "clothes": var simbolo = '<i class="icon-shop"></i>'; return simbolo;
      case "shoes": var simbolo = '<i class="icon-shop"></i>'; return simbolo;
      case "boutique": var simbolo = '<i class="icon-shop"></i>'; return simbolo;
      case "bag": var simbolo = '<i class="icon-shop"></i>'; return simbolo;

      case "paint": var simbolo = '<i class="icon-art-gallery"></i>'; return simbolo;


      case "estate_agent": var simbolo = 'fa-home'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;
      case "car": var simbolo = 'fa-car'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;

      case "books": var simbolo = '<i class="icon-library"></i>';
       return simbolo;
      case "music": var simbolo = 'fa-music'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;

      case "kiosk": var simbolo = 'fa-newspapers'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;
      case "newsagent": var simbolo = 'fa-newspapers'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;
      case "stationery": var simbolo = 'fa-pencil'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;

      case "hairdresser": var simbolo = 'fa-scissors'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;
      case "optician": var simbolo = 'fa-eye'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;
      case "computer": var simbolo = 'fa-desktop'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;
      case "mobile_phone": var simbolo = 'fa-phone'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;
      case "tobacco": var simbolo = 'fa-leaf'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;
      case "organic": var simbolo = 'fa-leaf'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;
      case "car_repair": var simbolo = 'fa-wrench'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;
      case "hardware": var simbolo = 'fa-wrench'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;
      case "florist": var simbolo = '<i class="icon-garden"></i>'; return simbolo;
      case "bicycle": var simbolo = '<i class="icon-bicycle"></i>'; return simbolo;
      case "photo": var simbolo = 'fa-camera'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;
      case "gift": var simbolo = 'fa-gift'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;

      case "bakery": var simbolo = 'fa-birthday-cake'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;
    
      default: var simbolo = 'fa-asterisk'; return todosimbolo = iniciosimbolo+simbolo+finsimbolo;

    }
 
    
  },

    asignaetiqueta: function(etiq) {
    
    switch (etiq){


//Turismo
      case "information": var etiqueta = 'Información'; return etiqueta;
      case "camp_site": var etiqueta = 'Camping'; return etiqueta;
      case "caravan_site": var etiqueta = 'Camping Caravanas'; return etiqueta;
      case "motel": var etiqueta = 'Motel'; return etiqueta;
      case "hostel": var etiqueta = 'Hostal'; return etiqueta;
      case "guest_house": var etiqueta = 'Pensión'; return etiqueta;
      case "hotel": var etiqueta = 'Hotel'; return etiqueta;
 
      case "artwork": var etiqueta = 'Obra Artística'; return etiqueta;

      case "museum": var etiqueta = 'Museo'; return etiqueta;


//ocio

      case "bar": var etiqueta = 'Bar'; return etiqueta;
      case "nightclub": var etiqueta = 'Club'; return etiqueta;
      case "pub": var etiqueta = 'Pub'; return etiqueta;
      case "cafe": var etiqueta = 'Cafetería'; return etiqueta;

      case "restaurant": var etiqueta = 'Restaurante'; return etiqueta;
      case "food_court": var etiqueta = '??'; return etiqueta;    
      case "fast_food":  var etiqueta = 'Comida Rápida'; return etiqueta;

      case "bicycle_rental": var etiqueta = 'alquiler de bicicletas'; return etiqueta;
      case "library": var etiqueta = 'Biblioteca'; return etiqueta;
      case "cinema": var etiqueta = 'Cine'; return etiqueta;
      case "theatre": var etiqueta = 'Teatro'; return etiqueta;

      case "arts_centre": var etiqueta = 'Centro de Arte'; return etiqueta;

      case "public_building": var etiqueta = 'Edificio Público'; return etiqueta;

      case "viewpoint": var etiqueta = 'Vistas'; return etiqueta;
      case "place_of_worship": var etiqueta = 'Lugar de Culto'; return etiqueta;
      case "telephone": var etiqueta = 'Teléfonos/Locutorio'; return etiqueta;
    


//public services

      case "police": var etiqueta = 'Policía'; return etiqueta;
      case "courthouse": var etiqueta = 'Juzgados'; return etiqueta;

      
      case "post_office": var etiqueta = 'Oficina de Correos'; return etiqueta;
      case "swimming_pool": var etiqueta = 'Piscina'; return etiqueta;
  
      case "townhall": var etiqueta = 'Ayuntamiento'; return etiqueta;
      case "waste_disposal":  var etiqueta = 'Contenedores de Basura'; return etiqueta;


//education

      case "college": var etiqueta = 'Facultad'; return etiqueta;
      case "university": var etiqueta = 'Universidad'; return etiqueta;
      case "school": var etiqueta = 'Colegio'; return etiqueta;
      case "kindergarten": var etiqueta = 'Jardín de Infancia'; return etiqueta;

//Health

      case "doctors": var etiqueta = 'Consulta Médica'; return etiqueta;
      case "clinic": var etiqueta = 'Clínica'; return etiqueta;
      case "hospital": var etiqueta = 'Hospital'; return etiqueta;
      case "pharmacy": var etiqueta = 'Farmacia'; return etiqueta;

//transporte

      case "fuel": var etiqueta = 'Gasolinera'; return etiqueta;
      case "metro": var etiqueta = 'Metro'; return etiqueta;
      case "taxi": var etiqueta = 'Parada de Taxi'; return etiqueta;

//Comercios

      case "bank": var etiqueta = 'Banco'; return etiqueta;
      case "atm": var etiqueta = 'Cajero Automático'; return etiqueta;

      case "convenience": var etiqueta = 'Economato'; return etiqueta;
      case "supermarket": var etiqueta = 'Supermercado'; return etiqueta;
      case "mall": var etiqueta = 'Hipermercado'; return etiqueta;
      case "department_store": var etiqueta = 'Grandes Almacenes'; return etiqueta;
      case "clothes": var etiqueta = 'Tienda de Ropa'; return etiqueta;
      case "shoes": var etiqueta = 'Zapatería'; return etiqueta;
      case "boutique": var etiqueta = 'Boutique'; return etiqueta;
      case "bag": var etiqueta = 'Tienda de Bolsos'; return etiqueta;

      case "paint": var etiqueta = 'Pinturas'; return etiqueta;

      case "estate_agent": var etiqueta = 'Inmobiliaria'; return todosimbolo = etiqueta;
      case "car": var etiqueta = 'Concesionario'; return etiqueta;

      case "books": var etiqueta = 'Librería';  return etiqueta;
      case "music": var etiqueta = 'Tienda de Discos';  return etiqueta;
      case "kiosk": var etiqueta = 'Kiosko'; return etiqueta;
      case "newsagent": var etiqueta = 'Prensa'; return etiqueta;
      case "stationery": var etiqueta = 'Papelería'; return etiqueta;

      case "hairdresser": var etiqueta = 'Peluquería'; return etiqueta;
      case "optician": var etiqueta = 'Óptica'; return etiqueta;
      case "computer": var etiqueta = 'Informática'; return etiqueta;
      case "mobile_phone": var etiqueta = 'Telefonía Móvil'; return etiqueta;
      case "tobacco": var etiqueta = 'Estanco'; return etiqueta;
      case "organic": var etiqueta = 'Productos ecológicos'; return etiqueta;
      case "car_repair": var etiqueta = 'Taller Mecánico'; return etiqueta;
      case "hardware": var etiqueta = 'Ferretería'; return etiqueta;
      case "florist": var etiqueta = 'Floristería'; return etiqueta;
      case "bicycle": var etiqueta = 'Tienda de Bicicletas'; return etiqueta;
      case "photo": var etiqueta = 'Estudio de Fotografía'; return todosimbolo = etiqueta;
      case "gift": var etiqueta = 'Regalos'; return etiqueta

      case "bakery": var etiqueta = 'Pastelería'; return etiqueta;

//Etiqueta por defecto

      default: var etiqueta = 'No sé qué símbolo poner'; return etiqueta;


    }
 
    
  }
}


var ocio = L.layerJSON({
  url: 'http://overpass-api.de/api/interpreter?data=[out:json];node({lat1},{lon1},{lat2},{lon2})[name][amenity][wheelchair];out;',
  propertyItems: 'elements',
  propertyTitle: 'tags.name',
  title: 'tags.wheelchair',
  propertyLoc: ['lat','lon'],
  propertyAddress: 'addr.street',
  buildIcon: function(data, title) {

    var status=data.tags.wheelchair;
    if (status=='yes'){
      var icon =  new L.divIcon({
        className: 'mk mk--yes',
        iconSize: [40, 40],
        popupAnchor:[0, -20],
        html: iconografia.asignaicono(data.tags.amenity)
      });
      return a=icon ;
    } else if (status=='limited'){
      var icon =  new L.divIcon({
        className: 'mk mk--limited',
        iconSize: [32, 32],
        html: iconografia.asignaicono(data.tags.amenity)
      });
      return a=icon ;
    } else {
      var icon =  new L.divIcon({
        className: 'mk mk--no',
        iconSize: [24, 24],
        html: iconografia.asignaicono(data.tags.amenity)
      });
      return a=icon ;
    }
  },
  buildPopup: function(data, marker) {

    var contenido = "<p>"+ data.tags.name + "</p><p>"+ iconografia.asignaetiqueta(data.tags.amenity) + "</p>";

    if (data.tags.addr != null) {
      contenido = contenido + "<p>"+ (data.tags.addr)+ "</p>";
    } 

    if (data.tags.wheelchair.description != null){
      contenido = contenido + "<p>"+ (data.tags.wheelchair.description)+ "</p>";
    } 
    if (data.tags.phone != null){
      contenido = contenido + "<p>"+ (data.tags.phone)+ "</p>";
    } 

    return contenido;
  }

})
.on('dataloading',function(e) {
  loader.style.display = 'block';
})
.on('dataloaded',function(e) {
  loader.style.display = 'none';
});


var shops = L.layerJSON({
  url: 'http://overpass-api.de/api/interpreter?data=[out:json];node({lat1},{lon1},{lat2},{lon2})[name][shop][wheelchair];out;',
  propertyItems: 'elements',
  propertyTitle: 'tags.name',
  title: 'tags.wheelchair',
  propertyLoc: ['lat','lon'],
  buildIcon: function(data, title) {
    var status=data.tags.wheelchair;
    if (status=='yes'){
      var icon =  new L.divIcon({
        className: 'mk mk--yes',
        iconSize: [40, 40],
        popupAnchor:[0, -20],
        html: iconografia.asignaicono(data.tags.shop)
      });
      return a=icon ;
    } else if (status=='limited'){
      var icon =  new L.divIcon({
        className: 'mk mk--limited',
        iconSize: [32, 32],
        html: iconografia.asignaicono(data.tags.shop)
      });
      return a=icon ;
    } else {
      var icon =  new L.divIcon({
        className: 'mk mk--no',
        iconSize: [24, 24],
        html: iconografia.asignaicono(data.tags.shop)
      });
      return a=icon ;
    }
  },
  buildPopup: function(data, marker) {

    var contenido = "<p>"+ data.tags.name + "</p><p>"+ iconografia.asignaetiqueta(data.tags.shop) + "</p>";

    if (data.tags.addr != null) {
      contenido = contenido + "<p>"+ (data.tags.addr)+ "</p>";
    } 

    if (data.tags.wheelchair.description != null){
      contenido = contenido + "<p>"+ (data.tags.wheelchair.description)+ "</p>";
    } 
    if (data.tags.phone != null){
      contenido = contenido + "<p>"+ (data.tags.phone)+ "</p>";
    } 

    return contenido;

  }
})
.on('dataloading',function(e) {
  loader.style.display = 'block';
})
.on('dataloaded',function(e) {
  loader.style.display = 'none';
});


var turismo = L.layerJSON({
  url: 'http://overpass-api.de/api/interpreter?data=[out:json];node({lat1},{lon1},{lat2},{lon2})[name][tourism][wheelchair];out;',
  propertyItems: 'elements',
  propertyTitle: 'tags.name',
  title: 'tags.wheelchair',
  propertyLoc: ['lat','lon'],
  buildIcon: function(data, title) {
    var status=data.tags.wheelchair;
    if (status=='yes'){
      var icon =  new L.divIcon({
        className: 'mk mk--yes',
        iconSize: [40, 40],
        popupAnchor:[0, -20],
        html: iconografia.asignaicono(data.tags.tourism)
      });
      return a=icon ;
    } else if (status=='limited'){
      var icon =  new L.divIcon({
        className: 'mk mk--limited',
        iconSize: [32, 32],
        html: iconografia.asignaicono(data.tags.tourism)
      });
      return a=icon ;
    } else {
      var icon =  new L.divIcon({
        className: 'mk mk--no',
        iconSize: [24, 24],
        html: iconografia.asignaicono(data.tags.tourism)
      });
      return a=icon ;
    }
  },
  buildPopup: function(data, marker) {
    var contenido = "<p>"+ data.tags.name + "</p><p>"+ iconografia.asignaetiqueta(data.tags.tourism) + "</p>";

    if (data.tags.addr != null) {
      contenido = contenido + "<p>"+ (data.tags.addr)+ "</p>";
    } 

    if (data.tags.wheelchair.description != null){
      contenido = contenido + "<p>"+ (data.tags.wheelchair.description)+ "</p>";
    } 
    if (data.tags.phone != null){
      contenido = contenido + "<p>"+ (data.tags.phone)+ "</p>";
    } 

    return contenido;

  }
})
.on('dataloading',function(e) {
  loader.style.display = 'block';
})
.on('dataloaded',function(e) {
  loader.style.display = 'none';
});

//Transporte

var transporte = L.layerJSON({
  url: 'http://overpass-api.de/api/interpreter?data=[out:json];node({lat1},{lon1},{lat2},{lon2})[name][railway=subway_entrance];node({lat1},{lon1},{lat2},{lon2})[railway=station];out;',
  propertyItems: 'elements',
  propertyTitle: 'tags.name',
  title: 'tags.wheelchair',
  propertyLoc: ['lat','lon'],
  buildIcon: function(data, title) {
    var status=data.tags.wheelchair;
    if (status=='yes'){
      var icon =  new L.divIcon({
        className: 'mk mk--yes',
        iconSize: [40, 40],
        popupAnchor:[0, -20],
        html: iconografia.asignaicono('metro')
      });
      return a=icon ;
    } else if (status=='limited'){
      var icon =  new L.divIcon({
        className: 'mk mk--limited',
        iconSize: [32, 32],
        html: iconografia.asignaicono('metro')
      });
      return a=icon ;
    } else if (status=='no') {
      var icon =  new L.divIcon({
        className: 'mk mk--no',
        iconSize: [24, 24],
        html: iconografia.asignaicono('metro')
      });
      return a=icon ;
    }
    else {
      var icon =  new L.divIcon({
        className: 'mk mk--unknown',
        iconSize: [24, 24],
        html: iconografia.asignaicono('metro')
      });
      return a=icon ;
    }
  },
  buildPopup: function(data, marker) {
    return (data.tags.railway) || null;
  }
})
.on('dataloading',function(e) {
  loader.style.display = 'block';
})
.on('dataloaded',function(e) {
  loader.style.display = 'none';
});

//Transporte Accesible

var transporte_yes = L.layerJSON({
  url: 'http://overpass-api.de/api/interpreter?data=[out:json];node({lat1},{lon1},{lat2},{lon2})[name][railway=subway_entrance][wheelchair=yes];out;',
  propertyItems: 'elements',
  propertyTitle: 'tags.name',
  title: 'tags.wheelchair',
  propertyLoc: ['lat','lon'],
  buildIcon: function(data, title) {
    var status=data.tags.wheelchair;
    if (status=='yes'){
      var icon =  new L.divIcon({
        className: 'mk mk--yes',
        iconSize: [40, 40],
        popupAnchor:[0, -20],
        html: iconografia.asignaicono('metro')
      });
      return a=icon ;
    } else {
      
      return a;
    }
  },
  buildPopup: function(data, marker) {
    return (data.tags.name) || null;
  }
})
.on('dataloading',function(e) {
  loader.style.display = 'block';
})
.on('dataloaded',function(e) {
  loader.style.display = 'none';
});

  
//inizialize Leaflet List Markers

var list = new L.Control.ListMarkers({layer: transporte_yes, itemIcon: null});

list.on('item-mouseover', function(e) {
  e.layer.setIcon(L.icon({
    shadowUrl: 'images/marker/yes.svg',
    shadowSize:new L.Point(60, 60),
    shadowAnchor: new L.Point(30, 30),
    iconUrl:'images/marker/yes.svg',
    iconSize: new L.Point(20, 20),
    iconAnchor: new L.Point(10, 10),
    popupAnchor: new L.Point(0, 0)
  }))
}).on('item-mouseout', function(e) {
  e.layer.setIcon(a)
});

var map = L.map('map', {
  zoom: 15,
  minZoom:8,
  center: new L.latLng([40.4255,-3.7057]),
  layers: [osm]
}),
loader = L.DomUtil.get('loader');
//map.addControl( list );
var overlayMaps = {
  "Transporte": transporte,
  "Ocio": ocio,
  "Tiendas": shops
};
var overlayMap = {
  "Transporte": transporte,
  "Ocio": ocio,
  "Tiendas": shops,
  "Turismo": turismo
};

map.addLayer(ocio);
map.addLayer(shops);
map.addLayer(turismo);
map.addLayer(transporte);
map.addLayer(transporte_yes);
L.control.layers(overlayMaps, overlayMap).addTo(map);
map.addControl( list );