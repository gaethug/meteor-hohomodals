/**
 * Created with JetBrains PhpStorm.
 * User: hoho
 * Date: 2014. 8. 20.
 * Time: 오전 9:57
 * To change this template use File | Settings | File Templates.
 */
HoHoModals = {
  collection: new Meteor.Collection(null),

  throw: function(modalOpt) {
    if(!$('body').hasClass('modal-open')){
      $('body').addClass('modal-open');
      var backFrop = $('<div class="modal-backdrop"></div>')
      $('body').append(backFrop);
      backFrop.fadeIn('slow');
    }
    HoHoModals.collection.insert(modalOpt);

  },
  clear: function(modalId) {
    if(HoHoModals.collection.find().count() == 1){
      $('body').removeClass('modal-open');
      $('.modal-backdrop').fadeOut("slow", function(){
        $(this).remove();
      });
      //$('.modal-backdrop').remove();
    }
    HoHoModals.collection.remove({_id:modalId});
  }
};