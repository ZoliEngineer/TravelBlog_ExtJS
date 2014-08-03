Ext.define('TravelBlog.view.Main', {
	extend: 'Ext.container.Container',
	requires: [
		'Ext.tab.Panel',
		'Ext.layout.container.Border'
		],
		
		xtype: 'app-main',
		
		layout: { type: 'border'},
		
		items: [{
			xtype: 'travel-gmap'
			}]
});
		