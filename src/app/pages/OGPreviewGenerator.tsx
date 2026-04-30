import { useRef } from 'react';
import { Wifi, Tv, Zap, Download } from 'lucide-react';
import { toPng } from 'html-to-image';

export function OGPreviewGenerator() {
  const previewRef = useRef<HTMLDivElement>(null);

  const downloadImage = async () => {
    if (!previewRef.current) return;

    try {
      const dataUrl = await toPng(previewRef.current, {
        width: 1200,
        height: 630,
        pixelRatio: 2,
      });

      const link = document.createElement('a');
      link.download = 'og-preview.png';
      link.href = dataUrl;
      link.click();

      alert('✅ ¡Imagen descargada! Ahora:\n1. Convierte og-preview.png a og-preview.jpg\n2. Colócala en la carpeta public/\n3. Haz git add, commit y push');
    } catch (error) {
      console.error('Error generando imagen:', error);
      alert('❌ Error al generar la imagen. Intenta de nuevo.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center gap-8 p-8">
      <div
        ref={previewRef}
        className="w-[1200px] h-[630px] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 flex items-center justify-center p-16 relative overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white space-y-8">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
              <Wifi className="w-12 h-12 text-blue-600" />
            </div>
            <h1 className="text-8xl font-black tracking-tight">
              INTEL PLUS
            </h1>
          </div>

          {/* Main tagline */}
          <h2 className="text-5xl font-bold leading-tight">
            Internet y TV Premium
          </h2>

          {/* Features */}
          <div className="flex justify-center gap-12 text-2xl font-semibold">
            <div className="flex items-center gap-3">
              <Zap className="w-10 h-10" />
              <span>Hasta 2000 Mbps</span>
            </div>
            <div className="flex items-center gap-3">
              <Tv className="w-10 h-10" />
              <span>300+ Canales</span>
            </div>
          </div>

          {/* Price */}
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl px-16 py-8 inline-block border-2 border-white/30">
            <p className="text-6xl font-black">
              Desde <span className="text-yellow-300">$25</span>/mes
            </p>
          </div>

          {/* Location */}
          <p className="text-3xl font-semibold opacity-90">
            Seattle • Tacoma • Bellevue
          </p>

          {/* Phone */}
          <p className="text-2xl font-bold opacity-80">
            (425) 652-8120
          </p>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={downloadImage}
        className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-xl flex items-center gap-3 shadow-xl transition-all hover:scale-105"
      >
        <Download className="w-6 h-6" />
        Descargar Imagen OG (1200x630)
      </button>

      <div className="bg-gray-800 text-white p-6 rounded-lg max-w-2xl">
        <h3 className="text-xl font-bold mb-3">📝 Instrucciones:</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>Haz click en el botón "Descargar Imagen OG"</li>
          <li>Se descargará <code className="bg-gray-700 px-2 py-1 rounded">og-preview.png</code></li>
          <li>Si necesitas JPG, convierte el archivo (en línea o con tu sistema)</li>
          <li>Mueve el archivo a la carpeta <code className="bg-gray-700 px-2 py-1 rounded">public/</code></li>
          <li>Ejecuta: <code className="bg-gray-700 px-2 py-1 rounded">git add public/og-preview.jpg</code></li>
          <li>Ejecuta: <code className="bg-gray-700 px-2 py-1 rounded">git commit -m "Add OG preview image"</code></li>
          <li>Ejecuta: <code className="bg-gray-700 px-2 py-1 rounded">git push origin main</code></li>
        </ol>
      </div>
    </div>
  );
}
