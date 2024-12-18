'use client';

import React, { ReactElement } from 'react';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import styles from './Demo.module.scss';
import Image from 'next/image';

const matches = [
  {
    competition: 'Serie A',
    homeTeam: {
      name: 'ASD Amaroni 08',
      logo: '/logoamaroni.png',
    },
    awayTeam: {
      name: 'Nuova Medino Oratori',
      logo: '/medino.png',
    },
    score: '3:1',
  },
  {
    competition: 'Serie A',
    homeTeam: {
      name: 'Ricadese',
      logo: '/ricadese.png',
    },
    awayTeam: {
      name: 'ASD Amaroni 08',
      logo: '/logoamaroni.png',
    },
    score: '2:2',
  },
  {
    competition: 'Serie A',
    homeTeam: {
      name: 'ASD Amaroni 08',
      logo: '/logoamaroni.png',
    },
    awayTeam: {
      name: 'San Costantino Calabro',
      logo: '/costantino.png',
    },
    score: '1:4',
  },
  {
    competition: 'Serie A',
    homeTeam: {
      name: 'Academy Girifalco',
      logo: '/academyg.png',
    },
    awayTeam: {
      name: 'ASD Amaroni 08',
      logo: '/logoamaroni.png',
    },
    score: '3:1',
  },
];

function Demo(): ReactElement {
  return (
    <Carousel
      slideSize="70%"
      height={200}
      slideGap="xl"
      controlsOffset="xs"
      className={styles.carouselWrapper}
    >
      {matches.map((match, index) => (
        <Carousel.Slide key={index}>
          <div className={styles.carouselSlide}>
            <div className={styles.header}>Partite recenti</div>
            <div className={styles.content}>
              <div className={styles.team}>
                <Image
                  src={match.homeTeam.logo}
                  alt={match.homeTeam.name}
                  width={100}
                  height={64}
                  className={styles.logo}
                />
                <div className={styles.name}>{match.homeTeam.name}</div>
              </div>
              <div className={styles.score}>
                <span className={styles.homeScore}>{match.score.split(':')[0]}</span>
                <span className={styles.separator}>:</span>
                <span className={styles.awayScore}>{match.score.split(':')[1]}</span>
              </div>
              <div className={styles.team}>
                <Image
                  src={match.awayTeam.logo}
                  alt={match.awayTeam.name}
                  width={100}
                  height={64}
                  className={styles.logo}
                />
                <div className={styles.name}>{match.awayTeam.name}</div>
              </div>
            </div>
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

export default Demo;
