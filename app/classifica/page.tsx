'use client';

import React, { ReactElement, useState } from 'react';
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
    {
      position: 2,
      team: 'Real Madrid',
      logo: '/logos/realmadrid.png',
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
      team: 'Inter',
      logo: '/logos/inter.png',
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
      team: 'Manchester City',
      logo: '/logos/mancity.png',
      points: 86,
      played: 30,
      wins: 27,
      draws: 2,
      losses: 2,
      gf: 56,
      gs: 12,
      gd: 44,
    },
  ],
};

function Classifica(): ReactElement {
  const [activeSection, setActiveSection] = useState('Serie A');

  const handleSectionToggle = (section: string) => {
    setActiveSection(activeSection === section ? '' : section);
  };

  return (
    <div className={styles.standingsContainer}>
      {activeSection === 'Serie A' && (
        <div className={styles.standingsSection}>
          <h3 className={styles.sectionTitle}>Serie A</h3>
          <table className={styles.standingsTable}>
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
                  <td className={styles.teamCell}>
                    <img src={team.logo} className={styles.teamLogo} />
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
          </table>
          <div className={styles.header}>
            <button className={styles.tabButton} onClick={() => handleSectionToggle('Serie A')}>
              Serie A
            </button>
            <button className={styles.tabButton} onClick={() => handleSectionToggle('Serie B')}>
              Serie B
            </button>
            <button
              className={styles.tabButton}
              onClick={() => handleSectionToggle('Champions League')}
            >
              Champions League
            </button>
            <button
              className={styles.tabButton}
              onClick={() => handleSectionToggle('Europa League')}
            >
              Europa League
            </button>
            <button className={styles.tabButton} onClick={() => handleSectionToggle('PML Cup')}>
              PML Cup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Classifica;
