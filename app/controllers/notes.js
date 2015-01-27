import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {
      var body = this.get('noteCopy');
      if (!body) {
        return;
      }

      var note = this.store.createRecord('note', { body: body });
      this.set('noteCopy', '');
      note.save();
    },

    deleteNote: function (id) {
      var self = this;
      var note = this.store.find('note', id).then(function(note) {
        note.deleteRecord();
        note.save();
        self.flashMessage('success', 'Congratulations! Your cleared a to-do item');
      });
    },


  }
});
