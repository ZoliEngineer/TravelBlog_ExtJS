Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', '../ux');
Ext.require([
    'Ext.window.*',
    'Ext.ux.GMapPanel'
]);

Ext.onReady(function(){
    var mapwin;
    Ext.get('show-btn').on('click', function() {
        // create the window on the first click and reuse on subsequent clicks
        if(mapwin) {
            mapwin.show();
        } else {
            mapwin = Ext.create('Ext.window.Window', {
                autoShow: true,
                layout: 'fit',
                title: 'GMap Window',
                closeAction: 'hide',
                width:450,
                height:450,
                border: false,
                x: 40,
                y: 60,
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
 });
