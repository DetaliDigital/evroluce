$(document).ready(function () {
       if (typeof msFavorites != 'undefined' && typeof miniShop2 != 'undefined') {
           msFavorites.addMethodAction('success', 'name_action', function(){
               miniShop2.Message.initialize();
               var self = this;
               if (self.data && self.data.method == 'add') {
                   miniShop2.Message.success('Вы добавили товар ' + self.data.pagetitle + ' в избранное');
               }
               if (self.data && self.data.method == 'remove') {
                   miniShop2.Message.error('Вы удалил товар ' + self.data.pagetitle + ' из избранного');
               }
           });
       }
   });
