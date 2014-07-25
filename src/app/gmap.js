Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', '../ux');
Ext.require([
    'Ext.window.*',
    'Ext.ux.GMapPanel'
]);

Ext.application({
    name   : 'MyApp',

    launch : function() {

    	Ext.create('Ext.Panel', {
    		  renderTo     : Ext.getBody(),
             layout: 'fit',
             height: 500,
             hideLabel: true,
             items: {
                 xtype: 'gmappanel',
                 center: {
                     geoCodeAddr: 'Budakeszi, 99, Erdo utca, Magyarország',
                     marker: {title: 'Keszi'}
                 },
                 markers: [{
                     lat: 47.5109394,
                     lng: 18.9297127,
                     title: 'Buszmegálló',
                     listeners: {
                         click: function(e){
                             Ext.Msg.alert('Ide erkezel');
                         }
                     }
                 },{
                     lat: 47.513150,
                     lng: 18.932394,
                     title: 'Itt fordulsz le'
                 }]
             }
        
        });

    }
});
