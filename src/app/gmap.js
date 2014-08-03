Ext.onReady(function() {
	Ext.define('TravelBlog.model.PlaceModel', {
		extend: 'Ext.data.Model',
		fields: ['name', 'coordinate', 'group']
	});

	var store = Ext.create('Ext.data.Store', {
			model: 'TravelBlog.model.PlaceModel',

		data: [
			{ name: 'Weehawken',    coordinate: {lat : 40.770008, lng : -74.0260252}, group: 'USA' },
			{ name: 'Gyongyos',     coordinate: {lat : 47.8084735,lng : 19.95185},    group: 'Hungary' },
			{ name: 'Paris',    	coordinate: {lat : 48.8588589,lng : 2.3470599},   group: 'Paris' },
			{ name: 'Aggtelek',    	coordinate: {lat : 48.471716, lng : 20.4951633},  group: 'Hungary' },
			{ name: 'Monaco',    	coordinate: {lat : 43.7383229, lng : 7.4244581},  group: 'Alps' }
		]
	});
	
	 var html = '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed metus nibh, sodales a, '+
    'porta at, vulputate eget, dui. Pellentesque ut nisl. Maecenas tortor turpis, interdum non, sodales non, iaculis ac, '+
    'lacus. Vestibulum auctor, tortor quis iaculis malesuada, libero lectus bibendum purus, sit amet tincidunt quam turpis '+
    'vel lacus. In pellentesque nisl non sem. Suspendisse nunc sem, pretium eget, cursus a, fringilla vel, urna.<br/><br/>'+
    'Aliquam commodo ullamcorper erat. Nullam vel justo in neque porttitor laoreet. Aenean lacus dui, consequat eu, adipiscing '+
    'eget, nonummy non, nisi. Morbi nunc est, dignissim non, ornare sed, luctus eu, massa. Vivamus eget quam. Vivamus tincidunt '+
    'diam nec urna. Curabitur velit. Lorem ipsum dolor sit amet.</p>';
	
	var markerStore = new Array();
	store.each(element => addAsMarker(element));

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
			markers : markerStore
		}, {
			region : 'west',
			title : 'Locations',
			collapsible : true,
			width : 200,
			items : [ ]
		}, {
			region : 'south',
			title : 'Stories',
			collapsible : true,
			xtype: 'panel',
			html: html
		}  ]
	});
	
	var map = w.down('gmappanel');
	
	store.each(element => addAsButton(element));	
	
	w.show();
	
	function addAsButton(buttonModel) {
		var button =  new Ext.button.Button({
            text : buttonModel.get('name'),
			source: buttonModel,
			position : buttonModel.get('coordinate'),
			handler : jumpTo
        });
        w.items.get(1).add(button);		
		
	}
	
	function addAsMarker(buttonModel) {
		var marker = {
				position: buttonModel.get('coordinate'),
				title : buttonModel.get('name'),	
				source: buttonModel,
				listeners : {
					click : function(e) {
						console.log('Show ' +  this.title);
						showPage(this)
					}
				}
				
		};
		markerStore.push(marker);
	}
	

	function jumpTo(button) {
		map.setCenter(button.position);
		showPage(button);
	}
	
	function showPage(button) {
		console.log(button.position);
		w.items.get(2).setHtml(button.source.get('group'))
	}
	
	
	
});
