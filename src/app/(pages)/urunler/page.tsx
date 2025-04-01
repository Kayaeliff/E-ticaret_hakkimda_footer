import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Urunler() {
  return (
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
  );
}
