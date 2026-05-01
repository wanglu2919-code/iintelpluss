import { Link } from "react-router";
import { useState, useEffect } from "react";
import { Wifi, Cable, Zap, Shield, Clock, Users, Mail, MapPin, CheckCircle, Phone, Award, Star, MessageCircle, Tv, X } from 'lucide-react';

// Gallery Photos - Installation Work
import photo1_1 from "../../imports/photo_1_2026-04-28_03-41-17.jpg";
import photo1_2 from "../../imports/photo_1_2026-04-28_03-50-05.jpg";
import photo2_1 from "../../imports/photo_2_2026-04-28_03-26-08.jpg";
import photo2_2 from "../../imports/photo_2_2026-04-28_03-41-17.jpg";
import photo2_3 from "../../imports/photo_2_2026-04-28_03-50-05.jpg";
import photo2_4 from "../../imports/photo_2_2026-04-28_05-58-51.jpg";
import photo1_3 from "../../imports/photo_1_2026-04-28_03-26-08.jpg";
import photo1_4 from "../../imports/photo_1_2026-04-28_05-58-51.jpg";
import photo3_1 from "../../imports/photo_3_2026-04-28_03-26-08.jpg";
import photo3_2 from "../../imports/photo_3_2026-04-28_03-50-05.jpg";
import photo3_3 from "../../imports/photo_3_2026-04-28_05-58-51.jpg";
import photo5_1 from "../../imports/photo_5_2026-04-28_03-26-08.jpg";
import photo5_2 from "../../imports/photo_5_2026-04-28_03-50-05.jpg";
import photo5_3 from "../../imports/photo_5_2026-04-28_05-58-51.jpg";
import photo6_1 from "../../imports/photo_6_2026-04-28_03-26-08.jpg";
import photo6_2 from "../../imports/photo_6_2026-04-28_03-50-05.jpg";
import photo6_3 from "../../imports/photo_6_2026-04-28_05-58-51.jpg";
import photo7_1 from "../../imports/photo_7_2026-04-28_05-58-51.jpg";
import photo8_1 from "../../imports/photo_8_2026-04-28_03-50-05.jpg";
import photo8_2 from "../../imports/photo_8_2026-04-28_05-58-51.jpg";
import photo9_1 from "../../imports/photo_9_2026-04-28_03-50-05.jpg";
import photo9_2 from "../../imports/photo_9_2026-04-28_05-58-51.jpg";
import photo10_1 from "../../imports/photo_10_2026-04-28_05-58-51.jpg";
import photo11_1 from "../../imports/photo_11_2026-04-28_05-58-51.jpg";
import photo12_1 from "../../imports/photo_12_2026-04-28_05-58-51.jpg";
import photo13_1 from "../../imports/photo_13_2026-04-28_05-58-51.jpg";
import photo14_1 from "../../imports/photo_14_2026-04-28_05-58-51.jpg";
import photo15_1 from "../../imports/photo_15_2026-04-28_05-58-51.jpg";
import photo16_1 from "../../imports/photo_16_2026-04-28_05-58-51.jpg";
import photo17_1 from "../../imports/photo_17_2026-04-28_05-58-51.jpg";
import photo18_1 from "../../imports/photo_18_2026-04-28_05-58-51.jpg";
import photo19_1 from "../../imports/photo_19_2026-04-28_05-58-51.jpg";
import photo20_1 from "../../imports/photo_20_2026-04-28_05-58-51.jpg";
import photo21_1 from "../../imports/photo_21_2026-04-28_05-58-51.jpg";
import photo22_1 from "../../imports/photo_22_2026-04-28_05-58-51.jpg";
import photo23_1 from "../../imports/photo_23_2026-04-28_05-58-51.jpg";
import photo24_1 from "../../imports/photo_24_2026-04-28_05-58-51.jpg";

// Payment Method Photos - Barcodes
import paymentCode3 from "../../imports/photo_3_2026-04-28_06-26-39.jpg";
import paymentCode5 from "../../imports/photo_5_2026-04-28_06-26-39.jpg";
import paymentCode7 from "../../imports/photo_7_2026-04-28_06-26-39.jpg";
import paymentCode8 from "../../imports/photo_8_2026-04-28_06-26-39.jpg";
import paymentCode11 from "../../imports/photo_11_2026-04-28_06-26-39.jpg";
import paymentCode12 from "../../imports/photo_12_2026-04-28_06-26-39.jpg";

// MoneyPak Photos
import moneyPak10 from "../../imports/photo_10_2026-04-28_06-26-39.jpg";
import moneyPak13 from "../../imports/photo_13_2026-04-28_06-26-39.jpg";
import moneyPak14 from "../../imports/photo_14_2026-04-28_06-26-39.jpg";
import moneyPak15 from "../../imports/photo_15_2026-04-28_06-26-39.jpg";

export function Home() {
  // Coverage checker state
  const [zipCode, setZipCode] = useState("");
  const [coverageResult, setCoverageResult] = useState<"available" | "unavailable" | null>(null);
  const [isCheckingCoverage, setIsCheckingCoverage] = useState(false);

  // Real-time speed state
  const [averageSpeed, setAverageSpeed] = useState(950);

  // Appointment scheduler state
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [appointmentName, setAppointmentName] = useState("");
  const [appointmentPhone, setAppointmentPhone] = useState("");
  const [appointmentAddress, setAppointmentAddress] = useState("");
  const [showScheduler, setShowScheduler] = useState(false);
  const [addressSuggestions, setAddressSuggestions] = useState<string[]>([]);
  const [showAddressSuggestions, setShowAddressSuggestions] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    price: string;
    speed: string;
    channels: string;
    installation: string;
  } | null>(null);

  // Discount code state
  const [discountCode, setDiscountCode] = useState("");
  const [isCodeValid, setIsCodeValid] = useState<boolean | null>(null);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [isValidatingCode, setIsValidatingCode] = useState(false);
  const [codeErrorMessage, setCodeErrorMessage] = useState("");

  // ========================================
  // 30 CÓDIGOS DE DESCUENTO PERSONALIZADOS
  // ========================================
  // Cada código solo puede usarse 1 vez cada 24 horas
  // Después de usarse, se bloquea por 24 horas

  const validCodes = [
    "INTEL2026",
    "SAVE100",
    "PREMIUM24",
    "FAST2026",
    "TURBO100",
    "MEGA2026",
    "ULTRA24",
    "SUPER100",
    "POWER2026",
    "BOOST24",
    "MAXDEAL",
    "TOPRATE",
    "PROSAVE",
    "ELITE100",
    "SMART24",
    "QUICK2026",
    "FLASH100",
    "ROCKET24",
    "SPEED2026",
    "LIGHTNING",
    "THUNDER100",
    "STORM24",
    "WAVE2026",
    "PULSE100",
    "ENERGY24",
    "FORCE2026",
    "BLAZE100",
    "SPARK24",
    "NITRO2026",
    "TURBO24"
  ];

  // Scroll to top button state
  const [showScrollTop, setShowScrollTop] = useState(false);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Animated statistics state
  const [statsVisible, setStatsVisible] = useState(false);

  // Real-time speed fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setAverageSpeed(prev => {
        const change = (Math.random() - 0.5) * 50;
        const newSpeed = prev + change;
        return Math.max(920, Math.min(990, newSpeed));
      });
    }, 5000); // Every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Check coverage function
  const checkCoverage = () => {
    if (zipCode.length === 5) {
      setIsCheckingCoverage(true);
      setCoverageResult(null);

      // Simulate API call with loading time (5 seconds)
      setTimeout(() => {
        // Always show coverage available for all ZIP codes
        setCoverageResult("available");
        setIsCheckingCoverage(false);
      }, 5000); // 5 seconds delay to seem realistic
    }
  };

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-32 md:py-40 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block mb-8 animate-fade-in">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-blue-900 px-6 py-3 rounded-full font-bold text-sm shadow-lg inline-flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Proveedor Autorizado de AT&T, Xfinity, Spectrum y más
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              Conectividad Premium<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400">
                Sin Límites
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg lg:text-xl text-blue-100 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Internet de fibra óptica hasta <span className="font-bold text-yellow-300">2000 Mbps</span> y más de
              <span className="font-bold text-yellow-300"> 300 canales premium</span>.
              <br className="hidden md:block" />
              Tecnología de punta para tu hogar o negocio.
            </p>

            {/* Features highlights */}
            <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group">
                <Zap className="w-10 h-10 text-yellow-300 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                <p className="font-bold text-white text-xl mb-1">Ultra Rápido</p>
                <p className="text-blue-200 text-sm">Hasta 2000 Mbps</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group">
                <Shield className="w-10 h-10 text-yellow-300 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                <p className="font-bold text-white text-xl mb-1">100% Confiable</p>
                <p className="text-blue-200 text-sm">Sin interrupciones</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group">
                <Users className="w-10 h-10 text-yellow-300 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                <p className="font-bold text-white text-xl mb-1">Soporte 24/7</p>
                <p className="text-blue-200 text-sm">Siempre disponibles</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="#planes"
                className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 px-12 py-5 rounded-2xl text-lg font-bold transition-all shadow-2xl inline-flex items-center gap-3 transform hover:scale-105 hover:shadow-yellow-500/50"
              >
                Ver Planes y Precios
                <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#oferta-especial"
                className="bg-white/10 backdrop-blur-md border-2 border-white/40 hover:bg-white hover:text-blue-900 text-white px-12 py-5 rounded-2xl text-lg font-bold transition-all inline-flex items-center gap-2 hover:shadow-xl"
              >
                <span className="text-2xl">🔥</span>
                Ver Oferta Especial
              </a>
            </div>

            {/* Trust indicator */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full">
              <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
              <p className="text-white font-semibold text-sm">
                Más de 50,000 clientes satisfechos en Estados Unidos
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Statistics Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 dark:from-blue-900 dark:via-purple-900 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4">Números que Hablan por Sí Solos</h2>
            <p className="text-blue-100 text-lg">La confianza de miles de clientes nos respalda</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all transform hover:scale-105">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-yellow-300 mb-3">50K+</div>
              <p className="text-white text-lg font-semibold">Clientes Satisfechos</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all transform hover:scale-105">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-green-300 mb-3">6+</div>
              <p className="text-white text-lg font-semibold">Años de Experiencia</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all transform hover:scale-105">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-pink-300 mb-3">98%</div>
              <p className="text-white text-lg font-semibold">Satisfacción del Cliente</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all transform hover:scale-105">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-orange-300 mb-3">24/7</div>
              <p className="text-white text-lg font-semibold">Soporte Disponible</p>
            </div>
          </div>
        </div>
      </section>


      {/* Coverage Checker Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-700 dark:from-purple-900 dark:to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              ¿Tenemos Servicio en Tu Área?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Ingresa tu código postal (ZIP Code) para verificar la disponibilidad de servicio
            </p>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Ej: 98101"
                  value={zipCode}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '').slice(0, 5);
                    setZipCode(value);
                    setCoverageResult(null);
                  }}
                  className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-blue-600 transition"
                  maxLength={5}
                />
                <button
                  onClick={checkCoverage}
                  disabled={zipCode.length !== 5 || isCheckingCoverage}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                >
                  {isCheckingCoverage ? "Verificando..." : "Verificar"}
                </button>
              </div>

              {isCheckingCoverage && (
                <div className="bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-300 dark:border-blue-700 rounded-xl p-8 animate-fade-in">
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 border-4 border-blue-200 dark:border-blue-800 rounded-full"></div>
                      <div className="absolute inset-0 border-4 border-blue-600 dark:border-blue-400 rounded-full border-t-transparent animate-spin"></div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-2">
                        Verificando Cobertura...
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400">
                        Consultando disponibilidad para ZIP {zipCode}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {coverageResult === "available" && !isCheckingCoverage && (
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 animate-fade-in">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    <h3 className="text-2xl font-bold text-green-800">¡Excelente Noticia!</h3>
                  </div>
                  <p className="text-green-700 text-lg mb-4">
                    Tenemos cobertura en tu área (ZIP {zipCode})
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="https://wa.me/14256528120?text=Hola%2C%20verificqué%20que%20tienen%20servicio%20en%20mi%20área%20(ZIP%20{zipCode}).%20Quiero%20más%20información."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold transition-all inline-flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Contactar por WhatsApp
                    </a>
                    <a
                      href="#planes"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all"
                    >
                      Ver Planes
                    </a>
                  </div>
                </div>
              )}

              {coverageResult === "unavailable" && !isCheckingCoverage && (
                <div className="bg-orange-50 border-2 border-orange-500 rounded-xl p-6 animate-fade-in">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <MapPin className="w-8 h-8 text-orange-600" />
                    <h3 className="text-2xl font-bold text-orange-800">Área en Expansión</h3>
                  </div>
                  <p className="text-orange-700 text-lg mb-4">
                    Aún no tenemos servicio en ZIP {zipCode}, pero estamos expandiéndonos constantemente.
                  </p>
                  <p className="text-orange-600 mb-4">
                    Déjanos tu contacto y te avisaremos cuando lleguemos a tu área.
                  </p>
                  <a
                    href="https://wa.me/14256528120?text=Hola%2C%20quiero%20que%20me%20avisen%20cuando%20tengan%20servicio%20en%20mi%20área%20(ZIP%20{zipCode})"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-bold transition-all inline-flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Dejar mi contacto
                  </a>
                </div>
              )}
            </div>

            <p className="text-blue-100 text-sm mt-6">
              📍 Actualmente damos servicio en Washington, Oregon y áreas circundantes
            </p>
          </div>
        </div>
      </section>


      {/* Plans Section */}
      <section id="planes" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-bold mb-4">
              PLANES
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              Elige Tu Plan Perfecto
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Opciones flexibles para todos los presupuestos y necesidades
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Plan Básico */}
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 md:p-6 lg:p-8 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 text-white relative border-2 border-cyan-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-400 text-white px-4 py-1 rounded-full font-bold text-xs shadow-md">
                💎 ECONÓMICO
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 mt-2">Plan Básico</h3>
              <div className="mb-4">
                <span className="text-3xl md:text-4xl font-bold">$25</span>
                <span className="text-cyan-100">/mes</span>
              </div>
              <div className="mb-6 p-4 bg-white border-2 border-cyan-200 rounded-lg shadow-md">
                <p className="text-center font-bold text-blue-700 text-lg">+ $120 Instalación</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-200" />
                  <span className="font-semibold">1000 Mbps Internet</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-200" />
                  <span className="font-semibold">80 canales TV</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-200" />
                  <span className="font-semibold">Router WiFi incluido</span>
                </li>
              </ul>
              <div className="space-y-2">
                <a
                  href="https://wa.me/14256528120?text=Hola%2C%20estoy%20interesado%20en%20el%20Plan%20Básico%20de%20Intel%20Plus%20(%241000%20Mbps%20-%20%2425%2Fmes).%20¿Me%20pueden%20dar%20más%20información%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold transition-all shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <a
                  href="https://m.me/366942046511890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-blue-600 hover:bg-cyan-50 py-3 rounded-lg font-bold transition-all shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Messenger
                </a>
                <a
                  href="#agenda-instalacion"
                  onClick={() => {
                    setShowScheduler(true);
                    setSelectedPlan({
                      name: "Plan Básico",
                      price: "$25/mes",
                      speed: "1000 Mbps",
                      channels: "80 canales TV",
                      installation: "$120"
                    });
                  }}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 rounded-lg font-bold transition-all shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Clock className="w-5 h-5" />
                  Agendar Instalación
                </a>
              </div>
            </div>

            {/* Plan Premium */}
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 p-8 rounded-xl shadow-2xl hover:scale-110 transition-all duration-300 text-white relative border-4 border-yellow-400 transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-blue-900 px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                ⭐ MEJOR OFERTA ⭐
              </div>
              <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-xs animate-pulse">
                AHORRA MÁS
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 mt-4">Plan Premium</h3>
              <p className="text-blue-100 mb-4 text-sm">El favorito de nuestros clientes</p>
              <div className="mb-4">
                <span className="text-3xl md:text-5xl font-bold">$40</span>
                <span className="text-blue-100 text-xl">/mes</span>
              </div>
              <div className="mb-6 p-4 bg-yellow-400 border-2 border-yellow-500 rounded-lg shadow-lg">
                <p className="text-center font-bold text-blue-900 text-lg">+ $135 Instalación</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg mb-6">
                <p className="text-center text-yellow-300 font-bold text-sm">🎁 INCLUYE BENEFICIOS EXCLUSIVOS</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                  <span className="font-semibold">Internet Ilimitado sin límite de velocidad</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                  <span className="font-semibold text-lg">🎬 300+ Canales Premium HD</span>
                </li>
                <li className="flex items-center gap-2 ml-6">
                  <CheckCircle className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm">HBO, Showtime, Starz, Cinemax</span>
                </li>
                <li className="flex items-center gap-2 ml-6">
                  <CheckCircle className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm">Todos los canales deportivos (ESPN, Fox Sports)</span>
                </li>
                <li className="flex items-center gap-2 ml-6">
                  <CheckCircle className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm">Paquete familiar completo</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                  <span className="font-semibold">Router WiFi 6 de última generación</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                  <span className="font-semibold">DVR Cloud ilimitado</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                  <span className="font-semibold">Soporte VIP 24/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                  <span className="font-semibold">3 meses gratis de streaming</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                  <span className="font-semibold">Sin contratos - Cancela cuando quieras</span>
                </li>
              </ul>
              <div className="space-y-2">
                <a
                  href="https://wa.me/14256528120?text=🔥%20Hola%2C%20quiero%20el%20Plan%20Premium%20de%20Intel%20Plus%20(Internet%20Ilimitado%20%2B%20300%2B%20Canales%20-%20%2440%2Fmes).%20¡La%20mejor%20oferta!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-bold text-lg transition-all shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp
                </a>
                <a
                  href="https://m.me/366942046511890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-blue-900 hover:from-yellow-500 hover:to-orange-500 py-4 rounded-lg font-bold text-lg transition-all shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-6 h-6" />
                  Messenger
                </a>
                <a
                  href="#agenda-instalacion"
                  onClick={() => {
                    setShowScheduler(true);
                    setSelectedPlan({
                      name: "Plan Premium",
                      price: "$40/mes",
                      speed: "Internet Ilimitado",
                      channels: "300+ Canales Premium HD",
                      installation: "$135"
                    });
                  }}
                  className="w-full bg-white hover:bg-gray-100 text-blue-900 py-4 rounded-lg font-bold text-lg transition-all shadow-lg transform hover:scale-105 flex items-center justify-center gap-2 border-2 border-yellow-400"
                >
                  <Clock className="w-6 h-6" />
                  Agendar Instalación
                </a>
              </div>
              <p className="text-center text-yellow-300 text-xs mt-3 font-semibold">Oferta por tiempo limitado</p>
            </div>

            {/* Plan Ultra */}
            <div className="bg-gradient-to-br from-orange-500 to-red-600 p-4 md:p-6 lg:p-8 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 text-white relative border-2 border-orange-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-400 to-red-400 text-white px-4 py-1 rounded-full font-bold text-xs shadow-md">
                ⚡ ALTA VELOCIDAD
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 mt-2">Plan Ultra</h3>
              <div className="mb-4">
                <span className="text-3xl md:text-4xl font-bold">$60</span>
                <span className="text-orange-100">/mes</span>
              </div>
              <div className="mb-6 p-4 bg-white border-2 border-orange-200 rounded-lg shadow-md">
                <p className="text-center font-bold text-red-700 text-lg">+ $150 Instalación</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-200" />
                  <span className="font-semibold">2000 Mbps Internet</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-200" />
                  <span className="font-semibold">150 canales TV básicos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-200" />
                  <span className="font-semibold">DVR Cloud incluido</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-200" />
                  <span className="font-semibold">Router WiFi 6 gratis</span>
                </li>
              </ul>
              <div className="space-y-2">
                <a
                  href="https://wa.me/14256528120?text=Hola%2C%20estoy%20interesado%20en%20el%20Plan%20Ultra%20de%20Intel%20Plus%20(2000%20Mbps%20-%20%2460%2Fmes).%20¿Me%20pueden%20dar%20más%20información%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold transition-all shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <a
                  href="https://m.me/366942046511890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-red-600 hover:bg-orange-50 py-3 rounded-lg font-bold transition-all shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Messenger
                </a>
                <a
                  href="#agenda-instalacion"
                  onClick={() => {
                    setShowScheduler(true);
                    setSelectedPlan({
                      name: "Plan Ultra",
                      price: "$60/mes",
                      speed: "2000 Mbps",
                      channels: "150 canales TV básicos",
                      installation: "$150"
                    });
                  }}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 rounded-lg font-bold transition-all shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Clock className="w-5 h-5" />
                  Agendar Instalación
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Appointment Scheduler Section */}
      <section id="agenda-instalacion" className="py-20 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
                📅 Agenda Tu Instalación
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Elige el día y hora que mejor te convenga
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border-4 border-orange-200 dark:border-orange-700">
              {isProcessing ? (
                <div className="text-center py-16">
                  <div className="mx-auto w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-6"></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Procesando tu solicitud...
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Estamos verificando la disponibilidad y reservando tu cita
                  </p>
                </div>
              ) : showConfirmation ? (
                <div className="text-center py-8">
                  <div className="mx-auto w-24 h-24 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400" />
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    ¡Cita Agendada con Éxito!
                  </h3>

                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl p-6 mb-6 max-w-md mx-auto">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Número de Confirmación
                    </p>
                    <p className="text-4xl font-black text-blue-600 dark:text-blue-400 tracking-wider">
                      {confirmationNumber}
                    </p>
                  </div>

                  {selectedPlan && (
                    <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-900/40 dark:via-emerald-900/40 dark:to-teal-900/40 border-4 border-green-400 dark:border-green-600 rounded-2xl p-8 mb-6 max-w-2xl mx-auto shadow-2xl">
                      <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="bg-green-500 p-3 rounded-full">
                          <CheckCircle className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-3xl font-black text-green-900 dark:text-green-100">
                          Tu Plan Seleccionado
                        </h4>
                      </div>

                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-6">
                        <div className="text-center mb-6 pb-6 border-b-2 border-green-200 dark:border-green-700">
                          <h5 className="text-3xl font-black text-green-700 dark:text-green-400 mb-2">{selectedPlan.name}</h5>
                          <p className="text-5xl font-black text-blue-600 dark:text-blue-400">{selectedPlan.price}</p>
                        </div>

                        <div className="space-y-4">
                          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg p-4 flex items-center gap-4">
                            <div className="bg-blue-500 p-2 rounded-lg">
                              <Wifi className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">Velocidad de Internet</p>
                              <p className="text-xl font-black text-blue-700 dark:text-blue-300">{selectedPlan.speed}</p>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg p-4 flex items-center gap-4">
                            <div className="bg-purple-500 p-2 rounded-lg">
                              <Tv className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">Canales de TV</p>
                              <p className="text-xl font-black text-purple-700 dark:text-purple-300">{selectedPlan.channels}</p>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 rounded-lg p-4 flex items-center gap-4">
                            <div className="bg-orange-500 p-2 rounded-lg">
                              <Zap className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">Costo de Instalación</p>
                              {isCodeValid && discountAmount > 0 ? (
                                <div>
                                  <p className="text-sm text-gray-500 dark:text-gray-400 line-through">{selectedPlan.installation}</p>
                                  <p className="text-xl font-black text-green-600 dark:text-green-400">$100</p>
                                </div>
                              ) : (
                                <p className="text-xl font-black text-orange-700 dark:text-orange-300">{selectedPlan.installation}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {isCodeValid && discountAmount > 0 && (
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/40 dark:to-emerald-900/40 border-2 border-green-400 dark:border-green-600 rounded-xl p-5 mb-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="bg-green-500 p-2 rounded-lg">
                              <CheckCircle className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="text-lg font-black text-green-900 dark:text-green-100">
                              ¡Descuento Aplicado!
                            </h4>
                          </div>
                          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Código usado:</p>
                            <p className="text-xl font-black text-green-600 dark:text-green-400 mb-3">{discountCode}</p>
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-gray-600 dark:text-gray-400">Ahorraste:</span>
                              <span className="text-lg font-black text-green-600 dark:text-green-400">${discountAmount} 💰</span>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 border-2 border-yellow-400 dark:border-yellow-600 rounded-xl p-5 text-center">
                        <p className="text-lg font-bold text-gray-800 dark:text-gray-200">
                          💡 Guarda este número de confirmación y los detalles de tu plan
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                          Uno de nuestros agentes te contactará pronto para coordinar la instalación
                        </p>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => {
                      setShowConfirmation(false);
                      setShowScheduler(false);
                      // Reset discount code for next booking
                      setDiscountCode('');
                      setIsCodeValid(null);
                      setDiscountAmount(0);
                    }}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all shadow-lg transform hover:scale-105"
                  >
                    Entendido
                  </button>
                </div>
              ) : !showScheduler ? (
                <div className="text-center">
                  <div className="text-6xl mb-6">📆</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    ¿Listo para comenzar?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    Reserva tu instalación en solo unos clics. Nuestros técnicos están disponibles de lunes a domingo.
                  </p>
                  <button
                    onClick={() => {
                      setShowScheduler(true);
                      // Set default plan if none selected
                      if (!selectedPlan) {
                        setSelectedPlan({
                          name: "Plan Premium",
                          price: "$40/mes",
                          speed: "Internet Ilimitado",
                          channels: "300+ Canales Premium HD",
                          installation: "$135"
                        });
                      }
                    }}
                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all shadow-lg transform hover:scale-105"
                  >
                    Agendar Ahora
                  </button>
                </div>
              ) : (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    Completa tus datos
                  </h3>

                  {selectedPlan && (
                    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-blue-900/30 border-3 border-blue-400 dark:border-blue-600 rounded-xl p-6 mb-8 shadow-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-500 p-2 rounded-lg">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-black text-blue-900 dark:text-blue-100">
                          Plan Seleccionado
                        </h4>
                      </div>

                      <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
                        <div className="text-center mb-4 pb-4 border-b-2 border-blue-200 dark:border-blue-700">
                          <h5 className="text-2xl font-black text-blue-700 dark:text-blue-400 mb-1">{selectedPlan.name}</h5>
                          <p className="text-4xl font-black text-green-600 dark:text-green-400">{selectedPlan.price}</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-3">
                          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 rounded-lg p-3 text-center">
                            <Wifi className="w-5 h-5 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                            <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold mb-1">Internet</p>
                            <p className="text-sm font-black text-blue-700 dark:text-blue-300">{selectedPlan.speed}</p>
                          </div>

                          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/40 dark:to-purple-800/40 rounded-lg p-3 text-center">
                            <Tv className="w-5 h-5 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                            <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold mb-1">TV</p>
                            <p className="text-sm font-black text-purple-700 dark:text-purple-300">{selectedPlan.channels}</p>
                          </div>

                          <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/40 dark:to-orange-800/40 rounded-lg p-3 text-center">
                            <Zap className="w-5 h-5 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                            <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold mb-1">Instalación</p>
                            <p className="text-sm font-black text-orange-700 dark:text-orange-300">{selectedPlan.installation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                        Tu Nombre Completo
                      </label>
                      <input
                        type="text"
                        placeholder="Ej: Juan Pérez"
                        value={appointmentName}
                        onChange={(e) => {
                          // Only allow letters and spaces
                          const value = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]/g, '');
                          setAppointmentName(value);
                        }}
                        className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:border-orange-500 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        placeholder="(425) 555-0123"
                        value={appointmentPhone}
                        onChange={(e) => {
                          // Only allow numbers
                          const numbers = e.target.value.replace(/\D/g, '');

                          // Limit to 10 digits
                          const limited = numbers.slice(0, 10);

                          // Format as (123) 456-7890
                          let formatted = '';
                          if (limited.length > 0) {
                            formatted = '(' + limited.slice(0, 3);
                            if (limited.length > 3) {
                              formatted += ') ' + limited.slice(3, 6);
                            }
                            if (limited.length > 6) {
                              formatted += '-' + limited.slice(6, 10);
                            }
                          }

                          setAppointmentPhone(formatted);
                        }}
                        className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:border-orange-500 transition"
                      />
                    </div>

                    <div className="md:col-span-2 relative">
                      <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                        Dirección de Instalación
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Empieza a escribir tu dirección..."
                          value={appointmentAddress}
                          onChange={async (e) => {
                            const value = e.target.value;
                            setAppointmentAddress(value);

                            // Buscar direcciones reales usando Nominatim API (OpenStreetMap)
                            if (value.length >= 3) {
                              try {
                                const response = await fetch(
                                  `https://nominatim.openstreetmap.org/search?` +
                                  `q=${encodeURIComponent(value)}&` +
                                  `countrycodes=us&` +
                                  `format=json&` +
                                  `addressdetails=1&` +
                                  `limit=8`,
                                  {
                                    headers: {
                                      'User-Agent': 'IntelPlusWebsite/1.0'
                                    }
                                  }
                                );

                                if (response.ok) {
                                  const data = await response.json();

                                  // Formatear las direcciones
                                  const formattedAddresses = data.map((item: any) => {
                                    const addr = item.address;
                                    let formatted = '';

                                    // Construir dirección legible
                                    if (addr.house_number && addr.road) {
                                      formatted = `${addr.house_number} ${addr.road}`;
                                    } else if (addr.road) {
                                      formatted = addr.road;
                                    } else if (item.display_name) {
                                      // Usar los primeros componentes del display_name
                                      const parts = item.display_name.split(',');
                                      formatted = parts.slice(0, 2).join(',');
                                    }

                                    // Agregar ciudad
                                    if (addr.city || addr.town || addr.village) {
                                      formatted += `, ${addr.city || addr.town || addr.village}`;
                                    }

                                    // Agregar estado
                                    if (addr.state) {
                                      formatted += `, ${addr.state}`;
                                    }

                                    // Agregar código postal
                                    if (addr.postcode) {
                                      formatted += ` ${addr.postcode}`;
                                    }

                                    return formatted || item.display_name;
                                  }).filter((addr: string) => addr.length > 0);

                                  setAddressSuggestions(formattedAddresses);
                                  setShowAddressSuggestions(formattedAddresses.length > 0);
                                } else {
                                  setShowAddressSuggestions(false);
                                }
                              } catch (error) {
                                console.error('Error buscando direcciones:', error);
                                setShowAddressSuggestions(false);
                              }
                            } else {
                              setShowAddressSuggestions(false);
                            }
                          }}
                          onBlur={() => {
                            // Retrasar el cierre para permitir clics en sugerencias
                            setTimeout(() => setShowAddressSuggestions(false), 300);
                          }}
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:border-orange-500 transition"
                        />
                      </div>

                      {/* Sugerencias de direcciones */}
                      {showAddressSuggestions && addressSuggestions.length > 0 && (
                        <div className="absolute z-50 w-full mt-1 bg-white dark:bg-gray-700 border-2 border-orange-300 dark:border-orange-600 rounded-lg shadow-2xl max-h-64 overflow-y-auto">
                          <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-600">
                            <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              Direcciones sugeridas
                            </p>
                          </div>
                          {addressSuggestions.map((suggestion, index) => (
                            <button
                              key={index}
                              type="button"
                              onMouseDown={(e) => {
                                e.preventDefault();
                                setAppointmentAddress(suggestion);
                                setShowAddressSuggestions(false);
                              }}
                              className="w-full text-left px-4 py-3 hover:bg-orange-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-colors border-b border-gray-200 dark:border-gray-600 last:border-b-0 cursor-pointer"
                            >
                              <div className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <span className="text-sm font-medium">{suggestion}</span>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                        Fecha Preferida
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => {
                          setSelectedDate(e.target.value);
                          // Resetear la hora seleccionada cuando cambie la fecha
                          setSelectedTime("");
                        }}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:border-orange-500 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                        Hora Preferida
                      </label>
                      <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:border-orange-500 transition"
                      >
                        <option value="">Selecciona una hora</option>
                        {(() => {
                          const timeSlots = [
                            { value: "08:00-10:00", label: "8:00 AM - 10:00 AM", startHour: 8 },
                            { value: "10:00-12:00", label: "10:00 AM - 12:00 PM", startHour: 10 },
                            { value: "12:00-14:00", label: "12:00 PM - 2:00 PM", startHour: 12 },
                            { value: "14:00-16:00", label: "2:00 PM - 4:00 PM", startHour: 14 },
                            { value: "16:00-18:00", label: "4:00 PM - 6:00 PM", startHour: 16 },
                            { value: "18:00-20:00", label: "6:00 PM - 8:00 PM", startHour: 18 }
                          ];

                          const today = new Date().toISOString().split('T')[0];
                          const isToday = selectedDate === today;
                          const currentHour = new Date().getHours();

                          return timeSlots
                            .filter(slot => {
                              // Si es hoy, solo mostrar horas que no han pasado
                              if (isToday) {
                                return slot.startHour > currentHour;
                              }
                              // Si es un día futuro, mostrar todas las horas
                              return true;
                            })
                            .map(slot => (
                              <option key={slot.value} value={slot.value}>
                                {slot.label}
                              </option>
                            ));
                        })()}
                      </select>
                    </div>
                  </div>

                  {/* Discount Code Field */}
                  <div className="mb-6">
                    <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
                      ✨ ¿Tienes un código de descuento? (Opcional)
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={discountCode}
                        onChange={(e) => {
                          const code = e.target.value.toUpperCase();
                          setDiscountCode(code);
                          setIsCodeValid(null);
                          setCodeErrorMessage("");
                        }}
                        placeholder=""
                        className="flex-1 px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:border-orange-500 transition uppercase"
                      />
                      <button
                        onClick={async () => {
                          if (!discountCode) {
                            setIsCodeValid(null);
                            setCodeErrorMessage("");
                            return;
                          }

                          // Start loading
                          setIsValidatingCode(true);
                          setIsCodeValid(null);
                          setCodeErrorMessage("");

                          // Wait 4 seconds before validating
                          await new Promise(resolve => setTimeout(resolve, 4000));

                          // Check if code exists in valid codes
                          const codeExists = validCodes.includes(discountCode);

                          if (!codeExists) {
                            setIsCodeValid(false);
                            setIsValidatingCode(false);
                            setDiscountAmount(0);
                            setCodeErrorMessage("Código inválido");
                            return;
                          }

                          // Check if code was used in last 24 hours
                          const usedCodesData = localStorage.getItem('usedDiscountCodes');
                          const usedCodes = usedCodesData ? JSON.parse(usedCodesData) : {};

                          const lastUsedTimestamp = usedCodes[discountCode];
                          const now = Date.now();
                          const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

                          if (lastUsedTimestamp && (now - lastUsedTimestamp) < twentyFourHours) {
                            // Code was used recently - show as invalid without revealing when it will be available
                            setIsCodeValid(false);
                            setIsValidatingCode(false);
                            setDiscountAmount(0);
                            setCodeErrorMessage("Código inválido");
                            return;
                          }

                          // Code is valid and available
                          setIsCodeValid(true);
                          setIsValidatingCode(false);

                          if (selectedPlan) {
                            // Calculate discount to bring installation to $100
                            const originalPrice = parseInt(selectedPlan.installation.replace('$', ''));
                            const discount = originalPrice - 100;
                            setDiscountAmount(discount);

                            // Save code usage timestamp
                            usedCodes[discountCode] = now;
                            localStorage.setItem('usedDiscountCodes', JSON.stringify(usedCodes));
                          }
                        }}
                        disabled={isValidatingCode}
                        className={`px-6 py-3 rounded-lg font-bold transition-all shadow-lg flex items-center gap-2 ${
                          isValidatingCode
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-orange-500 hover:bg-orange-600 text-white'
                        }`}
                      >
                        {isValidatingCode ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Validando...
                          </>
                        ) : (
                          'Aplicar'
                        )}
                      </button>
                    </div>

                    {isValidatingCode && (
                      <div className="mt-3 bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-400 dark:border-blue-600 rounded-lg p-4">
                        <p className="text-blue-800 dark:text-blue-200 font-bold text-sm flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                          Validando código...
                        </p>
                      </div>
                    )}

                    {isCodeValid === true && !isValidatingCode && (
                      <div className="mt-3 bg-green-50 dark:bg-green-900/30 border-2 border-green-400 dark:border-green-600 rounded-lg p-4">
                        <p className="text-green-800 dark:text-green-200 font-bold text-sm flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          ¡Código válido! Ahorraste ${discountAmount} en la instalación 💰
                        </p>
                        {selectedPlan && (
                          <p className="text-green-700 dark:text-green-300 text-xs mt-2">
                            Precio original: ${selectedPlan.installation.replace('$', '')} → Nuevo precio: $100
                          </p>
                        )}
                      </div>
                    )}

                    {isCodeValid === false && !isValidatingCode && (
                      <div className="mt-3 bg-red-50 dark:bg-red-900/30 border-2 border-red-400 dark:border-red-600 rounded-lg p-4">
                        <p className="text-red-800 dark:text-red-200 font-bold text-sm">
                          ❌ {codeErrorMessage || "Código inválido. Verifica e intenta de nuevo."}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-200 dark:border-blue-700 rounded-lg p-4 mb-6">
                    <p className="text-blue-800 dark:text-blue-200 text-sm">
                      <span className="font-bold">📍 Nota:</span> Asegúrate de ingresar la dirección correcta para la instalación. Un técnico te contactará para confirmar la cita.
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-3">
                    <button
                      onClick={() => setShowScheduler(false)}
                      className="w-full md:w-auto bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-800 dark:text-white px-6 py-3 rounded-lg font-bold transition"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={async () => {
                        if (!appointmentName || !appointmentPhone || !appointmentAddress || !selectedDate || !selectedTime) {
                          alert('Por favor completa todos los campos');
                          return;
                        }

                        // Start processing
                        setIsProcessing(true);

                        // Wait 6-7 seconds to make it feel realistic
                        await new Promise(resolve => setTimeout(resolve, 6500));

                        // Send notification to Telegram
                        try {
                          const finalInstallationPrice = isCodeValid && discountAmount > 0 ? '$100' : selectedPlan?.installation || 'N/A';

                          const message = `🔔 Nueva Cita Agendada - Intel Plus\n\n` +
                            `👤 Nombre: ${appointmentName}\n` +
                            `📞 Teléfono: ${appointmentPhone}\n` +
                            `📍 Dirección: ${appointmentAddress}\n` +
                            `📅 Fecha: ${selectedDate}\n` +
                            `⏰ Hora: ${selectedTime}\n\n` +
                            `📦 PLAN SELECCIONADO:\n` +
                            `${selectedPlan ? `• Plan: ${selectedPlan.name}\n• Precio: ${selectedPlan.price}\n• Internet: ${selectedPlan.speed}\n• TV: ${selectedPlan.channels}\n• Instalación: ${selectedPlan.installation}` : 'No especificado'}\n\n` +
                            `${isCodeValid && discountAmount > 0 ? `💰 DESCUENTO APLICADO:\n• Código: ${discountCode}\n• Descuento: $${discountAmount}\n• Instalación original: ${selectedPlan?.installation}\n• Instalación final: $100\n\n` : ''}` +
                            `✅ Cliente confirmado vía web`;

                          await fetch(`https://api.telegram.org/bot8737060404:AAHT8yXgMAft9KfdRtma9oNRY8uh_DvX04g/sendMessage`, {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                              chat_id: '1387754989',
                              text: message,
                              parse_mode: 'HTML'
                            })
                          });

                          // Generate random confirmation number
                          const randomNum = Math.floor(100000 + Math.random() * 900000);
                          setConfirmationNumber(`CONF-${randomNum}`);

                          // Show success - keep scheduler open to show confirmation
                          setIsProcessing(false);
                          setShowConfirmation(true);
                          // DON'T close scheduler - keep it open to show confirmation
                          // setShowScheduler(false);
                          setAppointmentName('');
                          setAppointmentPhone('');
                          setAppointmentAddress('');
                          setSelectedDate('');
                          setSelectedTime('');
                          // Don't reset discount code - keep it visible in confirmation
                        } catch (error) {
                          console.error('Error sending Telegram notification:', error);
                          setIsProcessing(false);
                          alert('⚠️ Hubo un error. Por favor intenta de nuevo.');
                        }
                      }}
                      disabled={isProcessing || !appointmentName || !appointmentPhone || !appointmentAddress || !selectedDate || !selectedTime}
                      className={`w-full md:flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all shadow-lg flex items-center justify-center gap-2 ${
                        isProcessing || !appointmentName || !appointmentPhone || !appointmentAddress || !selectedDate || !selectedTime
                          ? 'opacity-50 cursor-not-allowed'
                          : ''
                      }`}
                    >
                      {isProcessing ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Procesando...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Agendar Instalación
                        </>
                      )}
                    </button>
                    <a
                      href={`https://wa.me/14256528120?text=Hola%2C%20quiero%20agendar%20una%20instalación%0A%0ANombre%3A%20${appointmentName}%0ATeléfono%3A%20${appointmentPhone}%0ADirección%3A%20${appointmentAddress}%0AFecha%3A%20${selectedDate}%0AHora%3A%20${selectedTime}${selectedPlan ? `%0A%0APlan%20seleccionado%3A%20${selectedPlan.name}%20-%20${selectedPlan.price}%0AInternet%3A%20${selectedPlan.speed}%0ATV%3A%20${selectedPlan.channels}` : ''}${isCodeValid && discountAmount > 0 ? `%0A%0ACódigo%20descuento%3A%20${discountCode}%0ADescuento%3A%20%24${discountAmount}%0AInstalación%20final%3A%20%24100` : ''}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full md:flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-bold transition-all shadow-lg flex items-center justify-center gap-2 ${
                        !appointmentName || !appointmentPhone || !appointmentAddress || !selectedDate || !selectedTime
                          ? 'opacity-50 cursor-not-allowed'
                          : ''
                      }`}
                      onClick={async (e) => {
                        if (!appointmentName || !appointmentPhone || !appointmentAddress || !selectedDate || !selectedTime) {
                          e.preventDefault();
                          alert('Por favor completa todos los campos');
                          return;
                        }

                        // Send notification to Telegram
                        try {
                          const message = `🔔 Nueva Cita Agendada - Intel Plus\n\n` +
                            `👤 Nombre: ${appointmentName}\n` +
                            `📞 Teléfono: ${appointmentPhone}\n` +
                            `📍 Dirección: ${appointmentAddress}\n` +
                            `📅 Fecha: ${selectedDate}\n` +
                            `⏰ Hora: ${selectedTime}\n\n` +
                            `📦 PLAN SELECCIONADO:\n` +
                            `${selectedPlan ? `• Plan: ${selectedPlan.name}\n• Precio: ${selectedPlan.price}\n• Internet: ${selectedPlan.speed}\n• TV: ${selectedPlan.channels}\n• Instalación: ${selectedPlan.installation}` : 'No especificado'}\n\n` +
                            `${isCodeValid && discountAmount > 0 ? `💰 DESCUENTO APLICADO:\n• Código: ${discountCode}\n• Descuento: $${discountAmount}\n• Instalación original: ${selectedPlan?.installation}\n• Instalación final: $100\n\n` : ''}` +
                            `✅ Cliente confirmado vía WhatsApp`;

                          await fetch(`https://api.telegram.org/bot8737060404:AAHT8yXgMAft9KfdRtma9oNRY8uh_DvX04g/sendMessage`, {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                              chat_id: '1387754989',
                              text: message,
                              parse_mode: 'HTML'
                            })
                          });
                        } catch (error) {
                          console.error('Error sending Telegram notification:', error);
                        }
                      }}
                    >
                      <MessageCircle className="w-5 h-5" />
                      Confirmar por WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                ⏰ Horarios disponibles: Lunes a Domingo, 8:00 AM - 8:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Special Promotion Section */}
      <section id="oferta-especial" className="py-20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-block bg-yellow-400 text-red-600 px-6 py-2 rounded-full font-black text-sm mb-4 animate-bounce">
                🔥 OFERTA LIMITADA - NO SIEMPRE DISPONIBLE 🔥
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 drop-shadow-lg">
                🌟 ¡Plan Especial del Año! 🌟
              </h2>
              <p className="text-2xl text-yellow-300 font-bold">
                ¡Ahorra $200 y no pagues nada más hasta Abril 2027!
              </p>
            </div>

            {/* Main offer card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8 border-8 border-yellow-400 transform hover:scale-105 transition-all duration-300">
              {/* Price comparison */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-6 mb-4">
                  <div className="relative">
                    <span className="text-3xl text-gray-400 line-through">$450</span>
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full rotate-12">
                      ANTES
                    </div>
                  </div>
                  <span className="text-5xl font-black text-blue-600">→</span>
                  <div className="relative">
                    <span className="text-6xl font-black text-green-600">$250</span>
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full rotate-12">
                      ¡AHORA!
                    </div>
                  </div>
                </div>
                <div className="inline-block bg-red-500 text-white px-6 py-3 rounded-full font-bold text-xl">
                  💸 ¡Ahorras $200 al año!
                </div>
              </div>

              {/* Key benefits */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8">
                <h3 className="text-2xl font-black text-gray-900 mb-4 text-center">
                  ✅ Sin Preocupaciones hasta Abril 2027
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <p className="font-bold text-lg text-red-600">❌ Sin Mensualidades</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <p className="font-bold text-lg text-red-600">❌ Sin Cortes</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <p className="font-bold text-lg text-red-600">❌ Sin Recargos</p>
                  </div>
                </div>
              </div>

              {/* Benefits grid */}
              <div className="mb-8">
                <h3 className="text-3xl font-black text-gray-900 mb-6 text-center">
                  🎁 Beneficios Exclusivos Incluidos:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl border-2 border-green-300">
                    <Star className="w-8 h-8 text-green-600 fill-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-lg text-gray-900">📹 Cámaras de Seguridad</p>
                      <p className="text-sm text-gray-600">Totalmente gratis</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl border-2 border-blue-300">
                    <Star className="w-8 h-8 text-blue-600 fill-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-lg text-gray-900">🚚 Traslado Sin Costo</p>
                      <p className="text-sm text-gray-600">Si te mudas, te seguimos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-xl border-2 border-purple-300">
                    <Star className="w-8 h-8 text-purple-600 fill-purple-600 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-lg text-gray-900">🛠️ Soporte Técnico 24/7</p>
                      <p className="text-sm text-gray-600">Asistencia cuando la necesites</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-xl border-2 border-yellow-300">
                    <Star className="w-8 h-8 text-yellow-600 fill-yellow-600 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-lg text-gray-900">🎁 Tarjeta de Regalo</p>
                      <p className="text-sm text-gray-600">$150-$200 después de 25 días</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-xl border-2 border-red-300">
                    <Star className="w-8 h-8 text-red-600 fill-red-600 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-lg text-gray-900">📺 TV 58 Pulgadas</p>
                      <p className="text-sm text-gray-600">Televisor gratis incluido</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-gradient-to-r from-pink-50 to-pink-100 p-4 rounded-xl border-2 border-pink-300">
                    <Star className="w-8 h-8 text-pink-600 fill-pink-600 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-lg text-gray-900">🍿 Netflix & HBO Max</p>
                      <p className="text-sm text-gray-600">Streaming premium incluido</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment summary */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl p-8 mb-6">
                <h3 className="text-3xl font-black text-center mb-6 text-yellow-400">💰 Resumen de Pago</h3>
                <div className="space-y-4 max-w-md mx-auto">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-600">
                    <span className="text-lg">Plan Anual Completo:</span>
                    <span className="text-2xl font-bold text-green-400">$250</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-600">
                    <span className="text-lg">Instalación (con descuento):</span>
                    <span className="text-2xl font-bold text-green-400">$110</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t-4 border-yellow-400">
                    <span className="text-2xl font-black">TOTAL ÚNICO:</span>
                    <span className="text-5xl font-black text-yellow-400">$360</span>
                  </div>
                  <p className="text-center text-yellow-300 font-bold text-lg pt-4">
                    ✅ ¡Sin pagar nada más hasta Abril 2027!
                  </p>
                </div>
              </div>

              {/* Important info badges */}
              <div className="space-y-3 mb-6">
                <div className="bg-green-100 border-l-4 border-green-600 p-4 rounded-lg">
                  <p className="text-green-800 font-bold flex items-center gap-2">
                    <span className="text-2xl">✅</span>
                    <span>¿Ya tienes servicio con nosotros? ¡Puedes aplicar a esta oferta después de la instalación!</span>
                  </p>
                </div>
                <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded-lg">
                  <p className="text-blue-800 font-bold flex items-center gap-2">
                    <span className="text-2xl">💡</span>
                    <span>Clientes nuevos y existentes pueden beneficiarse de esta promoción especial</span>
                  </p>
                </div>
                <div className="bg-red-100 border-l-4 border-red-600 p-4 rounded-lg">
                  <p className="text-red-800 font-bold flex items-center gap-2">
                    <span className="text-2xl">⚠️</span>
                    <span>Este plan especial es limitado y no siempre está disponible</span>
                  </p>
                </div>
                <div className="bg-orange-100 border-l-4 border-orange-600 p-4 rounded-lg">
                  <p className="text-orange-800 font-bold flex items-center gap-2">
                    <span className="text-2xl">⚠️</span>
                    <span>No está disponible para todos los clientes y puede cerrarse en cualquier momento</span>
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <p className="text-center text-xl font-bold text-gray-900 mb-4">
                  👉 Asegura este precio exclusivo hoy mismo
                </p>
                <a
                  href="https://wa.me/14256528120?text=🌟%20Hola%2C%20quiero%20información%20sobre%20el%20Plan%20Especial%20Anual%20de%20%24250%20(ahorro%20de%20%24200).%20¡No%20quiero%20perder%20esta%20oferta!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-5 rounded-xl font-black text-xl transition-all shadow-2xl transform hover:scale-105 flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-7 h-7" />
                  🔥 ¡ASEGURAR PRECIO POR WHATSAPP!
                </a>
                <a
                  href="https://m.me/366942046511890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-5 rounded-xl font-black text-xl transition-all shadow-2xl transform hover:scale-105 flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-7 h-7" />
                  💬 CONSULTAR POR MESSENGER
                </a>
              </div>

              <p className="text-center text-gray-600 text-sm mt-4 font-semibold">
                ⏰ Esta oferta puede terminar en cualquier momento
              </p>
            </div>

            {/* Urgency footer */}
            <div className="text-center">
              <p className="text-white text-2xl font-bold drop-shadow-lg">
                ⚡ No dejes pasar esta oportunidad única ⚡
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Real-Time Speed Panel */}
      <section className="py-12 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-700 dark:to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/30">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-white mb-2">
                  🚀 Velocidad Promedio en Tiempo Real
                </h3>
                <p className="text-blue-100 dark:text-blue-200">
                  Velocidad actual de nuestros clientes ahora mismo
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl text-center transform hover:scale-105 transition">
                  <div className="text-5xl mb-2">⚡</div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Velocidad Promedio</p>
                  <p className="text-4xl font-black text-blue-600 dark:text-blue-400">
                    {Math.round(averageSpeed)}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Mbps</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl text-center transform hover:scale-105 transition">
                  <div className="text-5xl mb-2">📊</div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Usuarios Activos</p>
                  <p className="text-4xl font-black text-green-600 dark:text-green-400">
                    1,350
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">En línea ahora</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl text-center transform hover:scale-105 transition">
                  <div className="text-5xl mb-2">⭐</div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Satisfacción</p>
                  <p className="text-4xl font-black text-yellow-600 dark:text-yellow-400">
                    98%
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Clientes felices</p>
                </div>
              </div>

              <div className="mt-6 bg-white/20 dark:bg-white/10 rounded-lg p-4">
                <p className="text-center text-white text-sm">
                  🔄 Actualizado cada 5 segundos • {new Date().toLocaleTimeString('es-ES')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* About Us Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold mb-4">
                SOBRE NOSOTROS
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">¿Quiénes Somos?</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                Tu socio de confianza en soluciones de conectividad
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 px-5 py-3 rounded-full">
                  <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <span className="font-bold text-gray-900 dark:text-white">Proveedor Autorizado</span>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="font-bold text-blue-600 dark:text-blue-400">Intel Plus</span> es tu proveedor autorizado de servicios de internet
                  y televisión por cable. Trabajamos con las compañías más reconocidas del mercado para ofrecerte
                  las mejores opciones de conectividad.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Como distribuidor oficial autorizado, te brindamos acceso a los servicios de internet de alta velocidad
                  y paquetes de televisión premium de proveedores líderes como <span className="font-semibold">AT&T</span>,
                  <span className="font-semibold"> Xfinity</span>, y otros operadores de primera línea.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Nuestro compromiso es simplificar tu experiencia, ayudándote a encontrar el plan perfecto que se
                  ajuste a tus necesidades y presupuesto, con el respaldo de las mejores compañías del sector.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-900 p-10 rounded-3xl shadow-2xl">
                <h3 className="text-3xl font-black text-white mb-8">¿Por Qué Elegirnos?</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">Proveedores de Confianza</h4>
                      <p className="text-blue-100">Trabajamos solo con las compañías más reconocidas del mercado</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">Asesoría Personalizada</h4>
                      <p className="text-blue-100">Te ayudamos a encontrar el plan ideal para ti</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">Mejores Ofertas</h4>
                      <p className="text-blue-100">Acceso a promociones exclusivas y mejores precios</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">Soporte Dedicado</h4>
                      <p className="text-blue-100">Atención personalizada antes, durante y después de la instalación</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner Logos Section */}
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700 py-16 px-10 rounded-3xl shadow-xl">
              <div className="text-center mb-12">
                <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">Partners</p>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white">Proveedor Autorizado</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
                <div className="flex items-center justify-center">
                  <div className="bg-white dark:bg-gray-900 w-full h-24 rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 border-2 border-blue-100 dark:border-blue-900 hover:border-blue-300 dark:hover:border-blue-700 flex items-center justify-center group">
                    <p className="text-xl font-black text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">AT&T</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-white dark:bg-gray-900 w-full h-24 rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 border-2 border-purple-100 dark:border-purple-900 hover:border-purple-300 dark:hover:border-purple-700 flex items-center justify-center group">
                    <p className="text-xl font-black text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">Xfinity</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-white dark:bg-gray-900 w-full h-24 rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 border-2 border-pink-100 dark:border-pink-900 hover:border-pink-300 dark:hover:border-pink-700 flex items-center justify-center group">
                    <p className="text-xl font-black text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-transform">T-Mobile</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-white dark:bg-gray-900 w-full h-24 rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 border-2 border-indigo-100 dark:border-indigo-900 hover:border-indigo-300 dark:hover:border-indigo-700 flex items-center justify-center group">
                    <p className="text-xl font-black text-indigo-700 dark:text-indigo-400 group-hover:scale-110 transition-transform">Spectrum</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-white dark:bg-gray-900 w-full h-24 rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 flex items-center justify-center group">
                    <p className="text-base font-bold text-gray-600 dark:text-gray-300 group-hover:scale-110 transition-transform">+ Más</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold mb-4">
              TESTIMONIOS
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">Lo Que Dicen Nuestros Clientes</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Historias reales de personas que confiaron en nosotros
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-200 mb-6 italic">
                "Excelente servicio! La instalación fue rápida y el internet es súper rápido. El técnico fue muy profesional y me explicó todo claramente."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">María González</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Seattle, WA</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-200 mb-6 italic">
                "Mejor precio que cualquier otra compañía. Los canales de TV son increíbles y el internet nunca falla. 100% recomendado!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  C
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Carlos Ramirez</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tacoma, WA</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-200 mb-6 italic">
                "Atención al cliente de primera. Siempre responden rápido y resuelven cualquier duda. El servicio funciona perfecto desde el día uno."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  A
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Ana Martínez</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Bellevue, WA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Our Work Gallery Section */}
      <section id="trabajos" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-bold mb-4">
              PORTAFOLIO
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              Nuestro Trabajo en Acción
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Instalaciones profesionales con equipos de última generación de los proveedores líderes
            </p>
          </div>

          {/* Gallery Grid - Organized by Categories */}
          <div className="space-y-8 mb-12">

            {/* Category 1: Equipment & Products */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-6 border-4 border-blue-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">📦</span>
                Equipos y Productos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                {/* AT&T Equipment */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo1_1}
                    alt="Equipo AT&T Internet"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">AT&T Fiber Internet</p>
                      <p className="text-sm text-gray-200">Equipos de última generación</p>
                    </div>
                  </div>
                </div>

                {/* T-Mobile Router in Box */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo2_1}
                    alt="Router T-Mobile nuevo"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">T-Mobile Home Internet</p>
                      <p className="text-sm text-gray-200">Equipos nuevos sellados</p>
                    </div>
                  </div>
                </div>

                {/* T-Mobile Router Powered */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo2_2}
                    alt="Router T-Mobile funcionando"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Equipos Activados</p>
                      <p className="text-sm text-gray-200">Listos para usar</p>
                    </div>
                  </div>
                </div>

                {/* 5G Gateway */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo1_3}
                    alt="5G Gateway"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">5G Gateway</p>
                      <p className="text-sm text-gray-200">Tecnología de punta</p>
                    </div>
                  </div>
                </div>

                {/* T-Mobile Router Setup */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo3_1}
                    alt="Configuración de router"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Configuración Completa</p>
                      <p className="text-sm text-gray-200">Todo listo para conectar</p>
                    </div>
                  </div>
                </div>

                {/* T-Mobile Gateway on Desk */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo10_1}
                    alt="Gateway T-Mobile encendiendo"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">T-Mobile Gateway Activando</p>
                      <p className="text-sm text-gray-200">Proceso de conexión inicial</p>
                    </div>
                  </div>
                </div>

                {/* T-Mobile Gateway on Shelf */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo11_1}
                    alt="Gateway T-Mobile en repisa"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Gateway Instalado</p>
                      <p className="text-sm text-gray-200">Ubicación óptima para señal</p>
                    </div>
                  </div>
                </div>

                {/* Router Back Ports */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo12_1}
                    alt="Puertos del router T-Mobile"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Conexiones del Router</p>
                      <p className="text-sm text-gray-200">Puertos y especificaciones</p>
                    </div>
                  </div>
                </div>

                {/* Gateway Powering Up */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo13_1}
                    alt="Gateway T-Mobile iniciando"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Sistema Iniciando</p>
                      <p className="text-sm text-gray-200">Configuración automática</p>
                    </div>
                  </div>
                </div>

                {/* Router Specifications */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo14_1}
                    alt="Especificaciones técnicas del router"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Detalles Técnicos</p>
                      <p className="text-sm text-gray-200">Información del modelo y potencia</p>
                    </div>
                  </div>
                </div>

                {/* All-Fi Hub Active */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo5_1}
                    alt="All-Fi Hub conectado"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">All-Fi Hub Activo</p>
                      <p className="text-sm text-gray-200">Señal óptima garantizada</p>
                    </div>
                  </div>
                </div>

                {/* All-Fi Hub Detail */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo6_1}
                    alt="All-Fi Hub configurado"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Equipo Configurado</p>
                      <p className="text-sm text-gray-200">Conexión estable activa</p>
                    </div>
                  </div>
                </div>

                {/* AT&T Air-Fi Hub on Bed */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo21_1}
                    alt="AT&T Air-Fi Hub"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">AT&T Air-Fi Hub</p>
                      <p className="text-sm text-gray-200">Equipos nuevos listos para instalar</p>
                    </div>
                  </div>
                </div>

                {/* AT&T Air-Fi Hub Powered On */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo22_1}
                    alt="AT&T Air-Fi Hub encendido"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Air-Fi Hub Conectado</p>
                      <p className="text-sm text-gray-200">Luces verdes indicando conexión activa</p>
                    </div>
                  </div>
                </div>

                {/* AT&T Air-Fi Hub with Adapter */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo23_1}
                    alt="AT&T Air-Fi Hub con adaptador"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Hub con Adaptador</p>
                      <p className="text-sm text-gray-200">Configuración completa de conexión</p>
                    </div>
                  </div>
                </div>

                {/* Equipment Setup with Modem */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo24_1}
                    alt="Configuración completa de equipos"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Equipos Conectados</p>
                      <p className="text-sm text-gray-200">Modem y router configurados</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Category 2: Technicians in Action */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-6 border-4 border-green-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">👨‍🔧</span>
                Técnicos en Acción
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                {/* Technician Working Inside */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo1_4}
                    alt="Técnico certificado instalando"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Técnicos Certificados</p>
                      <p className="text-sm text-gray-200">Equipos de seguridad y profesionalismo</p>
                    </div>
                  </div>
                </div>

                {/* AT&T Technician */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo2_4}
                    alt="Técnico AT&T instalando"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Instalación AT&T</p>
                      <p className="text-sm text-gray-200">Técnico autorizado en acción</p>
                    </div>
                  </div>
                </div>

                {/* Technician Installing TV */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo2_3}
                    alt="Técnico instalando TV"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Instalación de TV</p>
                      <p className="text-sm text-gray-200">Técnicos certificados</p>
                    </div>
                  </div>
                </div>

                {/* Outdoor Installation */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo3_2}
                    alt="Instalación exterior profesional"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Instalación Exterior</p>
                      <p className="text-sm text-gray-200">Trabajo profesional garantizado</p>
                    </div>
                  </div>
                </div>

                {/* Technician Wiring Work */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo5_3}
                    alt="Instalación de cableado"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Cableado Profesional</p>
                      <p className="text-sm text-gray-200">Instalación interna limpia</p>
                    </div>
                  </div>
                </div>

                {/* Technician Setup Equipment */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo6_2}
                    alt="Configuración de equipos"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Configuración de Servicios</p>
                      <p className="text-sm text-gray-200">Pruebas de calidad y velocidad</p>
                    </div>
                  </div>
                </div>

                {/* Basement Installation */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo6_3}
                    alt="Instalación en sótano"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Instalación Completa</p>
                      <p className="text-sm text-gray-200">Cableado estructurado profesional</p>
                    </div>
                  </div>
                </div>

                {/* Technician Drilling with Safety Equipment */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo9_2}
                    alt="Técnico perforando con equipo de seguridad"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Instalación con Seguridad</p>
                      <p className="text-sm text-gray-200">Protección y profesionalismo</p>
                    </div>
                  </div>
                </div>

                {/* Technician Installing TV in Bedroom */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo16_1}
                    alt="Técnico instalando TV en dormitorio"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Montaje de TV</p>
                      <p className="text-sm text-gray-200">Instalación en dormitorios</p>
                    </div>
                  </div>
                </div>

                {/* Team of 3 Technicians Installing TV */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo19_1}
                    alt="Equipo de técnicos instalando TV"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Equipo Completo</p>
                      <p className="text-sm text-gray-200">Instalación de TV en pared</p>
                    </div>
                  </div>
                </div>

                {/* Technician Configuring TV Software */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo20_1}
                    alt="Técnico configurando software"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Actualización de Software</p>
                      <p className="text-sm text-gray-200">Configuración final del sistema</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Category 3: TV Installations & Testing */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-6 border-4 border-purple-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">📺</span>
                Instalaciones de TV y Pruebas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                {/* TV Installation Complete */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo3_3}
                    alt="Instalación de TV completada"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">TV Instalada y Funcionando</p>
                      <p className="text-sm text-gray-200">Servicio completo activado</p>
                    </div>
                  </div>
                </div>

                {/* Final Installation Ready */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo8_2}
                    alt="Instalación finalizada"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Instalación Lista</p>
                      <p className="text-sm text-gray-200">Cliente satisfecho, servicio activado</p>
                    </div>
                  </div>
                </div>

                {/* Dish Installation Test Screen */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo17_1}
                    alt="Prueba de señal Dish"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Prueba de Señal Satelital</p>
                      <p className="text-sm text-gray-200">Verificación de todos los canales</p>
                    </div>
                  </div>
                </div>

                {/* Hopper TV Starting Up */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo18_1}
                    alt="Hopper TV iniciando"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Sistema Hopper Activando</p>
                      <p className="text-sm text-gray-200">DVR y TV por cable listos</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Category 4: Satellite Installations */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-6 border-4 border-orange-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">🛰️</span>
                Instalaciones Satelitales
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {/* Satellite Installation on Roof */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo5_2}
                    alt="Instalación de antena satelital"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Instalación Satelital</p>
                      <p className="text-sm text-gray-200">Trabajo en altura certificado</p>
                    </div>
                  </div>
                </div>

                {/* Satellite Installation with Ladder */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo7_1}
                    alt="Instalación de antena"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Instalación en Techo</p>
                      <p className="text-sm text-gray-200">Antena satelital HD instalada</p>
                    </div>
                  </div>
                </div>

                {/* Satellite Dish Installation with Technician */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo15_1}
                    alt="Técnico Dish instalando antena"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Instalación de Antena Satelital</p>
                      <p className="text-sm text-gray-200">Técnico Dish en trabajo exterior</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Category 5: Service Vehicles */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-6 border-4 border-red-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">🚗</span>
                Vehículos de Servicio
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {/* Dish Installation Van 1 */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo1_2}
                    alt="Camión de instalación Dish"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Instalación Profesional</p>
                      <p className="text-sm text-gray-200">Servicio certificado Dish</p>
                    </div>
                  </div>
                </div>

                {/* Dish Service Van 2 */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo8_1}
                    alt="Camión Dish en servicio"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Servicio Dish Profesional</p>
                      <p className="text-sm text-gray-200">Equipos certificados en sitio</p>
                    </div>
                  </div>
                </div>

                {/* Dish Service Van 3 */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={photo9_1}
                    alt="Flota Dish"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">Flota de Servicio Dish</p>
                      <p className="text-sm text-gray-200">Equipos profesionales listos</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Stats/Features */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-xl text-center border-2 border-blue-200">
              <div className="text-4xl font-black text-blue-600 mb-2">100%</div>
              <p className="text-gray-700 font-semibold">Instalaciones Exitosas</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center border-2 border-green-200">
              <div className="text-4xl font-black text-green-600 mb-2">24/7</div>
              <p className="text-gray-700 font-semibold">Soporte Técnico</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl text-center border-2 border-purple-200">
              <div className="text-4xl font-black text-purple-600 mb-2">5⭐</div>
              <p className="text-gray-700 font-semibold">Calificación Clientes</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl text-center border-2 border-orange-200">
              <div className="text-4xl font-black text-orange-600 mb-2">+50K</div>
              <p className="text-gray-700 font-semibold">Clientes Satisfechos</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-xl text-gray-700 mb-6 font-semibold">
              ¿Listo para tu instalación profesional?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/14256528120?text=Hola%2C%20vi%20su%20trabajo%20y%20quiero%20una%20instalación%20profesional%20con%20Intel%20Plus"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-6 h-6" />
                Solicitar Instalación
              </a>
              <a
                href="#planes"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg inline-flex items-center justify-center gap-2"
              >
                Ver Planes Disponibles
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Payment Methods Section */}
      <section id="metodos-pago" className="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                💳 Métodos de Pago Fáciles y Seguros
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Paga tu servicio de manera conveniente en miles de tiendas cerca de ti
              </p>
              <div className="w-24 h-1 bg-green-600 mx-auto mt-6"></div>
            </div>

            {/* Payment Methods Tabs */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 border-4 border-green-300">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Elige Tu Método de Pago Preferido
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Method 1: Barcode */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-400">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">1</span>
                    <h4 className="text-2xl font-bold text-gray-900">Pago con Código de Barras</h4>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-600 rounded-full p-1 mt-1">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900">Paso 1: Solicita tu código</h5>
                        <p className="text-gray-700 text-sm">Contáctanos y te enviaremos tu código de barras personal</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-green-600 rounded-full p-1 mt-1">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900">Paso 2: Elige una tienda</h5>
                        <p className="text-gray-700 text-sm">Ve a cualquier tienda de la lista con tu código</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-green-600 rounded-full p-1 mt-1">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900">Paso 3: Paga en efectivo</h5>
                        <p className="text-gray-700 text-sm">Muestra el código al cajero y realiza tu pago</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-green-600 rounded-full p-1 mt-1">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900">Paso 4: ¡Confirmación!</h5>
                        <p className="text-gray-700 text-sm">Pago procesado automáticamente</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-white rounded-lg p-4 border-2 border-green-300">
                    <p className="text-green-800 font-bold text-center">
                      ✅ Rápido y automático
                    </p>
                  </div>
                </div>

                {/* Method 2: MoneyPak */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-400">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">2</span>
                    <h4 className="text-2xl font-bold text-gray-900">Green Dot MoneyPak</h4>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-600 rounded-full p-1 mt-1">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900">Paso 1: Ve a la tienda</h5>
                        <p className="text-gray-700 text-sm">Busca en la sección de "Gift Cards / Prepaid"</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-blue-600 rounded-full p-1 mt-1">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900">Paso 2: Pide un MoneyPak</h5>
                        <p className="text-gray-700 text-sm">Di: "Quiero comprar un Green Dot MoneyPak"</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-blue-600 rounded-full p-1 mt-1">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900">Paso 3: Carga el monto</h5>
                        <p className="text-gray-700 text-sm">Elige cuánto cargar + $5.95 de tarifa</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-blue-600 rounded-full p-1 mt-1">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900">Paso 4: Envíanos fotos</h5>
                        <p className="text-gray-700 text-sm">Tarjeta y recibo para configurar tu pago</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-white rounded-lg p-4 border-2 border-blue-300">
                    <p className="text-blue-800 font-bold text-center">
                      💵 Solo efectivo • Tarifa: $5.95
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                <p className="text-yellow-800 font-semibold">
                  ⚠️ <span className="font-bold">Importante:</span> Ambos métodos solo aceptan pagos en efectivo. No se aceptan tarjetas de crédito o débito.
                </p>
              </div>
            </div>

            {/* MoneyPak Detailed Section */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl p-8 mb-12 text-white">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">🛒 Cómo Comprar un Green Dot MoneyPak</h3>
                <p className="text-xl text-blue-100">Disponible en más de 70,000 tiendas en Estados Unidos</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Supermercados */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span>🛒</span> Supermercados
                  </h4>
                  <ul className="space-y-2 text-blue-50">
                    <li>• Walmart</li>
                    <li>• Kroger</li>
                    <li>• Safeway</li>
                    <li>• Albertsons</li>
                    <li>• Publix</li>
                    <li>• Meijer</li>
                  </ul>
                </div>

                {/* Farmacias */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span>💊</span> Farmacias
                  </h4>
                  <ul className="space-y-2 text-blue-50">
                    <li>• CVS Pharmacy</li>
                    <li>• Walgreens</li>
                    <li>• Rite Aid</li>
                  </ul>
                  <h4 className="text-xl font-bold mb-4 mt-6 flex items-center gap-2">
                    <span>💵</span> Tiendas de Dólar
                  </h4>
                  <ul className="space-y-2 text-blue-50">
                    <li>• Dollar General</li>
                    <li>• Family Dollar</li>
                    <li>• Dollar Tree</li>
                  </ul>
                </div>

                {/* Conveniencia */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span>🏪</span> 24 Horas
                  </h4>
                  <ul className="space-y-2 text-blue-50">
                    <li>• 7-Eleven</li>
                    <li>• Circle K</li>
                    <li>• Speedway</li>
                  </ul>
                  <h4 className="text-xl font-bold mb-4 mt-6 flex items-center gap-2">
                    <span>💼</span> Servicios Financieros
                  </h4>
                  <ul className="space-y-2 text-blue-50">
                    <li>• CheckChangers</li>
                    <li>• PLS</li>
                    <li>• Amscot</li>
                    <li>• CFSC</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 text-gray-900">
                <h4 className="text-2xl font-bold mb-4 text-center">📋 Proceso Detallado</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                      <div>
                        <h5 className="font-bold mb-1">Busca la sección correcta</h5>
                        <p className="text-sm text-gray-600">Siempre está en "Gift Cards / Prepaid"</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                      <div>
                        <h5 className="font-bold mb-1">Pregunta al cajero</h5>
                        <p className="text-sm text-gray-600">"Quiero comprar un Green Dot MoneyPak, por favor"</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                      <div>
                        <h5 className="font-bold mb-1">Elige el monto</h5>
                        <p className="text-sm text-gray-600">Decide cuánto dinero quieres cargar a la tarjeta</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                      <div>
                        <h5 className="font-bold mb-1">Paga en efectivo</h5>
                        <p className="text-sm text-gray-600">Monto elegido + $5.95 de tarifa (solo efectivo, no tarjetas)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">5</span>
                      <div>
                        <h5 className="font-bold mb-1">Recibe tu MoneyPak</h5>
                        <p className="text-sm text-gray-600">Te darán la tarjeta y el recibo</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">6</span>
                      <div>
                        <h5 className="font-bold mb-1">Envíanos las fotos</h5>
                        <p className="text-sm text-gray-600">Fotografía la tarjeta completa y el recibo para configurar tu pago</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4 text-center">
                    <p className="font-bold text-green-800 mb-1">✔️ Más de 70,000 tiendas</p>
                    <p className="text-xs text-green-700">Disponible en todo EE.UU.</p>
                  </div>
                  <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4 text-center">
                    <p className="font-bold text-blue-800 mb-1">💵 Solo efectivo</p>
                    <p className="text-xs text-blue-700">No aceptan tarjetas</p>
                  </div>
                  <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4 text-center">
                    <p className="font-bold text-orange-800 mb-1">💰 Tarifa: $5.95</p>
                    <p className="text-xs text-orange-700">Por cada MoneyPak</p>
                  </div>
                </div>
              </div>

              {/* Visual Examples */}
              <div className="mt-8">
                <h4 className="text-2xl font-bold text-white mb-6 text-center">📸 Ejemplos Visuales</h4>

                {/* Step 1: What to look for */}
                <div className="bg-white rounded-xl p-6 mb-6 text-gray-900">
                  <h5 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                    Así se ve la tarjeta MoneyPak que debes buscar:
                  </h5>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-xl p-4 border-2 border-gray-200">
                      <img
                        src={moneyPak10}
                        alt="Tarjeta MoneyPak en tienda"
                        className="w-full h-auto rounded-lg mb-3"
                      />
                      <p className="text-sm text-gray-600 text-center font-semibold">En el exhibidor de la tienda</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 border-2 border-gray-200">
                      <img
                        src={moneyPak13}
                        alt="Tarjeta MoneyPak frontal"
                        className="w-full h-auto rounded-lg mb-3"
                      />
                      <p className="text-sm text-gray-600 text-center font-semibold">Vista frontal de la tarjeta</p>
                      <div className="mt-2 bg-green-50 border-l-4 border-green-600 p-2 rounded">
                        <p className="text-xs text-green-800 font-bold">✅ Busca el logo "green dot" y "MoneyPak" verde</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                    <p className="text-yellow-800 text-sm">
                      <span className="font-bold">💡 Tip:</span> Pregunta al cajero: "Quiero un Green Dot MoneyPak" y te llevarán directamente a la sección correcta.
                    </p>
                  </div>
                </div>

                {/* Step 2: How to send photos */}
                <div className="bg-white rounded-xl p-6 text-gray-900">
                  <h5 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                    Así debes enviarnos las fotos después de comprar:
                  </h5>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-xl p-4 border-2 border-blue-300">
                      <img
                        src={moneyPak14}
                        alt="Ejemplo: Tarjeta y recibo juntos"
                        className="w-full h-auto rounded-lg mb-3"
                      />
                      <p className="text-sm text-gray-700 text-center font-semibold mb-2">✅ Ejemplo 1: Tarjeta + Recibo</p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Coloca la tarjeta y el recibo juntos</li>
                        <li>• Asegúrate que el código de barras se vea claramente</li>
                        <li>• Foto bien iluminada</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 border-2 border-blue-300">
                      <img
                        src={moneyPak15}
                        alt="Ejemplo: Tarjeta verde y recibo CVS"
                        className="w-full h-auto rounded-lg mb-3"
                      />
                      <p className="text-sm text-gray-700 text-center font-semibold mb-2">✅ Ejemplo 2: Vista Completa</p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Tarjeta completa visible</li>
                        <li>• Recibo con todos los detalles legibles</li>
                        <li>• Ambos en la misma foto</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                    <p className="text-red-800 text-sm font-bold">
                      ⚠️ MUY IMPORTANTE: Guarda tu recibo hasta que confirmemos el pago. Es tu comprobante de compra.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-1 gap-8 mb-12">

              {/* Store List for Barcode Payment */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-green-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center">📱</span>
                  Tiendas para Pago con Código de Barras
                </h3>

                <p className="text-gray-700 mb-6">
                  🏪 Encuentra la tienda más cercana a ti entre más de 40 opciones disponibles para usar tu código de barras:
                </p>

                <div className="bg-gray-50 rounded-xl p-6 max-h-96 overflow-y-auto border-2 border-gray-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> 7-Eleven 🏪
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Baker's 🛒
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Bashas' 🛒
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> City Market 🏙️
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Circle K ⛽
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> CVS Pharmacy 💊
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Delek ⛽
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Dillons 🛒
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Dollar General 💵
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Duane Reade 💊
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> EZ Mart ⛽
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Family Dollar 🏪
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Food 4 Less 🛒
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Foods Co 🛒
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Fred Meyer 🛒
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Fry's 🛒
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Gerbes 🛒
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> GoMart ⛽
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> H-E-B 🛒
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Holiday Station ⛽
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Huck's ⛽
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Jacksons ⛽
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Jay C Food Store 🛒
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> King Soopers 🛒
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Kroger 🛒
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Kwik Check Foods ⛽
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> KwikTrip ⛽
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Kum & Go ⛽
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Mariano's 🛒
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Metro Market 🛒
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Pay-Less Super Markets 🛒
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Pick'n Save 🛒
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Pilot Travel Centers ⛽
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> QFC 🛒
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Ralphs 🛒
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Royal Farms 🛒
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Ruler 🛒
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> SaveMart 🛒
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Sheetz ⛽
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Smith's Food and Drug 🛒
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Speedway ⛽
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Thorntons ⛽
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> TravelCenters of America 🛣️
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Walgreens 💊
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Wesco ⛽
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">•</span> Yesway ⛽
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                  <p className="text-yellow-800 text-sm">
                    📍 <span className="font-bold">Consejo:</span> Elige la tienda más cercana o la que mejor te convenga para completar tu pago.
                  </p>
                </div>
              </div>
            </div>

            {/* Examples Section */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-3">
                <span className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center">📱</span>
                Ejemplos de Códigos de Pago
              </h3>
              <p className="text-center text-gray-700 mb-8 text-lg">
                Así es como se ve el código que te enviaremos para pagar en las tiendas
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Dollar General Example */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200 hover:shadow-2xl transition-all">
                  <div className="bg-yellow-500 text-gray-900 font-bold text-center py-2">
                    Dollar General
                  </div>
                  <div className="p-4">
                    <img
                      src={paymentCode11}
                      alt="Código de barras Dollar General"
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-sm text-gray-600 text-center mt-3">
                      Muestra este código en Dollar General
                    </p>
                  </div>
                </div>

                {/* CVS Example */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200 hover:shadow-2xl transition-all">
                  <div className="bg-red-600 text-white font-bold text-center py-2">
                    CVS Pharmacy
                  </div>
                  <div className="p-4">
                    <img
                      src={paymentCode12}
                      alt="Código de barras CVS"
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-sm text-gray-600 text-center mt-3">
                      Válido en cualquier CVS Pharmacy
                    </p>
                  </div>
                </div>

                {/* Green Code Example 1 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200 hover:shadow-2xl transition-all">
                  <div className="bg-green-600 text-white font-bold text-center py-2">
                    Código Universal
                  </div>
                  <div className="p-4">
                    <img
                      src={paymentCode8}
                      alt="Código de barras universal"
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-sm text-gray-600 text-center mt-3">
                      Pide al cajero escanear el código
                    </p>
                  </div>
                </div>

                {/* Green Code Example 2 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200 hover:shadow-2xl transition-all">
                  <div className="bg-green-600 text-white font-bold text-center py-2">
                    Código Universal
                  </div>
                  <div className="p-4">
                    <img
                      src={paymentCode7}
                      alt="Código de barras universal alternativo"
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-sm text-gray-600 text-center mt-3">
                      Válido en todas las tiendas de la lista
                    </p>
                  </div>
                </div>

                {/* 7-Eleven Example */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200 hover:shadow-2xl transition-all">
                  <div className="bg-orange-500 text-white font-bold text-center py-2">
                    7-Eleven
                  </div>
                  <div className="p-4">
                    <div className="w-full h-96 overflow-hidden rounded-lg">
                      <img
                        src={paymentCode5}
                        alt="Código de barras 7-Eleven"
                        className="w-full h-full object-cover"
                        style={{ objectPosition: '50% 15%' }}
                      />
                    </div>
                    <p className="text-sm text-gray-600 text-center mt-3">
                      Depósito mínimo: $20
                    </p>
                  </div>
                </div>

                {/* CVS Vertical Example */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200 hover:shadow-2xl transition-all">
                  <div className="bg-red-600 text-white font-bold text-center py-2">
                    CVS Pharmacy
                  </div>
                  <div className="p-4">
                    <div className="w-full h-96 overflow-hidden rounded-lg">
                      <img
                        src={paymentCode3}
                        alt="Código de barras CVS vertical"
                        className="w-full h-full object-cover"
                        style={{ objectPosition: '50% 15%' }}
                      />
                    </div>
                    <p className="text-sm text-gray-600 text-center mt-3">
                      Formato móvil para fácil acceso
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-2xl p-8 md:p-12 text-white text-center">
              <h3 className="text-3xl font-black mb-4">
                ¿Listo para obtener tu código de pago?
              </h3>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Contáctanos ahora y te enviaremos tu código de barras personal de inmediato
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/14256528120?text=Hola%2C%20quiero%20obtener%20mi%20código%20de%20pago%20para%20pagar%20en%20tienda.%20¿Me%20pueden%20ayudar%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg inline-flex items-center justify-center gap-3 transform hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6" />
                  Solicitar Código por WhatsApp
                </a>
                <a
                  href="https://m.me/366942046511890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg inline-flex items-center justify-center gap-3 transform hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6" />
                  Solicitar por Messenger
                </a>
              </div>
              <p className="text-green-100 text-sm mt-6">
                💬 Respuesta inmediata • Código enviado al instante • Pago seguro garantizado
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-bold mb-4">
                FAQ
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">Preguntas Frecuentes</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Resolvemos tus dudas más comunes
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "¿Cuánto tiempo tarda la instalación?",
                  a: "La instalación generalmente toma entre 1 a 2 horas. Nuestros técnicos coordinan contigo el mejor horario y llegan puntuales. Una vez instalado, tu servicio está listo para usar inmediatamente."
                },
                {
                  q: "¿Necesito firmar un contrato a largo plazo?",
                  a: "¡No! Todos nuestros planes son sin contrato. Puedes cancelar cuando quieras sin penalidades ni cargos adicionales. Creemos en ganarnos tu confianza con servicio de calidad, no atándote a contratos."
                },
                {
                  q: "¿Qué áreas cubren?",
                  a: "Damos servicio en todo Washington, Oregon y áreas circundantes. Usa nuestro verificador de cobertura arriba para confirmar si tenemos servicio en tu código postal específico."
                },
                {
                  q: "¿Qué pasa si tengo problemas técnicos?",
                  a: "Nuestro equipo de soporte está disponible 24/7 por WhatsApp y Messenger. Respondemos en minutos y resolvemos la mayoría de problemas de forma remota. Si necesitamos visitar, programamos una cita el mismo día o siguiente."
                },
                {
                  q: "¿Puedo cambiar de plan después?",
                  a: "¡Por supuesto! Puedes mejorar o cambiar tu plan en cualquier momento sin costo adicional. Solo contáctanos y hacemos el cambio inmediatamente."
                },
                {
                  q: "¿Cómo funcionan los métodos de pago?",
                  a: "Aceptamos pago en efectivo mediante códigos de barras en tiendas como Dollar General, CVS, 7-Eleven, o con tarjetas Green Dot MoneyPak disponibles en miles de ubicaciones. Es fácil, rápido y seguro."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="font-bold text-lg text-gray-900 dark:text-white pr-4">
                      {faq.q}
                    </span>
                    <span className={`text-2xl text-blue-600 dark:text-blue-400 transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                      ↓
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-8 py-6 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-600 animate-fade-in">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contacto" className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Contáctanos
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 mt-1" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-blue-100">+1 (425) 652-8120</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 mt-1" />
                  <div>
                    <p className="font-semibold">Oficinas</p>
                    <p className="text-blue-100">937 NW N River Dr</p>
                    <p className="text-blue-100">Miami, FL 33136</p>
                    <p className="text-blue-100">United States</p>
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4">Contactar para Ventas:</h4>
              <div className="space-y-3">
                <a
                  href="https://wa.me/14256528120?text=Hola%2C%20necesito%20información%20sobre%20los%20servicios%20de%20Intel%20Plus.%20¿Me%20pueden%20ayudar%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold transition-all shadow-lg flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contactar por WhatsApp
                </a>
                <a
                  href="https://m.me/366942046511890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-bold transition-all shadow-lg flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contactar por Messenger
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Contáctanos Directamente</h3>
              <p className="text-blue-100 mb-6">Chatea con nosotros ahora y te atenderemos personalmente:</p>
              <div className="space-y-4">
                <a
                  href="https://wa.me/14256528120?text=Hola%2C%20necesito%20información%20sobre%20los%20servicios%20de%20Intel%20Plus.%20¿Me%20pueden%20ayudar%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-bold transition-all shadow-lg flex items-center justify-center gap-3 text-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  Chatear por WhatsApp
                </a>
                <a
                  href="https://m.me/366942046511890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-lg font-bold transition-all shadow-lg flex items-center justify-center gap-3 text-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  Chatear por Messenger
                </a>
                <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <p className="text-center text-sm text-blue-100">
                    ⏰ Horario de atención: Lunes a Domingo 8:00 AM - 10:00 PM
                  </p>
                  <p className="text-center text-sm text-yellow-300 font-semibold mt-2">
                    ¡Respuesta inmediata garantizada!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 z-40 animate-fade-in"
          aria-label="Volver arriba"
        >
          <span className="text-2xl">↑</span>
        </button>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/14256528120?text=Hola%2C%20quiero%20información%20sobre%20los%20servicios%20de%20Intel%20Plus"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group animate-bounce"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-3 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
          ¡Chatea con nosotros!
        </span>
      </a>
    </>
  );
}
