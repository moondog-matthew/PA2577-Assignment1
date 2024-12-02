import React, { useEffect, useState } from 'react';

function App() {
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState({
    name: '',
    price: ''
  });

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = () => {
    fetch('http://localhost:3000/cards')
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error('Error fetching cards:', error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCard(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newCard.name || !newCard.price) {
      alert('Please fill in both name and price');
      return;
    }

    fetch('http://localhost:3000/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCard)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to add card');
      }
      return response.json();
    })
    .then(() => {
      setNewCard({ name: '', price: '' });
      fetchCards();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to add card');
    });
  };

  return (
    <div className="App" style={{ 
      maxWidth: '600px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Magic: The Gathering Cards</h1>
      
      {/* Card Submission Form */}
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginBottom: '20px',
        border: '1px solid #ddd',
        padding: '15px',
        borderRadius: '5px'
      }}>
        <h2>Add New Card</h2>
        <input
          type="text"
          name="name"
          placeholder="Card Name"
          value={newCard.name}
          onChange={handleInputChange}
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newCard.price}
          onChange={handleInputChange}
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
        <button 
          type="submit"
          style={{
            padding: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Add Card
        </button>
      </form>

      {/* Card List */}
      <h2>Card Collection</h2>
      <ul style={{
        listStyle: 'none',
        padding: 0
      }}>
        {cards.map(card => (
          <li 
            key={card._id} 
            style={{
              backgroundColor: '#f4f4f4',
              margin: '5px 0',
              padding: '10px',
              borderRadius: '4px'
            }}
          >
            {card.name}: ${card.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
