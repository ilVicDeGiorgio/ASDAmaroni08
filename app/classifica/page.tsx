'use client';

import React from 'react';
import { Accordion, AccordionItem, AccordionControl, AccordionPanel, Table } from '@mantine/core';
import styles from './page.module.scss';

const standingsData = {
  serieA: [
    {
      position: 1,
      team: 'Lazio',
      logo: '/logos/lazio.png',
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
  championsLeague: [
    {
      position: 1,
      team: 'Lazio',
      logo: '/logos/mancity.png',
      points: 88,
      played: 30,
      wins: 28,
      draws: 1,
      losses: 1,
      gf: 70,
      gs: 10,
      gd: 60,
    },
    // ... altri dati
  ],
  europaLeague: [
    {
      position: 1,
      team: 'Atletico Madrid',
      logo: '/logos/atletico.png',
      points: 80,
      played: 30,
      wins: 25,
      draws: 5,
      losses: 0,
      gf: 60,
      gs: 15,
      gd: 45,
    },
    // ... altri dati
  ],
  pmlCup: [
    {
      position: 1,
      team: 'Chelsea',
      logo: '/logos/chelsea.png',
      points: 75,
      played: 30,
      wins: 24,
      draws: 3,
      losses: 3,
      gf: 65,
      gs: 25,
      gd: 40,
    },
    // ... altri dati
  ],
};

function Classifica() {
  return (
    <div className={styles.standingsContainer}>
      <Accordion style={{ padding: '0' }}>
        <AccordionItem value="serie-a">
          <AccordionControl className={styles.tabButton}>Serie A</AccordionControl>
          <AccordionPanel style={{ padding: '0' }}>
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
                      <td>
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

        <AccordionItem value="champions-league">
          <AccordionControl className={styles.tabButton}>Champions League</AccordionControl>
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
                  {standingsData.championsLeague.map((team) => (
                    <tr key={team.position}>
                      <td>{team.position}</td>
                      <td>
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

        <AccordionItem value="europa-league">
          <AccordionControl className={styles.tabButton}>Europa League</AccordionControl>
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
                  {standingsData.europaLeague.map((team) => (
                    <tr key={team.position}>
                      <td>{team.position}</td>
                      <td>
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

        <AccordionItem value="pml-cup">
          <AccordionControl className={styles.tabButton}>PML Cup</AccordionControl>
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
                  {standingsData.pmlCup.map((team) => (
                    <tr key={team.position}>
                      <td>{team.position}</td>
                      <td>
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
