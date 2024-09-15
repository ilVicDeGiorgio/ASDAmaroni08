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
      name: 'AC Milan',
      logo: 'https://1000marche.net/wp-content/uploads/2020/03/AC-Milan-Logo-1995.png',
    },
    awayTeam: {
      name: 'SS Lazio',
      logo: 'https://upload.wikimedia.org/wikipedia/it/archive/6/62/20190806203656%21Stemma_della_Societ%C3%A0_Sportiva_Lazio.svg',
    },
    score: '3:1',
  },
  {
    competition: 'Serie A',
    homeTeam: {
      name: 'Team45',
      logo: 'https://www.maestridelcalcio.com/wp-content/uploads/2020/07/real-madrid-logo-png-12.png',
    },
    awayTeam: {
      name: 'Team23',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg/2048px-Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg.png',
    },
    score: '2:2',
  },
  {
    competition: 'Serie A',
    homeTeam: {
      name: 'Team3',
      logo: 'https://www.logofantacalcio.it/wp-content/uploads/2024/04/logo-fantacalcio-stemma.png',
    },
    awayTeam: {
      name: 'Team4',
      logo: 'https://www.logofantacalcio.it/wp-content/uploads/2024/04/logo-fantacalcio-stemma.png',
    },
    score: '1:4',
  },
  {
    competition: 'Serie A',
    homeTeam: {
      name: 'AC Milan',
      logo: 'https://1000marche.net/wp-content/uploads/2020/03/AC-Milan-Logo-1995.png',
    },
    awayTeam: {
      name: 'SS Lazio',
      logo: 'https://upload.wikimedia.org/wikipedia/it/archive/6/62/20190806203656%21Stemma_della_Societ%C3%A0_Sportiva_Lazio.svg',
    },
    score: '3:1',
  },
  {
    competition: 'Serie A',
    homeTeam: {
      name: 'Team45',
      logo: 'https://www.maestridelcalcio.com/wp-content/uploads/2020/07/real-madrid-logo-png-12.png',
    },
    awayTeam: {
      name: 'Team23',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg/2048px-Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg.png',
    },
    score: '2:2',
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
            <div className={styles.header}>
              Partite recenti
              <div className={styles.league}>{match.competition}</div>
            </div>
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
