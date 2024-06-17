import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

export default function AsideDx() {
  const [users, setUsers] = useState([]);
  const Token = process.env.TOKEN;

  useEffect(() => {
    fetch('https://striveschool-api.herokuapp.com/api/profile/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Token}`
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUsers(data);
      })
      .catch(error => {
        console.error('Errore nella richiesta:', error);
      });
  }, [Token]);

  return (
    <div>
      <h5>Profili che potresti conoscere</h5>
      {users.map(user => (
        <Card key={user._id} style={{ maxWidth: '18rem', margin: '1rem', backgroundColor: '#FFFFFF' }}>
          <Card.Body className='d-flex justify-content-center align-items-center'>
            <div className='mt-5' style={{
                maxWidth: 80,
                maxHeight: 80,
                overflow: 'hidden',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Card.Img  src={user.image}  alt= {`profile of ${user.username}`}   style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div >
              <Card.Title><strong> {user.surname} {user.name}</strong></Card.Title>
              <Card.Text>Contact Username <strong>{user.username} </strong></Card.Text>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}