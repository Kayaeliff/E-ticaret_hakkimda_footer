import Link from 'next/link';
import '../app/page.css';
import { Button } from '@/components/ui/button';

export default async function Home() {
  return (
    <>
      <div className="hero-container">
        <p className="hero-title">Ana Sayfa</p>
        {/* <Link href={'/csr-fech'} className="hero-link">
          CSR fetch sayfası
        </Link> */}
        <div className="image-gallery">
          <div className="image-card">
            <img
              className="image"
              src="/img/image-xx59-headphones.jpg"
              alt="Ses Donanımı"
            />
            <p className="image-description">
              Doğal, gerçekçi ses ve olağanüstü yapı kalitesini deneyimleyin,
              tutkulu müzik meraklıları için üretilmiştir.
            </p>
            <Link href={'/ürünler'}>
              {' '}
              <Button className="cursor-pointer">Ürünü gör</Button>{' '}
            </Link>
          </div>
          <div className="image-card">
            <img
              className="image"
              src="/img/image-xx99-mark-two-headphones.jpg"
              alt="Ses Donanımı"
            />
            <p className="image-description">
              Doğal, gerçekçi ses ve olağanüstü yapı kalitesini deneyimleyin,
              tutkulu müzik meraklıları için üretilmiştir.
            </p>
            <Link href={'/ürünler'}>
              {' '}
              <Button className="cursor-pointer">Ürünü gör</Button>{' '}
            </Link>
          </div>
          <div className="image-card">
            <img
              className="image"
              src="/img/image-yx1-earphones.jpg"
              alt="Ses Donanımı"
            />
            <p className="image-description">
              Doğal, gerçekçi ses ve olağanüstü yapı kalitesini deneyimleyin,
              tutkulu müzik meraklıları için üretilmiştir.
            </p>
            <Link href={'/ürünler'}>
              {' '}
              <Button className="cursor-pointer">Ürünü gör</Button>{' '}
            </Link>
          </div>
          <div className="image-card">
            <img
              className="image"
              src="/img/image-zx7-speaker.jpg"
              alt="Ses Donanımı"
            />
            <p className="image-description">
              Doğal, gerçekçi ses ve olağanüstü yapı kalitesini deneyimleyin,
              tutkulu müzik meraklıları için üretilmiştir.
            </p>
            <Link href={'/ürünler'}>
              {' '}
              <Button className="cursor-pointer">Ürünü gör</Button>{' '}
            </Link>
          </div>
          <div className="image-card">
            <img
              className="image"
              src="/img/image-zx9-speaker.jpg"
              alt="Ses Donanımı"
            />
            <p className="image-description">
              Doğal, gerçekçi ses ve olağanüstü yapı kalitesini deneyimleyin,
              tutkulu müzik meraklıları için üretilmiştir.
            </p>
            <Link href={'/ürünler'}>
              {' '}
              <Button className="cursor-pointer">Ürünü gör</Button>{' '}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
