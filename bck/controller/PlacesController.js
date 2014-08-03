Ext.define('TravelBlog.controller.PlacesController', {
    extend: 'Ext.app.Controller',
    stores: ['PlacesStore'],
    models: ['PlaceModel'],
	views: ['MapView']
});