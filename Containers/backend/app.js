const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors'); //Fix CORS issues

const app = express();
app.use(cors());
app.use(express.json());

const mongoURL = 'mongodb://mongoadmin:root@database:27017';
const dbName = 'mtg_cards';

let db;

MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    db = client.db(dbName);
    console.log('Connected to MongoDB');
  })
  .catch(error => console.error('Error connecting to MongoDB:', error));


app.get('/cards', async (req, res) => {
  try {
    const cards = await db.collection('cards').find().toArray();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching cards' });
  }
});

app.post('/cards', async (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required fields' });
  }
  try {
    const result = await db.collection('cards').insertOne({ name, price });
    res.status(201).json({ message: 'Card added', id: result.insertedId });
  } catch (error) {
    res.status(500).json({ error: 'Error adding card' });
  }
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
