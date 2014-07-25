Ext.onReady(function() {

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
						Ext.Msg.alert('Ide erkezel');
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
				text : 'Gyöngyös',
				coordinate : {
					lat : 47.8084735,
					lng : 19.95185
				},
				handler : jumpTo
			} ]
		} ]

	});

	/**
	 * Just example, do not write code like this! GMApPanel source code
	 * http://docs.sencha.com/extjs/4.2.0/extjs-build/examples/ux/GMapPanel.js
	 */

	// get the map reference
	var map = w.down('gmappanel');

	function jumpTo(button) {
		map.setCenter(button.coordinate);
	}

	w.show();
});
