Template.ListContact.helpers({

  /**
   * @returns {*} All of the Contact documents.
   */
  contactList: function () {
    return Contact.find();
  }

});

Template.ListContact.events({
  // handle the form submission
  // stop the form from submitting
  "click .delete": function () {
    // stop the form from submitting
    event.preventDefault();
    Meteor.call('deleteDoc',this._id);
  }
});