'use client';

import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import Demo from '../components/Carousel/Demo';
import { MantineProvider } from '@mantine/core';
import MatchList from '../components/MatchList/MatchList';
import Image from 'next/image';

import styles from './page.module.scss';

export default function HomePage() {
  const [showAnimation, setShowAnimation] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false); // Nasconde l'animazione dopo 2 secondi
    }, 2000);

    return () => clearTimeout(timer); // Pulisce il timer quando il componente viene smontato
  }, []);

  return (
    <>
      {showAnimation ? (
        <div className={styles.animationOverlay}>
          {/* Qui mettiamo il logo, che verrà animato */}
          <img
            src="/logoamaroni.png" // Sostituisci con il percorso del tuo logo
            alt="Logo ASD AMARONI"
            className={styles.animationLogo}
          />
        </div>
      ) : (
        <main className={styles.postorino2}>
          <title></title>
          <video
            ref={videoRef}
            src="/movie.mp4" // Sostituisci con il percorso del tuo video
            className={styles.videoBackground}
            autoPlay
            loop
            muted
            playsInline
          />
        </main>
      )}
    </>
  );
}
