import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa i CSS di Bootstrap

const AsideDx = () => {
  const [profiles, setProfiles] = useState([]);
  const Token = process.env.VITE_TOKEN_AUTORIZZAZIONE; // Assicurati che la variabile d'ambiente sia correttamente configurata

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error('Errore nella richiesta:', error);
      }
    };

    fetchProfiles();
  }, [Token]);

  return (
    <section className="card mt-2" tabIndex="-1" data-view-name="profile-card">
      <div className="card-header">
        <h2 className="card-title">Altri profili simili</h2>
      </div>
      <div className="list-group list-group-flush">
        {profiles.length > 0 ? (
          profiles.map((profile) => (
            <a
              key={profile._id}
              className="list-group-item list-group-item-action d-flex align-items-center"
              href={`https://www.linkedin.com/in/${profile.username}`}
              target="_self"
            >
              <img
                src={profile.image}
                alt={`Foto del profilo di ${profile.name}`}
                className="rounded-circle me-3"
                width="48"
                height="48"
                loading="lazy"
              />
              <div>
                <h5 className="mb-1">{profile.name} {profile.surname}</h5>
                <p className="mb-1">{profile.title}</p>
              </div>
            </a>
          ))
        ) : (
          <p className="list-group-item">Nessun profilo trovato</p>
        )}
      </div>
      <div className="card-footer">
        <a
          className="btn btn-secondary btn-sm w-100"
          href="https://www.linkedin.com"
          target="_self"
        >
          Mostra tutto
        </a>
      </div>
    </section>
  );
}

export default AsideDx;
