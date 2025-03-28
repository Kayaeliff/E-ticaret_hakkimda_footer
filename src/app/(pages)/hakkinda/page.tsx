export default function Hakkinda() {
  return (
    <div className="container mx-auto py-10 px-6 text-center flex flex-col items-center max-w-3xl space-y-6 sm:space-y-4">
      {/* Başlık */}
      <h1 className="text-3xl font-bold text-gray-800 mb-5">Hakkında</h1>

      {/* Alt Başlık */}
      <h2 className="text-2xl font-semibold mb-4 sm:text-lg sm:mb-3">
        Size{' '}
        <span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 px-4 py-1 text-white sm:px-3 sm:py-0.5">
          en iyi
        </span>{' '}
        ses donanımını sunuyoruz.
      </h2>

      {/* Açıklama Metni */}
      <p className="text-lg max-w-2xl px-4 leading-relaxed sm:text-base sm:px-3 sm:max-w-full sm:text-center">
        Türkiye'nin kalbinde yer alan ELF, ileri teknoloji kulaklıklar, AirPods,
        hoparlörler ve ses aksesuarları sunan öncü mağazalardan biridir. Geniş
        showroomumuzda ve lüks gösteri odalarımızda ürünlerimizi inceleyebilir,
        deneyimleyebilirsiniz. Mağazamıza uğrayarak en iyi ses deneyimini
        yaşamanız için sizlere yardımcı olmaktan mutluluk duyan uzman ekibimizle
        tanışabilirsiniz.
      </p>

      {/* Resim */}
      <div className="relative w-full sm:w-3/4 md:w-2/3">
        <img
          className="w-full h-auto rounded-lg bg-pink-600 shadow-xl shadow-pink-500"
          style={{ boxShadow: '0 10px 60px rgba(240, 105, 155, 0.7)' }}
          src="/img/image-gallery-2.jpg"
          alt="Ses Donanımı"
        />
      </div>
    </div>
  );
}
