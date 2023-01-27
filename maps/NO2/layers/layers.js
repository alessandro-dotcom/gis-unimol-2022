var wms_layers = [];

var lyr_2015_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "2015",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2015_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1802491.247667, 4907885.185439, 1985433.034431, 5046806.911611]
                            })
                        });
var format_2015C_1 = new ol.format.GeoJSON();
var features_2015C_1 = format_2015C_1.readFeatures(json_2015C_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2015C_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2015C_1.addFeatures(features_2015C_1);
var lyr_2015C_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2015C_1, 
                style: style_2015C_1,
                interactive: true,
                title: '<img src="styles/legend/2015C_1.png" /> 2015C'
            });
var format_LaboratoriShape_2 = new ol.format.GeoJSON();
var features_LaboratoriShape_2 = format_LaboratoriShape_2.readFeatures(json_LaboratoriShape_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaboratoriShape_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaboratoriShape_2.addFeatures(features_LaboratoriShape_2);
var lyr_LaboratoriShape_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LaboratoriShape_2, 
                style: style_LaboratoriShape_2,
                interactive: true,
                title: '<img src="styles/legend/LaboratoriShape_2.png" /> LaboratoriShape'
            });
var format_Impianti_3 = new ol.format.GeoJSON();
var features_Impianti_3 = format_Impianti_3.readFeatures(json_Impianti_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Impianti_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Impianti_3.addFeatures(features_Impianti_3);
var lyr_Impianti_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Impianti_3, 
                style: style_Impianti_3,
                interactive: true,
                title: '<img src="styles/legend/Impianti_3.png" /> Impianti'
            });
var group_2015 = new ol.layer.Group({
                                layers: [lyr_2015_0,lyr_2015C_1,],
                                title: "2015"});

lyr_2015_0.setVisible(true);lyr_2015C_1.setVisible(true);lyr_LaboratoriShape_2.setVisible(true);lyr_Impianti_3.setVisible(true);
var layersList = [group_2015,lyr_LaboratoriShape_2,lyr_Impianti_3];
lyr_2015C_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_LaboratoriShape_2.set('fieldAliases', {'PROV': 'PROV', 'COMUNE': 'COMUNE', 'STAZIONE': 'STAZIONE', 'DistanzaT': 'DistanzaT', '2009_PM10': '2009_PM10', '2011_PM10': '2011_PM10', '2011_NO2': '2011_NO2', '2013_PM10': '2013_PM10', '2013_NO2': '2013_NO2', '2015_PM10': '2015_PM10', '2015_NO2': '2015_NO2', '2017_PM10': '2017_PM10', '2017_NO2': '2017_NO2', '2019_PM10': '2019_PM10', '2019_NO2': '2019_NO2', '2021_PM10': '2021_PM10', '2021_NO2': '2021_NO2', });
lyr_Impianti_3.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'Comune': 'Comune', });
lyr_2015C_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_LaboratoriShape_2.set('fieldImages', {'PROV': 'TextEdit', 'COMUNE': 'TextEdit', 'STAZIONE': 'TextEdit', 'DistanzaT': 'TextEdit', '2009_PM10': 'TextEdit', '2011_PM10': 'TextEdit', '2011_NO2': 'TextEdit', '2013_PM10': 'TextEdit', '2013_NO2': 'TextEdit', '2015_PM10': 'TextEdit', '2015_NO2': 'TextEdit', '2017_PM10': 'TextEdit', '2017_NO2': 'TextEdit', '2019_PM10': 'TextEdit', '2019_NO2': 'TextEdit', '2021_PM10': 'TextEdit', '2021_NO2': 'TextEdit', });
lyr_Impianti_3.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', 'Comune': 'TextEdit', });
lyr_2015C_1.set('fieldLabels', {});
lyr_LaboratoriShape_2.set('fieldLabels', {'PROV': 'inline label', 'COMUNE': 'inline label', 'STAZIONE': 'inline label', 'DistanzaT': 'inline label', '2009_PM10': 'inline label', '2011_PM10': 'inline label', '2011_NO2': 'inline label', '2013_PM10': 'inline label', '2013_NO2': 'inline label', '2015_PM10': 'inline label', '2015_NO2': 'inline label', '2017_PM10': 'inline label', '2017_NO2': 'inline label', '2019_PM10': 'inline label', '2019_NO2': 'inline label', '2021_PM10': 'inline label', '2021_NO2': 'inline label', });
lyr_Impianti_3.set('fieldLabels', {'id': 'no label', 'Nome': 'inline label', 'Comune': 'inline label', });
lyr_Impianti_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});