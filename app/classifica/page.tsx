'use client';

import React from 'react';
import Link from 'next/link';
import { Accordion, AccordionItem, AccordionControl, AccordionPanel, Table } from '@mantine/core';
import styles from './page.module.scss';

const standingsData = {
  serieA: [
    {
      position: 1,
      team: 'Francica',
      logo: '/francica.png',
      points: 86,
      played: 30,
      wins: 27,
      draws: 2,
      losses: 2,
      gf: 56,
      gs: 12,
      gd: 44,
    },
    {
      position: 2,
      team: 'Ricadese',
      logo: '/ricadese.png',
      points: 86,
      played: 30,
      wins: 27,
      draws: 2,
      losses: 2,
      gf: 56,
      gs: 12,
      gd: 44,
    },
    {
      position: 3,
      team: 'Polisportiva Spilinga',
      logo: '/spilinga.png',
      points: 86,
      played: 30,
      wins: 27,
      draws: 2,
      losses: 2,
      gf: 56,
      gs: 12,
      gd: 44,
    },
    {
      position: 4,
      team: 'Girifalco',
      logo: '/girifalco.png',
      points: 86,
      played: 30,
      wins: 27,
      draws: 2,
      losses: 2,
      gf: 56,
      gs: 12,
      gd: 44,
    },
    {
      position: 5,
      team: 'Nuova Medimo Oratori',
      logo: '/medino.png',
      points: 86,
      played: 30,
      wins: 27,
      draws: 2,
      losses: 2,
      gf: 56,
      gs: 12,
      gd: 44,
    },
    {
      position: 6,
      team: 'Nuova A.D.A.',
      logo: '/ada.png',
      points: 86,
      played: 30,
      wins: 27,
      draws: 2,
      losses: 2,
      gf: 56,
      gs: 12,
      gd: 44,
    },
    {
      position: 7,
      team: 'Academy Girifalco',
      logo: '/academyg.png',
      points: 86,
      played: 30,
      wins: 27,
      draws: 2,
      losses: 2,
      gf: 56,
      gs: 12,
      gd: 44,
    },
    {
      position: 8,
      team: 'San Costantino Calabro',
      logo: '/costantino.png',
      points: 86,
      played: 30,
      wins: 27,
      draws: 2,
      losses: 2,
      gf: 56,
      gs: 12,
      gd: 44,
    },
    {
      position: 9,
      team: 'Amaroni 08',
      logo: '/logoamaroni.png',
      points: 86,
      played: 30,
      wins: 27,
      draws: 2,
      losses: 2,
      gf: 56,
      gs: 12,
      gd: 44,
    },
    {
      position: 10,
      team: 'Briatico',
      logo: '/briatico.png',
      points: 86,
      played: 30,
      wins: 27,
      draws: 2,
      losses: 2,
      gf: 56,
      gs: 12,
      gd: 44,
    },
    {
      position: 11,
      team: 'Filandari Calcio',
      logo: '/filandari.png',
      points: 86,
      played: 30,
      wins: 27,
      draws: 2,
      losses: 2,
      gf: 56,
      gs: 12,
      gd: 44,
    },
    {
      position: 12,
      team: 'Nuova Valle',
      logo: '/valle.png',
      points: 86,
      played: 30,
      wins: 27,
      draws: 2,
      losses: 2,
      gf: 56,
      gs: 12,
      gd: 44,
    },

    // ... altri dati
  ],
};

function Classifica() {
  return (
    <div className={styles.standingsContainer}>
      <div className={styles.miniHeadbar}>
        <Link href="/classifica">
          <button className={styles.navButton}>Classifiche</button>
        </Link>
        <Link href="/calendario">
          <button className={styles.navButton}>Calendario</button>
        </Link>
        <Link href="/statistiche">
          <button className={styles.navButton}>Statistiche</button>
        </Link>
      </div>

      <Accordion className={styles.accordionContainer}>
        <AccordionItem value="serie-a">
          <AccordionControl className={(styles.tabButton, styles.serieA)}>
            Seconda Categoria Girone D{' '}
          </AccordionControl>
          <AccordionPanel>
            <div className={styles.standingsTableContainer}>
              <Table className={styles.standingsTable}>
                <thead>
                  <tr>
                    <th>Pos.</th>
                    <th>Squadra</th>
                    <th>Pts</th>
                    <th>G</th>
                    <th>V</th>
                    <th>P</th>
                    <th>S</th>
                    <th>GF</th>
                    <th>GS</th>
                    <th>DR</th>
                  </tr>
                </thead>
                <tbody>
                  {standingsData.serieA.map((team) => (
                    <tr key={team.position}>
                      <td>{team.position}</td>
                      <td className={styles.logoename}>
                        <img src={team.logo} className={styles.teamLogo} alt="" />
                        {team.team}
                      </td>
                      <td>{team.points}</td>
                      <td>{team.played}</td>
                      <td>{team.wins}</td>
                      <td>{team.draws}</td>
                      <td>{team.losses}</td>
                      <td>{team.gf}</td>
                      <td>{team.gs}</td>
                      <td>{team.gd}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Classifica;
