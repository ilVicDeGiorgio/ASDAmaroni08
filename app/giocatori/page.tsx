'use client';
import React, { ReactElement } from 'react';
import styles from './page.module.scss';

// Definisci un array di giocatori
const players = [
  {
    name: 'Alvaro Morata',
    image: '/morata.jpeg',
    role: 'Attaccante',
  },
  {
    name: 'Theo Hernandez',
    image: '/theo.webp',
    role: 'Difensore',
  },
  {
    name: 'Mike Maignan',
    image: '/mike.jpg',
    role: 'Portiere',
  },
  {
    name: 'Sandro Tonali',
    image: '/sandro.jpg',
    role: 'Centrocampista',
  },
  {
    name: 'Sandro Tonali',
    image: '/sandro.jpg',
    role: 'Centrocampista',
  },
  {
    name: 'Sandro Tonali',
    image: '/sandro.jpg',
    role: 'Centrocampista',
  },
  {
    name: 'Sandro Tonali',
    image: '/sandro.jpg',
    role: 'Centrocampista',
  },
  {
    name: 'Sandro Tonali',
    image: '/sandro.jpg',
    role: 'Centrocampista',
  },
  {
    name: 'Sandro Tonali',
    image: '/sandro.jpg',
    role: 'Centrocampista',
  },
  // Aggiungi altri giocatori qui
];

// Componente Card
const Card = ({ player }: { player: { name: string; image: string; role: string } }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img src={player.image} alt={player.name} className={styles.cardImage} />
        <div className={styles.cardContent}>
          <h3 className={styles.cardName}>{player.name}</h3>
          <p className={styles.cardRole}>{player.role}</p>
        </div>
      </div>
    </div>
  );
};

function Giocatori(): ReactElement {
  return (
    <div className={styles.rootProfilo}>
      <h1>GIOCATORI</h1>
      <div className={styles.cardContainer}>
        {players.map((player, index) => (
          <Card key={index} player={player} />
        ))}
      </div>
    </div>
  );
}

export default Giocatori;
