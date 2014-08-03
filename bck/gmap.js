Ext.onReady(function() {
	Ext.define('TravelBlog.model.PlaceModel', {
		extend: 'Ext.data.Model',
		fields: ['name', 'coordinate', 'group']
	});

	Ext.create('Ext.data.Store', {
		//extend: 'Ext.data.Store',
			model: 'TravelBlog.model.PlaceModel',

		data: [
			{ name: 'Weehawken',    coordinate: {lat : 40.770008, lng : -74.0260252}, group: 'USA' },
			{ name: 'Gyongyos',     coordinate: {lat : 47.8084735,lng : 19.95185},    group: 'Hungary' },
			{ name: 'Paris',    	coordinate: {lat : 48.8588589,lng : 2.3470599},   group: 'Paris' },
			{ name: 'Aggtelek',    	coordinate: {lat : 48.471716, lng : 20.4951633},  group: 'Hungary' }
		]
	});

	var w = Ext.create('Ext.Panel', {
		renderTo : Ext.getBody(),
		layout : 'border',
		height : 500,
		hideLabel : true,
		items : [ {
			region : 'center',
			xtype : 'gmappanel',
			center : {
				geoCodeAddr : 'Budakeszi, 99, Erdo utca, Magyarország',
				marker : {
					title : 'Keszi'
				}
			},
			markers : [ {
				lat : 47.5109394,
				lng : 18.9297127,
				title : 'Buszmegálló',
				listeners : {
					click : function(e) {
						//Ext.Msg.alert('Ide erkezel');
					}
				}
			}, {
				lat : 47.513150,
				lng : 18.932394,
				title : 'Itt fordulsz le'
			} ]
		}, {
			region : 'west',
			title : 'Locations',
			collapsible : true,
			width : 200,
			items : [ {
				xtype : 'button',
				text : 'Weehawken',
				coordinate : {
					lat : 40.770008,
					lng : -74.0260252
				},
				handler : jumpTo
			}, {
				xtype : 'button',
				text : 'Gyongyos',
				coordinate : {
					lat : 47.8084735,
					lng : 19.95185
				},
				handler : jumpTo
			}, {
				xtype : 'button',
				text : 'Paris',
				coordinate: {lat : 48.8588589,lng : 2.3470599},
				handler : jumpTo
			}, {
				xtype : 'button',
				text : 'Aggtelek',
				coordinate : {lat : 48.471716,lng : 20.4951633},
				handler : jumpTo
			} ]
		} ]
	});

	// get the map reference
	var map = w.down('gmappanel');

	function jumpTo(button) {
		map.setCenter(button.coordinate);
	}

	w.show();
});
