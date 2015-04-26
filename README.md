# Mapa de la accesibilidad para silla de ruedas de puntos de interés 

# Versión Web App

Aplicación HTML5 para consultar la **accesibilidad para silla de ruedas** de puntos de interés como establecimientos, servicios públicos, etc

Se encuentra disponible en: [www.adappgeo.net](http://adappgeo.net/mapa/ocio/).

##Funcionalidades

* Visualizar puntos en un mapa correspondientes a puntos de interés, significados según su accesibilidad para silla de ruedas.
* Consultar información de interés de cada punto mediante _popup_.
* Lista las entradas de metro accesibles dentro del marco del mapa, para centrarlo en una de ellas seleccionada por el usuario.

## Dependencias

*Incluidas en la carpeta ./js/*

* [Leaflet:](http://leafletjs.com) Librería Javascript para visualización de mapas. Copyright (c) 2010-2015, Vladimir Agafonkin; Copyright (c) 2010-2011, CloudMade. [All rights reserved](https://github.com/Leaflet/Leaflet/blob/master/LICENSE).

* [leaflet-layerJSON:](https://github.com/stefanocudini/leaflet-layerJSON) Complemento para Leaflet. Crea una capa JSON dinámica mediante Ajax/JSONP. Se ha modificado un poco, resultando el documento ./leaflet-layerJSON2.js

* [leaflet-list-markers:](https://github.com/stefanocudini/leaflet-list-markers) Complemento para Leaflet. Lista puntos visibles en un cuadro interactivo.

*No icluidas en este repositorio*

* [Maki](https://github.com/mapbox/maki) Biblioteca de iconos de Mapbox. [CC0 1.0 Universal License](http://creativecommons.org/publicdomain/zero/1.0/)

* [Font Awesome:](http://fortawesome.github.io/Font-Awesome/) Biblioteca de iconos. [MIT License](http://opensource.org/licenses/mit-license.html)

## Fuente de los datos

Los datos corresponden a consultas a la base de datos de **OpenStreetMap**.

En Madrid, a fecha de abril de 2015, la mayoría han sido obtenidos mediante _mapping parties_ organizadas por **Geoinquietos Madrid** para obtener datos de accesibilidad. Más información acerca de dichos eventos, con documentación, herramientas y material para organizar futuras _Mapping Parties de Accesibilidad_ en [ADAPPgeo.net](http://adappgeo.net/mappingparty4/).

![Imagen del Microsite con documentación para las Mapping Party de Accesibilidad que organizan los Geoinquietos Madrid](http://adappgeo.net/images/portfolio/accessibilitymappingparty3.jpg "Imagen del Microsite con documentación para las Mapping Party de Accesibilidad que organizan los Geoinquietos Madrid")

## Acceso a los datos

Para consultar los datos se emplea la API overpass:

* [Overpass-api](http://overpass-api.de/)

## Descripción de los datos

En las consultas de los datos, se piden los puntos que tienen la etiqueta **_wheelchair_**, cuyo valor puede ser:

**yes: _Accesible para silla de ruedas_**. Acceso liso, sin peldaños; todas las localidades tienen acceso y circulación para silla de ruedas (sin excepción); baños disponibles para personas con discapacidad.

**limited: _Acceso medio para silla de ruedas_**. Acceso no superior a 7cm; circulación accesible para silla de ruedas a los recintos más importantes.

**no: _Sin acceso a silla de ruedas_**. Desnivel en acceso superior a 7cm o escalera en la entrada, las localidades más importantes no son accesibles para los usuarios de silla de ruedas.


*Alejandro Zappala Delgado*
www.adappgeo.net