import { Wifi, Cable, CheckCircle, Zap, Globe, Tv, Signal, Router } from 'lucide-react';

export function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Nuestros Servicios</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Internet de alta velocidad y televisión por cable con la mejor tecnología y servicio excepcional.
          </p>
        </div>
      </section>

      {/* Internet Service */}
      <section id="internet" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <Wifi className="w-10 h-10 text-blue-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Internet Fibra Óptica</h2>
              <p className="text-lg text-gray-700 mb-6">
                Experimenta la velocidad más rápida con nuestra tecnología de fibra óptica de última generación.
                Perfecta para streaming 4K, gaming, videollamadas y trabajo remoto sin interrupciones.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Velocidades hasta 1000 Mbps</h4>
                    <p className="text-gray-600">Descarga películas en segundos, navega sin límites</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Conexión simétrica</h4>
                    <p className="text-gray-600">Misma velocidad de subida y bajada</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Sin límite de datos</h4>
                    <p className="text-gray-600">Navega todo lo que quieras sin restricciones</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Router WiFi 6 incluido</h4>
                    <p className="text-gray-600">Tecnología de última generación para toda tu casa</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Características Técnicas</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white p-4 rounded-lg">
                  <Signal className="w-8 h-8 text-blue-600" />
                  <div>
                    <h4 className="font-bold text-gray-900">Latencia ultra baja</h4>
                    <p className="text-sm text-gray-600">Ideal para gaming y videoconferencias</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-lg">
                  <Router className="w-8 h-8 text-blue-600" />
                  <div>
                    <h4 className="font-bold text-gray-900">Router dual band</h4>
                    <p className="text-sm text-gray-600">2.4 GHz y 5 GHz simultáneos</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-lg">
                  <Zap className="w-8 h-8 text-blue-600" />
                  <div>
                    <h4 className="font-bold text-gray-900">Instalación profesional</h4>
                    <p className="text-sm text-gray-600">Técnicos certificados en 24-48 horas</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-lg">
                  <Globe className="w-8 h-8 text-blue-600" />
                  <div>
                    <h4 className="font-bold text-gray-900">IP estática disponible</h4>
                    <p className="text-sm text-gray-600">Ideal para servidores y negocios</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TV Service */}
      <section id="tv" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Paquetes de Canales</h3>
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Entretenimiento</h4>
                  <p className="text-sm text-gray-600">HBO, Netflix, Disney+, Amazon Prime Video y más canales premium</p>
                </div>
                <div className="bg-white p-5 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Deportes</h4>
                  <p className="text-sm text-gray-600">ESPN, Fox Sports, TNT Sports, toda la acción en vivo</p>
                </div>
                <div className="bg-white p-5 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Películas</h4>
                  <p className="text-sm text-gray-600">Cinemax, Sony Movies, Warner Channel, estrenos todas las semanas</p>
                </div>
                <div className="bg-white p-5 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Infantiles</h4>
                  <p className="text-sm text-gray-600">Disney Jr, Cartoon Network, Nickelodeon, diversión para los niños</p>
                </div>
                <div className="bg-white p-5 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Noticias</h4>
                  <p className="text-sm text-gray-600">CNN, BBC, Fox News, mantente informado 24/7</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <Cable className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Televisión por Cable</h2>
              <p className="text-lg text-gray-700 mb-6">
                Más de 200 canales en alta definición con el mejor contenido de entretenimiento, deportes,
                películas y series. Disfruta de programación para toda la familia.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">200+ canales HD</h4>
                    <p className="text-gray-600">Calidad de imagen superior en todos los canales</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Canales Premium</h4>
                    <p className="text-gray-600">HBO, Showtime, Starz y más incluidos</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">DVR Cloud disponible</h4>
                    <p className="text-gray-600">Graba tus programas favoritos en la nube</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">App móvil</h4>
                    <p className="text-gray-600">Ve TV en tu teléfono o tablet donde sea</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para disfrutar de nuestros servicios?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contrata hoy y recibe instalación gratis más 3 meses de canales premium sin costo adicional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#planes" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg transition inline-block">
              Ver Planes y Precios
            </a>
            <a href="/#contacto" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition inline-block">
              Contactar Ventas
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
