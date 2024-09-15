'use client';

import React, { ReactElement } from 'react';
import style from './MatchList.module.scss';
import LogoLazio from '/public/LogoLazio.png';

const matches = [
  {
    competition: 'Serie A',
    homeTeam: {
      name: 'Lazio',
      logo: 'https://upload.wikimedia.org/wikipedia/it/archive/6/62/20190806203656%21Stemma_della_Societ%C3%A0_Sportiva_Lazio.svg',
      player: 'ArdieX',
    },
    awayTeam: {
      name: 'Milan',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/1306px-Logo_of_AC_Milan.svg.png',
      player: 'LukeTS',
    },
  },
  {
    competition: 'Champions League',
    homeTeam: {
      name: 'Real Madrid',
      logo: 'https://www.maestridelcalcio.com/wp-content/uploads/2020/07/real-madrid-logo-png-12.png',
      player: 'MrFomax',
    },
    awayTeam: {
      name: 'Lazio',
      logo: 'https://upload.wikimedia.org/wikipedia/it/archive/6/62/20190806203656%21Stemma_della_Societ%C3%A0_Sportiva_Lazio.svg',
      player: 'ArdieX',
    },
  },
  {
    competition: 'Europa League',
    homeTeam: {
      name: 'Bayern Monaco',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg/2048px-Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg.png',
      player: '90Fabry',
    },
    awayTeam: {
      name: 'Lazio',
      logo: 'https://upload.wikimedia.org/wikipedia/it/archive/6/62/20190806203656%21Stemma_della_Societ%C3%A0_Sportiva_Lazio.svg',
      player: 'ArdieX',
    },
  },
  {
    competition: 'PML Cup',
    homeTeam: {
      name: 'Lazio',
      logo: 'https://upload.wikimedia.org/wikipedia/it/archive/6/62/20190806203656%21Stemma_della_Societ%C3%A0_Sportiva_Lazio.svg',
      player: 'ArdieX',
    },
    awayTeam: {
      name: 'Inter',
      logo: '/path/to/inter-logo.png',
      player: 'Tepiglio',
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
                  <div className={style.playerName}>{match.homeTeam.player}</div>
                </div>
              </div>
              <span className={style.vs}>|</span>
              <div className={style.team}>
                <img
                  src={match.awayTeam.logo}
                  alt={match.awayTeam.name}
                  className={style.teamLogo}
                />
                <div className={style.teamInfo}>
                  <div className={style.teamName}>{match.awayTeam.name}</div>
                  <div className={style.playerName}>{match.awayTeam.player}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MatchList;
