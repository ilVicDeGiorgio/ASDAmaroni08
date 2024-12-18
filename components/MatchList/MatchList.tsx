'use client';

import React, { ReactElement } from 'react';
import style from './MatchList.module.scss';
import { HiMiniArrowUpTray } from 'react-icons/hi2';
import Link from 'next/link';
import logo2 from '/public/logoamaroni.png';

const matches = [
  {
    competition: '2ª Categoria - Girone D',
    homeTeam: {
      name: 'ASD Amaroni 08',
      logo: '/logoamaroni.png',
    },
    awayTeam: {
      name: 'Girifalco',
      logo: '/girifalco.png',
    },
  },
  {
    competition: '2ª Categoria - Girone D',
    homeTeam: {
      name: 'Filandari Calcio',
      logo: '/filandari.png',
    },
    awayTeam: {
      name: 'ASD Amaroni 08',
      logo: '/logoamaroni.png',
    },
  },
  {
    competition: '2ª Categoria - Girone D',
    homeTeam: {
      name: 'ASD Amaroni 08',
      logo: '/logoamaroni.png',
    },
    awayTeam: {
      name: 'Briatico',
      logo: '/briatico.png',
    },
  },
  {
    competition: '2ª Categoria - Girone D',
    homeTeam: {
      name: 'Francica',
      logo: '/francica.png',
    },
    awayTeam: {
      name: 'ASD Amaroni 08',
      logo: '/logoamaroni.png',
    },
  },
];

function MatchList(): ReactElement {
  return (
    <div className={style.matchList}>
      {matches.map((match, index) => (
        <div key={index} className={style.matchItem}>
          <div className={style.competitionSection}>
            <div className={style.competitionTitle}>{match.competition}</div>
          </div>
          <div className={style.matchSection}>
            <div className={style.teams}>
              <div className={style.team}>
                <img
                  src={match.homeTeam.logo}
                  alt={match.homeTeam.name}
                  className={style.teamLogo}
                />
                <div className={style.teamInfo}>
                  <div className={style.teamName}>{match.homeTeam.name}</div>
                </div>
              </div>
              <span className={style.vs}>VS</span>
              <div className={style.team}>
                <img
                  src={match.awayTeam.logo}
                  alt={match.awayTeam.name}
                  className={style.teamLogo}
                />
                <div className={style.teamInfo}>
                  <div className={style.teamName}>{match.awayTeam.name}</div>
                </div>
              </div>
            </div>
            <div className={style.matchButton}></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MatchList;
