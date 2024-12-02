use('mtg_cards');
//db.dropDatabase(); //This can be un-commented to get a fresh database.

db.getCollection('cards').insertMany([
  { name: 'Black Lotus', price: '3000' },
  { name: 'Time Walk', price: '3000' },
  { name: 'Mishra\'s Workshop', price: '3000' }
]);

const cards = db.getCollection('cards').find().toArray();

console.log('Cards in the collection:', cards);
