Ext.namespace('addBitmap');
addBitmap.init = function () {
    "use strict";
    var me = this;
    Ext.QuickTips.init();
    var msg = function (title, msg) {
        Ext.Msg.show({
            title: title,
            msg: msg,
            minWidth: 200,
            modal: true,
            icon: Ext.Msg.INFO,
            buttons: Ext.Msg.OK
        });
    };
    me.form = new Ext.Panel({
        region: 'center',
        id: "addform",
        frame: false,
        bodyStyle: 'padding: 0',
        border: false,
        autoHeight: true,
        html: "<div id='shape_uploader'>You need Flash or a modern browser, which supports HTML5</div>",
        afterRender: function () {
            var arr = [], ext = ["shp", "tab", "geojson", "gml", "kml", "mif"], srs;
            $("#shape_uploader").pluploadQueue({
                // General settings
                runtimes: 'html5, flash',
                url: '/controllers/upload/bitmap',
                max_file_size: '200mb',
                chunk_size: '1mb',
                unique_names: true,
                urlstream_upload: true,
                init: {
                    UploadComplete: function (up, files) {
                        Ext.each(arr, function (e) {
                            $.ajax({
                                url: '/controllers/upload/processbitmap',
                                data: "srid=" + srs + "&file=" + e + "&name=" + e.split(".")[0],
                                dataType: 'json',
                                type: 'GET',
                                success: function (response, textStatus, http) {
                                    if (response.success) {
                                        App.setAlert(App.STATUS_NOTICE, response.message);
                                        writeFiles();
                                        document.getElementById("wfseditor").contentWindow.window.reLoadTree();
                                        store.load();
                                    } else {
                                        Ext.MessageBox.alert('Failure', response.message);
                                    }
                                }
                            });
                        });
                    },
                    FilesAdded: function (up, files) {
                        Ext.each(files, function (item) {
                            arr.push(item.name);
                        });
                    },
                    BeforeUpload: function (up, file) {
                        srs = Ext.getCmp('srs').getValue();
                        up.settings.multipart_params = {
                            name: file.name
                        };
                    }
                },
                // Flash settings
                flash_swf_url: '/js/plupload/js/Moxie.swf'
            });
        },
        tbar: [
            {
                text: 'Epsg:'
            },
            {
                width: 60,
                xtype: 'textfield',
                id: 'srs',
                value: '4326'

            }
        ]
    });

    /*me.form = new Ext.FormPanel({
     region: 'center',
     id: "addform",
     fileUpload: true,
     frame: false,
     border: false,
     title: 'ESRI Shape file upload',
     autoHeight: true,
     bodyStyle: 'padding: 10px 10px 0 10px',
     labelWidth: 1,
     defaults: {
     anchor: '97%',
     allowBlank: false,
     msgTarget: 'side'
     },
     items: [
     {
     xtype: 'textfield',
     name: 'name',
     emptyText: 'Name of table',
     allowBlank: false
     },
     {
     xtype: 'numberfield',
     name: 'srid',
     emptyText: 'Choose EPSG number'
     },
     {
     xtype: 'fileuploadfield',
     id: 'form-shp',
     emptyText: 'Select .shp',
     //fieldLabel: 'Shp',
     name: 'shp',
     buttonText: '',
     buttonCfg: {
     iconCls: 'upload-icon'
     }
     },
     {
     xtype: 'fileuploadfield',
     id: 'form-dbf',
     emptyText: 'Select .dbf',
     //fieldLabel: 'Dbf',
     name: 'dbf',
     buttonText: '',
     buttonCfg: {
     iconCls: 'upload-icon'
     }
     },
     {
     xtype: 'fileuploadfield',
     id: 'form-shx',
     emptyText: 'Select .shx',
     //fieldLabel: 'Shx',
     name: 'shx',
     buttonText: '',
     buttonCfg: {
     iconCls: 'upload-icon'
     }
     }
     ],
     buttons: [
     {
     text: 'Save',
     handler: function () {
     if (me.form.getForm().isValid()) {
     me.form.getForm().submit({
     url: '/controllers/upload/shape',
     //waitMsg: 'Uploading your shape file...',
     success: me.onSubmit,
     failure: me.onSubmit
     });
     }
     }
     },
     {
     text: 'Reset',
     handler: function () {
     me.form.getForm().reset();
     }
     }
     ]
     });*/
    me.onSubmit = function (form, action) {
        "use strict";
        var result = action.result;
        if (result.success) {
            store.load();
            App.setAlert(App.STATUS_NOTICE, result.message);
        } else {
            Ext.MessageBox.alert('Failure', result.message);
        }
    };
};