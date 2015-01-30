import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {
      var body = this.get('noteCopy');
      var title = this.get('noteTitle');
      if (!body) {
        return;
      }

      var note = this.store.createRecord('note', {body: body, title: title});
      this.set('noteCopy', '');
      this.set('noteTitle', '');
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
