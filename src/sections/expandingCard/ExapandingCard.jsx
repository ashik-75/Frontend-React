import { useState } from 'react';
import './expandingCard.scss';
const data = [
  {
    id: 1,
    title: 'Card One',
    url: 'https://images.unsplash.com/photo-1492540747731-d05a66dc2461?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2l6ZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60',
  },
  {
    id: 2,
    title: 'Card Two',
    url: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  },
  {
    id: 3,
    title: 'Card Three',
    url: 'https://images.unsplash.com/photo-1614102073832-030967418971?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZCUyMHNjYXBlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60',
  },
  {
    id: 4,
    title: 'Card Four',
    url: 'https://images.unsplash.com/photo-1552083375-1447ce886485?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZCUyMHNjYXBlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60',
  },
  {
    id: 5,
    title: 'Card five',
    url: 'https://images.unsplash.com/photo-1610123598147-f632aa18b275?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGFuZCUyMHNjYXBlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60',
  },
];
const ExapandingCard = () => {
  const [active, setActive] = useState('');
  return (
    <div className="expandingCard">
      <div className="card-container">
        {data.map((dt) => (
          <div
            className={active === dt.id ? 'card active' : 'card'}
            style={{ backgroundImage: `url(${dt.url})` }}
            onClick={() => setActive(dt.id)}
          >
            <div className="title">{dt.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExapandingCard;
