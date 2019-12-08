Ext.override(miniShop2.window.UpdateOrder, {
    getAddressFields: function (config) {
        var all = {
            receiver: {},
            phone: {},
            index: {},
            country: {},
            region: {},
            metro: {},
            building: {},
            city: {},
            street: {},
            room: {},
            corp: {},
            entrance: {},
            floor: {},
            code: {},
            company: {},
        };
        var fields = [], tmp = [];
        for (var i = 0; i < miniShop2.config['order_address_fields'].length; i++) {
            var field = miniShop2.config['order_address_fields'][i];
            if (all[field]) {
                Ext.applyIf(all[field], {
                    xtype: 'textfield',
                    name: 'addr_' + field,
                    fieldLabel: _('ms2_' + field)
                });
                all[field].anchor = '100%';
                tmp.push(all[field]);
            }
        }

        var addx = function (w1, w2) {
            if (!w1) {
                w1 = .5;
            }
            if (!w2) {
                w2 = .5;
            }
            return {
                layout: 'column',
                defaults: {msgTarget: 'under', border: false},
                items: [
                    {columnWidth: w1, layout: 'form', items: []},
                    {columnWidth: w2, layout: 'form', items: []}
                ]
            };
        };

        var n;
        if (tmp.length > 0) {
            for (i = 0; i < tmp.length; i++) {
                if (i == 0) fields.push(addx(.5, .5));
                else if (i == 2) fields.push(addx(.5, .5));
                else if (i % 2 == 0) fields.push(addx());

                if (i <= 1) {
                    n = 0;
                }
                else {
                    n = Math.floor(i / 2);
                }
                fields[n].items[i % 2].items.push(tmp[i]);
            }

            if (miniShop2.config['order_address_fields'].in_array('comment')) {
                fields.push(
                    {
                        xtype: 'displayfield',
                        name: 'addr_comment',
                        fieldLabel: _('ms2_comment'),
                        anchor: '100%',
                        style: 'min-height: 50px;border:1px solid #efefef;width:95%;padding: 5px;'
                    }
                );
            }
        }

        return fields;
    }
})
