import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['deleteButton'],

  actions: {
    deleteNote: function(id) {
      this.sendAction('deleteNote', id);
    }
  }
});
