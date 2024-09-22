'use client';
import Link from 'next/link';
import React from 'react';
import { Accordion, AccordionItem, AccordionControl, AccordionPanel, Table } from '@mantine/core';
import styles from './page.module.scss';

// Dati dinamici
const topScorersSerieA = [
  { position: 1, name: 'Haaland', goals: 30, team: 'Real Madrid' },
  { position: 2, name: 'Palmer', goals: 27, team: 'Lazio' },
  { position: 3, name: 'Mbappe', goals: 22, team: 'Barcellona' },
  { position: 4, name: 'Haaland', goals: 30, team: 'Real Madrid' },
  { position: 5, name: 'Palmer', goals: 27, team: 'Lazio' },
  { position: 6, name: 'Mbappe', goals: 22, team: 'Barcellona' },
  { position: 7, name: 'Haaland', goals: 30, team: 'Real Madrid' },
  { position: 8, name: 'Palmer', goals: 27, team: 'Lazio' },
  { position: 9, name: 'Mbappe', goals: 22, team: 'Barcellona' },
];

const topAssistSerieA = [
  { position: 1, name: 'Player 1', assists: 15, team: 'Team A' },
  { position: 2, name: 'Player 2', assists: 12, team: 'Team B' },
];

const topPlayerSerieA = [
  { position: 1, name: 'Player 1', matches: 20, team: 'Team A' },
  { position: 2, name: 'Player 2', matches: 18, team: 'Team B' },
];

export default function Statistiche() {
  return (
    <div className={styles.standingsContainer}>
      {/* Mini Navbar */}
      <div className={styles.miniHeadbar}>
        <Link href="/classifica">
          <button className={styles.navbButton}>
            <span>Classifiche</span>
          </button>
        </Link>
        <Link href="/calendario">
          <button className={styles.navbButton}>
            <span>Calendario</span>
          </button>
        </Link>
        <Link href="/statistiche">
          <button className={styles.navButton}>
            <span>Statistiche</span>
          </button>
        </Link>
      </div>

      {/* Accordion Structure */}
      <Accordion className={styles.accordionContainer}>
        {/* Top Marcatori Serie A */}
        <AccordionItem value="top-scorers-serie-a">
          <AccordionControl className={(styles.sectionTitle, styles.serieA)}>
            Top Marcatori Serie A
          </AccordionControl>
          <AccordionPanel>
            <div className={styles.standingsTableContainer}>
              <Table className={styles.standingsTable}>
                <thead>
                  <tr>
                    <th>Pos.</th>
                    <th>Nome</th>
                    <th>Gol</th>
                    <th>Squadra</th>
                  </tr>
                </thead>
                <tbody>
                  {topScorersSerieA.map((player) => (
                    <tr key={player.position}>
                      <td>{player.position}</td>
                      <td>{player.name}</td>
                      <td>{player.goals}</td>
                      <td>{player.team}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </AccordionPanel>
        </AccordionItem>

        {/* Top Assistman Serie A */}
        <AccordionItem value="top-assists-serie-a">
          <AccordionControl className={(styles.sectionTitle, styles.serieA)}>
            Top Assistman Serie A
          </AccordionControl>
          <AccordionPanel>
            <div className={styles.standingsTableContainer}>
              <Table className={styles.standingsTable}>
                <thead>
                  <tr>
                    <th>Pos.</th>
                    <th>Nome</th>
                    <th>Assist</th>
                    <th>Squadra</th>
                  </tr>
                </thead>
                <tbody>
                  {topAssistSerieA.map((player) => (
                    <tr key={player.position}>
                      <td>{player.position}</td>
                      <td>{player.name}</td>
                      <td>{player.assists}</td>
                      <td>{player.team}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </AccordionPanel>
        </AccordionItem>

        {/* Top Uomo Partita Serie A */}
        <AccordionItem value="top-player-serie-a">
          <AccordionControl className={(styles.sectionTitle, styles.serieA)}>
            Top Uomo Partita Serie A
          </AccordionControl>
          <AccordionPanel>
            <div className={styles.standingsTableContainer}>
              <Table className={styles.standingsTable}>
                <thead>
                  <tr>
                    <th>Pos.</th>
                    <th>Nome</th>
                    <th>Partite</th>
                    <th>Squadra</th>
                  </tr>
                </thead>
                <tbody>
                  {topPlayerSerieA.map((player) => (
                    <tr key={player.position}>
                      <td>{player.position}</td>
                      <td>{player.name}</td>
                      <td>{player.matches}</td>
                      <td>{player.team}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value="top-scorers-serie-b">
          <AccordionControl className={(styles.sectionTitle, styles.serieB)}>
            Top Marcatori Serie B
          </AccordionControl>
          <AccordionPanel>
            <div className={styles.standingsTableContainer}>
              <Table className={styles.standingsTable}>
                <thead>
                  <tr>
                    <th>Pos.</th>
                    <th>Nome</th>
                    <th>Gol</th>
                    <th>Squadra</th>
                  </tr>
                </thead>
                <tbody>
                  {topScorersSerieA.map((player) => (
                    <tr key={player.position}>
                      <td>{player.position}</td>
                      <td>{player.name}</td>
                      <td>{player.goals}</td>
                      <td>{player.team}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value="top-assists-serie-b">
          <AccordionControl className={(styles.sectionTitle, styles.serieB)}>
            Top Assistman Serie B
          </AccordionControl>
          <AccordionPanel>
            <div className={styles.standingsTableContainer}>
              <Table className={styles.standingsTable}>
                <thead>
                  <tr>
                    <th>Pos.</th>
                    <th>Nome</th>
                    <th>Gol</th>
                    <th>Squadra</th>
                  </tr>
                </thead>
                <tbody>
                  {topScorersSerieA.map((player) => (
                    <tr key={player.position}>
                      <td>{player.position}</td>
                      <td>{player.name}</td>
                      <td>{player.goals}</td>
                      <td>{player.team}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value="top-player-serie-b">
          <AccordionControl className={(styles.sectionTitle, styles.serieB)}>
            Top Uomo Partita Serie B
          </AccordionControl>
          <AccordionPanel>
            <div className={styles.standingsTableContainer}>
              <Table className={styles.standingsTable}>
                <thead>
                  <tr>
                    <th>Pos.</th>
                    <th>Nome</th>
                    <th>Gol</th>
                    <th>Squadra</th>
                  </tr>
                </thead>
                <tbody>
                  {topScorersSerieA.map((player) => (
                    <tr key={player.position}>
                      <td>{player.position}</td>
                      <td>{player.name}</td>
                      <td>{player.goals}</td>
                      <td>{player.team}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </AccordionPanel>
        </AccordionItem>

        {/* Aggiungi altre sezioni come Top Scorers Serie B, Champions League, ecc. */}
      </Accordion>
    </div>
  );
}
