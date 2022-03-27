var wms_layers = [];


        var lyr_StamenTonerLite_0 = new ol.layer.Tile({
            'title': 'Stamen Toner Lite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://maps.stamen.com/">Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL</a>',
                url: 'http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png'
            })
        });
var format_pl_amphoe_1 = new ol.format.GeoJSON();
var features_pl_amphoe_1 = format_pl_amphoe_1.readFeatures(json_pl_amphoe_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pl_amphoe_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pl_amphoe_1.addFeatures(features_pl_amphoe_1);
var lyr_pl_amphoe_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pl_amphoe_1, 
                style: style_pl_amphoe_1,
                interactive: true,
    title: 'pl_amphoe<br />\
    <img src="styles/legend/pl_amphoe_1_0.png" /> 353765464.468<br />\
    <img src="styles/legend/pl_amphoe_1_1.png" /> 716223001.021<br />\
    <img src="styles/legend/pl_amphoe_1_2.png" /> 831560208.993<br />\
    <img src="styles/legend/pl_amphoe_1_3.png" /> 886915615.265<br />\
    <img src="styles/legend/pl_amphoe_1_4.png" /> 969109772.817<br />\
    <img src="styles/legend/pl_amphoe_1_5.png" /> 1109986328.428<br />\
    <img src="styles/legend/pl_amphoe_1_6.png" /> 1652689635.137<br />\
    <img src="styles/legend/pl_amphoe_1_7.png" /> 1714369693.08<br />\
    <img src="styles/legend/pl_amphoe_1_8.png" /> 2361969772.509<br />\
    <img src="styles/legend/pl_amphoe_1_9.png" /> <br />'
        });
var format_pl_stream_2 = new ol.format.GeoJSON();
var features_pl_stream_2 = format_pl_stream_2.readFeatures(json_pl_stream_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pl_stream_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pl_stream_2.addFeatures(features_pl_stream_2);
var lyr_pl_stream_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pl_stream_2, 
                style: style_pl_stream_2,
                interactive: true,
                title: '<img src="styles/legend/pl_stream_2.png" /> pl_stream'
            });
var format_pl_tambon_3 = new ol.format.GeoJSON();
var features_pl_tambon_3 = format_pl_tambon_3.readFeatures(json_pl_tambon_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pl_tambon_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pl_tambon_3.addFeatures(features_pl_tambon_3);
var lyr_pl_tambon_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pl_tambon_3, 
                style: style_pl_tambon_3,
                interactive: true,
                title: '<img src="styles/legend/pl_tambon_3.png" /> pl_tambon'
            });
var format_pl_transportation_4 = new ol.format.GeoJSON();
var features_pl_transportation_4 = format_pl_transportation_4.readFeatures(json_pl_transportation_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pl_transportation_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pl_transportation_4.addFeatures(features_pl_transportation_4);
var lyr_pl_transportation_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pl_transportation_4, 
                style: style_pl_transportation_4,
                interactive: true,
                title: '<img src="styles/legend/pl_transportation_4.png" /> pl_transportation'
            });
var format_pl_village_5 = new ol.format.GeoJSON();
var features_pl_village_5 = format_pl_village_5.readFeatures(json_pl_village_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pl_village_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pl_village_5.addFeatures(features_pl_village_5);
var lyr_pl_village_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pl_village_5, 
                style: style_pl_village_5,
                interactive: true,
                title: '<img src="styles/legend/pl_village_5.png" /> pl_village'
            });

lyr_StamenTonerLite_0.setVisible(true);lyr_pl_amphoe_1.setVisible(true);lyr_pl_stream_2.setVisible(true);lyr_pl_tambon_3.setVisible(true);lyr_pl_transportation_4.setVisible(true);lyr_pl_village_5.setVisible(true);
var layersList = [lyr_StamenTonerLite_0,lyr_pl_amphoe_1,lyr_pl_stream_2,lyr_pl_tambon_3,lyr_pl_transportation_4,lyr_pl_village_5];
lyr_pl_amphoe_1.set('fieldAliases', {'AREA': 'AREA', 'AMP_CODE': 'AMP_CODE', 'AMP_NAM_T': 'AMP_NAM_T', 'AMP_NAM_E': 'AMP_NAM_E', 'PROV_CODE': 'PROV_CODE', });
lyr_pl_stream_2.set('fieldAliases', {'LENGTH': 'LENGTH', 'STR_ID': 'STR_ID', 'STR_NAM_T': 'STR_NAM_T', 'STR_NAM_E': 'STR_NAM_E', 'LOCAL_NAM': 'LOCAL_NAM', 'STR_TYPE': 'STR_TYPE', });
lyr_pl_tambon_3.set('fieldAliases', {'AREA': 'AREA', 'TAM_CODE': 'TAM_CODE', 'TAM_NAM_T': 'TAM_NAM_T', 'AMP_CODE': 'AMP_CODE', 'AMP_NAM_T': 'AMP_NAM_T', 'AMP_NAM_E': 'AMP_NAM_E', });
lyr_pl_transportation_4.set('fieldAliases', {'LENGTH': 'LENGTH', 'TRANS_TYP': 'TRANS_TYP', 'TYP_T': 'TYP_T', 'NAME_T': 'NAME_T', 'NAME_E': 'NAME_E', 'TranNo': 'TranNo', 'TranTyp_n': 'TranTyp_n', });
lyr_pl_village_5.set('fieldAliases', {'NRD_CODE': 'NRD_CODE', 'VILL_CODE': 'VILL_CODE', 'VILL_NAM_T': 'VILL_NAM_T', 'PROV_CODE': 'PROV_CODE', 'AMP_CODE': 'AMP_CODE', 'TAM_CODE': 'TAM_CODE', });
lyr_pl_amphoe_1.set('fieldImages', {'AREA': 'TextEdit', 'AMP_CODE': 'TextEdit', 'AMP_NAM_T': 'TextEdit', 'AMP_NAM_E': 'TextEdit', 'PROV_CODE': 'TextEdit', });
lyr_pl_stream_2.set('fieldImages', {'LENGTH': 'TextEdit', 'STR_ID': 'TextEdit', 'STR_NAM_T': 'TextEdit', 'STR_NAM_E': 'TextEdit', 'LOCAL_NAM': 'TextEdit', 'STR_TYPE': 'TextEdit', });
lyr_pl_tambon_3.set('fieldImages', {'AREA': 'TextEdit', 'TAM_CODE': 'TextEdit', 'TAM_NAM_T': 'TextEdit', 'AMP_CODE': 'TextEdit', 'AMP_NAM_T': 'TextEdit', 'AMP_NAM_E': 'TextEdit', });
lyr_pl_transportation_4.set('fieldImages', {'LENGTH': 'TextEdit', 'TRANS_TYP': 'TextEdit', 'TYP_T': 'TextEdit', 'NAME_T': 'TextEdit', 'NAME_E': 'TextEdit', 'TranNo': 'Range', 'TranTyp_n': 'Range', });
lyr_pl_village_5.set('fieldImages', {'NRD_CODE': 'TextEdit', 'VILL_CODE': 'TextEdit', 'VILL_NAM_T': 'TextEdit', 'PROV_CODE': 'TextEdit', 'AMP_CODE': 'TextEdit', 'TAM_CODE': 'TextEdit', });
lyr_pl_amphoe_1.set('fieldLabels', {'AREA': 'no label', 'AMP_CODE': 'no label', 'AMP_NAM_T': 'no label', 'AMP_NAM_E': 'no label', 'PROV_CODE': 'no label', });
lyr_pl_stream_2.set('fieldLabels', {'LENGTH': 'no label', 'STR_ID': 'no label', 'STR_NAM_T': 'no label', 'STR_NAM_E': 'no label', 'LOCAL_NAM': 'no label', 'STR_TYPE': 'no label', });
lyr_pl_tambon_3.set('fieldLabels', {'AREA': 'no label', 'TAM_CODE': 'no label', 'TAM_NAM_T': 'no label', 'AMP_CODE': 'no label', 'AMP_NAM_T': 'no label', 'AMP_NAM_E': 'no label', });
lyr_pl_transportation_4.set('fieldLabels', {'LENGTH': 'no label', 'TRANS_TYP': 'no label', 'TYP_T': 'no label', 'NAME_T': 'no label', 'NAME_E': 'no label', 'TranNo': 'no label', 'TranTyp_n': 'no label', });
lyr_pl_village_5.set('fieldLabels', {'NRD_CODE': 'no label', 'VILL_CODE': 'no label', 'VILL_NAM_T': 'no label', 'PROV_CODE': 'no label', 'AMP_CODE': 'no label', 'TAM_CODE': 'no label', });
lyr_pl_village_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});