import styles from '../hakkinda/hakkında.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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

      <div className={styles.yorumlar}>
        <h3>Müşteri Yorumları</h3>
        <blockquote>"Ses kalitesi açısından gerçekten eşsiz!"</blockquote>
        <p>- Ayşe Yılmaz</p>
      </div>
      <div className={styles.sss}>
        <h3>Sık Sorulan Sorular</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Ürünleriniz kaç yıl garantili?</AccordionTrigger>
            <AccordionContent>Ürünlerimiz 2 yıl garantilidir.</AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              ELF hangi kargo şirketleriyle anlaşmalı?
            </AccordionTrigger>
            <AccordionContent>
              ELF üzerinden aldığınız siparişlerinizin gönderimini, ELF'in
              Yurtiçi Kargo, MNG Kargo ve PTT Kargo ile olan anlaşmasından
              faydalanarak, 66,90 TL'den başlayan uygun fiyatlarla
              yapabilirsiniz.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
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
    </div>
  );
}
