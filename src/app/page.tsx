import Link from 'next/link';
import '../app/page.css';
import { Button } from '@/components/ui/button';

export default async function Home() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <img
            className="header-img"
            src="/img/image-header.jpg"
            alt="header kulaklık"
          />
          <div className="header-text">
            <h2>ZX9 Hoparlörler</h2>
            <p>
              Sunmak için olağanüstü şekilde tasarlanmış birinci sınıf
              hoparlörlere yükseltin gerçekten olağanüstü bir ses.
            </p>
          </div>
        </div>
      </header>
      <div className="hero-container">
        <p className="hero-title">Ürünler</p>
        <div className="image-gallery">
          {[
            'image-xx59-headphones.jpg',
            'image-xx99-mark-two-headphones.jpg',
            'image-yx1-earphones.jpg',
            'image-zx7-speaker.jpg',
            'image-zx9-speaker.jpg',
          ].map((src, index) => (
            <div className="image-card" key={index}>
              <img className="image" src={`/img/${src}`} alt="Ses Donanımı" />
              <p className="image-description">
                Doğal, gerçekçi ses ve olağanüstü yapı kalitesini deneyimleyin,
                tutkulu müzik meraklıları için üretilmiştir.
              </p>
              <Link href={'/urunler'}>
                <Button className="btn">Ürünü gör</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
