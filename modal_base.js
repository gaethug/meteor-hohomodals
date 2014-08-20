/**
 * Created with JetBrains PhpStorm.
 * User: hoho
 * Date: 2014. 8. 20.
 * Time: 오전 9:59
 * To change this template use File | Settings | File Templates.
 */
Template.modal_base.helpers({
  modalList: function() {
    return HoHoModals.collection.find().fetch();
  }
});
Template.modal_item.helpers({
  dynamicTemplate: function() {
    return Template[this.modalName+"_modal"];
  }
});
