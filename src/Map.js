import React from 'react';
import ik from '../src/Assets/Images/Iskon.jpg';
import uk from '../src/Assets/Images/Shyam.jpg';
const CardList = () => {
  const cards = [
    {
      title: 'Card 1',
      Description: 'This is the content of Card 1',
      image: {uk}
    },
    {
      title: 'Card 2',
      Description: 'This is the content of Card 2',
      
    },
    {
      title: 'Card 3',
      Description: 'This is the content of Card 3',
      
    }
  ];

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      {cards.map((card, index) => (
        <div key={index} style={{ 
          border: '1px solid #ccc', 
          borderRadius: '8px', 
          padding: '16px', 
          width: '300px',
          textAlign: 'center',
         
        }}>
          <img 
            src={ik} 
            alt={card.title} 
            style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
          />
        

          <h3>{card.title}</h3>
          <p>{card.Description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;