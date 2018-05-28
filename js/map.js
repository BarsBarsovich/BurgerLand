ymaps.ready(init);
var myMap;

var placeMarks = [{
        latitude: 59.97,
        longitude: 30.31,
        adr: 'ул. Литераторов д.19'
    },
    {
        latitude: 59.93,
        longitude: 30.34,
        adr: 'наб. реки Фонтанки, дом 56'

    },
    {
        latitude: 59.90,
        longitude: 30.27,
        adr: 'Перекопская ул., 6/8'


    },
    {
        latitude: 59.92,
        longitude: 30.28,
        adr: 'ул. Витебская д.12Б'
    }
];

var _geoObjects = [];

function init() {
    myMap = new ymaps.Map("yMap", {
        center: [59.94, 30.32],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    for (let curPlace of placeMarks) {
        let placemark = new ymaps.Placemark([curPlace.latitude, curPlace.longitude], {
            hintContent: curPlace.adr,
            baloonContent: ''

        }, {
            iconLayout: 'default#image',
            iconImageHref: '../img/map-marker.png',
            iconSize: [46, 57],
            iconImageOffset: [-23, -57]

        });
        _geoObjects.push(placemark);
        // myMap.geoObjects.add(placemark);
    }

    var clusterer = new ymaps.Clusterer({

    });
    myMap.geoObjects.add(clusterer);
    clusterer.add(_geoObjects);

}