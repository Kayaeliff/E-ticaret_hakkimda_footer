import styles from '../hakkinda/hakkında.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Hakkinda() {
  return (
    <div className={styles.baslik}>
      <h1>Hakkında</h1>
      <h2 className={styles.altbaslik}>
        Size <span>en iyi</span> ses donanımını sunuyoruz.
      </h2>

      <div className={styles.hakkinda}>
        <p className={styles.aciklamaMetni}>
          Türkiye'nin kalbinde yer alan ELF, ileri teknoloji kulaklıklar,
          AirPods, hoparlörler ve ses aksesuarları sunan öncü mağazalardan
          biridir.
        </p>

        <div className={styles.resim}>
          <Image
            src="/img/image-gallery-2.jpg"
            alt="Ses Donanımı"
            width={600}
            height={400}
          />
        </div>
      </div>

      <div className={styles.misyon}>
        <h3>Misyonumuz</h3>
        <p>Müşterilerimize en kaliteli ses deneyimini sunmak.</p>
      </div>

      <h3>Bizi Takip Edin</h3>
      <div className={styles.sosyalMedya}>
        <Link href="https://facebook.com" target="_blank">
          <FaFacebook size={20} />
        </Link>
        <Link href="https://twitter.com" target="_blank">
          <FaTwitter size={20} />
        </Link>
        <Link href="https://instagram.com" target="_blank">
          <FaInstagram size={20} />
        </Link>
      </div>

      <div className={styles.yorumlar}>
        <h3>Müşteri Yorumları</h3>
        <blockquote>"Ses kalitesi açısından gerçekten eşsiz!"</blockquote>
        <p>- Ayşe Yılmaz</p>
      </div>
    </div>
  );
}
