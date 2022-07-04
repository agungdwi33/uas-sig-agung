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
var format_PemetaanSekolah2022_0 = new ol.format.GeoJSON();
var features_PemetaanSekolah2022_0 = format_PemetaanSekolah2022_0.readFeatures(json_PemetaanSekolah2022_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PemetaanSekolah2022_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PemetaanSekolah2022_0.addFeatures(features_PemetaanSekolah2022_0);var lyr_PemetaanSekolah2022_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PemetaanSekolah2022_0, 
                style: style_PemetaanSekolah2022_0,
    title: ' Pemetaan Sekolah 2022<br />\
    <img src="styles/legend/PemetaanSekolah2022_0_0.png" /> Rendah<br />\
    <img src="styles/legend/PemetaanSekolah2022_0_1.png" /> Sedang<br />\
    <img src="styles/legend/PemetaanSekolah2022_0_2.png" /> Tinggi<br />\
    <img src="styles/legend/PemetaanSekolah2022_0_3.png" /> Sangat Tinggi<br />'
        });

lyr_PemetaanSekolah2022_0.setVisible(true);
var layersList = [baseLayer,lyr_PemetaanSekolah2022_0];
lyr_PemetaanSekolah2022_0.set('fieldAliases', {'kecamatan': 'kecamatan', 'sklh_sd': 'sklh_sd', 'sklh_smp': 'sklh_smp', 'sklh_sma': 'sklh_sma', 'jmlah_sklh': 'jmlah_sklh', });
lyr_PemetaanSekolah2022_0.set('fieldImages', {'kecamatan': 'TextEdit', 'sklh_sd': 'TextEdit', 'sklh_smp': 'TextEdit', 'sklh_sma': 'TextEdit', 'jmlah_sklh': 'TextEdit', });
lyr_PemetaanSekolah2022_0.set('fieldLabels', {'kecamatan': 'inline label', 'sklh_sd': 'inline label', 'sklh_smp': 'inline label', 'sklh_sma': 'inline label', 'jmlah_sklh': 'inline label', });
lyr_PemetaanSekolah2022_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});