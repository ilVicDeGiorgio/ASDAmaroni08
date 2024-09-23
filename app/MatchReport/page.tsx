// app/MatchReport/page.tsx
'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.scss';

const MatchReport = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const competition = searchParams.get('competition');
  const homeTeamName = searchParams.get('homeTeamName');
  const homeTeamLogo = searchParams.get('homeTeamLogo');
  const homeTeamPlayer = searchParams.get('homeTeamPlayer');
  const awayTeamName = searchParams.get('awayTeamName');
  const awayTeamLogo = searchParams.get('awayTeamLogo');
  const awayTeamPlayer = searchParams.get('awayTeamPlayer');

  return (
    <div className={styles.rootReport}>
      {/* Bottone per tornare indietro */}
      <Link href="/" className={styles.backButtonContainer}>
        <button className={styles.backButton} onClick={() => router.back()}>
          ← Back
        </button>
      </Link>

      <div className={styles.matchReport}>
        <div className={styles.header}>
          <div className={styles.reportTitle}>Report</div>
          <div className={styles.matchInfo}>
            <span>{competition} giornata 3</span>
          </div>
        </div>

        <div className={styles.scoreSection}>
          <div className={styles.teamInfo}>
            <img src={homeTeamLogo ?? ''} alt={homeTeamName ?? ''} />
            <span className={styles.teamName}>{homeTeamName}</span>
            <span className={styles.userName}>{homeTeamPlayer}</span>
          </div>

          <div className={styles.score}>
            <span>5</span>
            <span>:</span>
            <span>2</span>
          </div>

          <div className={styles.teamInfo}>
            <img src={awayTeamLogo ?? ''} alt={awayTeamName ?? ''} />
            <span className={styles.teamName}>{awayTeamName}</span>
            <span className={styles.userName}>{awayTeamPlayer}</span>
          </div>
        </div>

        {/* Altri dettagli come assist e marcatori */}
      </div>
    </div>
  );
};

export default MatchReport;
