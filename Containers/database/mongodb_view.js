//Run this to view the cards in the database.

// Select the database to use.
use('mtg_cards');

// Find and display all the cards in the collection.
const cards = db.getCollection('cards').find().toArray();

// Print the cards to the output window.
console.log('Cards in the collection:', cards);
