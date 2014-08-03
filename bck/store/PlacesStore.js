Ext.define('TravelBlog.store.PlacesStore', {
    extend: 'Ext.data.Store',
    model: 'TravelBlog.model.PlaceModel',

    data: [
        { name: 'Weehawken',    coordinate: {lat : 40.770008, lng : -74.0260252}, group: 'USA' },
        { name: 'Gyongyos',     coordinate: {lat : 47.8084735,lng : 19.95185},    group: 'Hungary' },
		{ name: 'Paris',    	coordinate: {lat : 48.8588589,lng : 2.3470599},   group: 'Paris' },
		{ name: 'Aggtelek',    	coordinate: {lat : 48.471716, lng : 20.4951633},  group: 'Hungary' }
    ]
});