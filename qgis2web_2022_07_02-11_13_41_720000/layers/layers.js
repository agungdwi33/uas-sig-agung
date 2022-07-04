var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Pemetaanguru2022_0 = new ol.format.GeoJSON();
var features_Pemetaanguru2022_0 = format_Pemetaanguru2022_0.readFeatures(json_Pemetaanguru2022_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemetaanguru2022_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Pemetaanguru2022_0.addFeatures(features_Pemetaanguru2022_0);var lyr_Pemetaanguru2022_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pemetaanguru2022_0, 
                style: style_Pemetaanguru2022_0,
    title: 'Pemetaan guru 2022<br />\
    <img src="styles/legend/Pemetaanguru2022_0_0.png" /> Rendah<br />\
    <img src="styles/legend/Pemetaanguru2022_0_1.png" /> Sedang<br />\
    <img src="styles/legend/Pemetaanguru2022_0_2.png" /> Tinggi<br />\
    <img src="styles/legend/Pemetaanguru2022_0_3.png" /> Sangat Tinggi<br />'
        });

lyr_Pemetaanguru2022_0.setVisible(true);
var layersList = [baseLayer,lyr_Pemetaanguru2022_0];
lyr_Pemetaanguru2022_0.set('fieldAliases', {'kecamatan': 'kecamatan', 'guru_sd': 'guru_sd', 'guru_smp': 'guru_smp', 'guru_sma': 'guru_sma', 'jmlh_guru': 'jmlh_guru', });
lyr_Pemetaanguru2022_0.set('fieldImages', {'kecamatan': 'TextEdit', 'guru_sd': 'TextEdit', 'guru_smp': 'TextEdit', 'guru_sma': 'TextEdit', 'jmlh_guru': 'TextEdit', });
lyr_Pemetaanguru2022_0.set('fieldLabels', {'kecamatan': 'inline label', 'guru_sd': 'inline label', 'guru_smp': 'inline label', 'guru_sma': 'inline label', 'jmlh_guru': 'inline label', });
lyr_Pemetaanguru2022_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});