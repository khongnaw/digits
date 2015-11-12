/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */

// NOTE!! Make sure that the parameters match the schema fields
var contactSeeds = [
  {first: "Philip", last: "Johnson", address:"1680 East-West Rd",phone:"1-808-444-4444",email:"ok@ok.com"},
  {first: "Johnson", last: "Philip", address:"1680 East-West Rd",phone:"1-808-999-9999",email:"ok@ok.com"}
];

/**
 * Initialize the Contact collection if empty with seed data.
 */

// NOTE!! Check the parameter and object names
if (Contact.find().count() === 0) {
  _.each(contactSeeds,  function(contact) {
    Contact.insert(contact);
  });
}
