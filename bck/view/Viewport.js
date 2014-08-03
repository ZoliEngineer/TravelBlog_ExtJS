Ext.define('TravelBlog.view.Viewport', {
	extend: 'Ext.container.Viewport',
	requires: [
		'Ext.layout.container.Fit',
		'TravelBlog.view.Main']
	
	layout: { type: 'fit' },
	
	items: [{ xtype: 'app-main' }]

});