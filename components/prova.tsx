import Link from 'next/link';
import { House } from '@phosphor-icons/react';

export default function prova() {
  return (
    <>
      <nav>
        <div>
          {/* Logo o nome del brand */}
          <Link href="/" passHref>
            <p>My Brand</p>
          </Link>
        </div>
        <ul>
          {/* Link della navbar */}
          <li>
            <Link href="/home" passHref>
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <p>Contact</p>
            </Link>
          </li>
        </ul>
      </nav>
      <div>prova</div>
    </>
  );
}
