Ext.override(miniShop2.grid.Vendor, {
    getFields: function () {
        return [
            'id', 'name', 'resource', 'country', 'email', 'logo', 'pagetitle',
            'address', 'phone', 'fax', 'ms2vf_introtext', 'ms2vf_show_vendor', 'ms2vf_show_collection', 'ms2vf_show_want_cheaper', 'ms2vf_free_shipping', 'description', 'actions'
        ];
    },
});


Ext.override (miniShop2.window.CreateVendor, {
    getFields: function (config) {
        return [
            {xtype: 'hidden', name: 'id', id: config.id + '-id'},
            {
                layout: 'column',
                items: [{
                    columnWidth: .6,
                    layout: 'form',
                    defaults: {msgTarget: 'under'},
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: _('ms2_name'),
                        name: 'name',
                        anchor: '99%',
                        id: config.id + '-name'
                    }],
                }, {
                    columnWidth: .4,
                    layout: 'form',
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: _('ms2_country'),
                        name: 'country',
                        anchor: '99%',
                        id: config.id + '-country'
                    }],
                }]
            }, {
                layout: 'column',
                items: [{
                    columnWidth: .4,
                    layout: 'form',
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: _('ms2_email'),
                        name: 'email',
                        anchor: '99%',
                        id: config.id + '-email'
                    }],
                }, {
                    columnWidth: .6,
                    layout: 'form',
                    items: [{
                        xtype: 'minishop2-combo-resource',
                        fieldLabel: _('ms2_resource'),
                        name: 'resource',
                        anchor: '99%',
                        id: config.id + '-resource'
                    }],
                }]
            }, {
                xtype: 'minishop2-combo-browser',
                fieldLabel: _('ms2_logo'),
                name: 'logo',
                anchor: '99%',
                id: config.id + '-logo'
            }, {
                xtype: 'textarea',
                fieldLabel: _('ms2_address'),
                name: 'address',
                anchor: '99%',
                id: config.id + '-address'
            }, {
                layout: 'column',
                items: [{
                    columnWidth: .5,
                    layout: 'form',
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: _('ms2_phone'),
                        name: 'phone',
                        anchor: '99%',
                        id: config.id + '-phone'
                    }],
                }, {
                    columnWidth: .5,
                    layout: 'form',
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: _('ms2_fax'),
                        name: 'fax',
                        anchor: '99%',
                        id: config.id + '-fax'
                    }],
                }]
            }

            , {
                xtype: 'textarea',
                fieldLabel: _('ms2_ms2vf_introtext'),
                name: 'ms2vf_introtext',
                anchor: '99%',
                id: config.id + '-ms2vf_introtext'
            }
            , {
                xtype: 'textarea',
                fieldLabel: _('ms2_description'),
                name: 'description',
                anchor: '99%',
                id: config.id + '-description'
            }
            ,
            {
                xtype: 'xcheckbox',
                boxLabel: _('ms2_ms2vf_show_vendor'),
                name: 'ms2vf_show_vendor',
                anchor: '99%',
                id: config.id + '-ms2vf_show_vendor',

            },
            {
                xtype: 'xcheckbox',
                boxLabel: _('ms2_ms2vf_show_collection'),
                name: 'ms2vf_show_collection',
                anchor: '99%',
                id: config.id + '-ms2vf_show_collection',

            },
            {
                xtype: 'xcheckbox',
                boxLabel: _('ms2_ms2vf_free_shipping'),
                name: 'ms2vf_free_shipping',
                anchor: '99%',
                id: config.id + '-ms2vf_free_shipping',

            },
            {
                xtype: 'xcheckbox',
                boxLabel: _('ms2_ms2vf_show_want_cheaper'),
                name: 'ms2vf_show_want_cheaper',
                anchor: '99%',
                id: config.id + '-ms2vf_show_want_cheaper',

            }
        ];
    }
});
