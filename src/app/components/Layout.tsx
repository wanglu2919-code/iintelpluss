import { Outlet, Link } from "react-router";
import { Wifi, Tv, Zap, CreditCard, Phone, Tag, Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import logoImg from "../../imports/photo_2026-04-28_03-26-58.jpg";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
              <div className="relative">
                <img
                  src={logoImg}
                  alt="iintel pluss Logo"
                  className="w-14 h-14 object-cover rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 p-0.5 shadow-lg group-hover:shadow-xl transition-shadow"
                  style={{ imageRendering: 'crisp-edges' }}
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
              </div>
              <div>
                <h1 className="text-2xl font-black text-blue-600 dark:text-blue-400">
                  iintel pluss
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold">Internet & TV Premium</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                to="/servicios"
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all font-medium"
              >
                <Wifi className="w-4 h-4" />
                Servicios
              </Link>
              <a
                href="/#trabajos"
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all font-medium"
              >
                <Tv className="w-4 h-4" />
                Nuestro Trabajo
              </a>
              <a
                href="/#planes"
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all font-medium"
              >
                <Zap className="w-4 h-4" />
                Planes
              </a>
              <a
                href="/#metodos-pago"
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all font-medium"
              >
                <CreditCard className="w-4 h-4" />
                Métodos de Pago
              </a>
              <a
                href="/#contacto"
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all font-medium"
              >
                <Phone className="w-4 h-4" />
                Contacto
              </a>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all font-medium"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>

              {/* CTA Button */}
              <a
                href="/#oferta-especial"
                className="ml-2 flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Tag className="w-4 h-4" />
                OFERTA ESPECIAL
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
              <nav className="flex flex-col gap-2">
                <Link
                  to="/servicios"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 transition-all font-medium"
                >
                  <Wifi className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Servicios
                </Link>
                <a
                  href="/#trabajos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 transition-all font-medium"
                >
                  <Tv className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Nuestro Trabajo
                </a>
                <a
                  href="/#planes"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 transition-all font-medium"
                >
                  <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Planes
                </a>
                <a
                  href="/#metodos-pago"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 transition-all font-medium"
                >
                  <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Métodos de Pago
                </a>
                <a
                  href="/#contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 transition-all font-medium"
                >
                  <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Contacto
                </a>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 transition-all font-medium"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                    <>
                      <Sun className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      Modo Claro
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      Modo Oscuro
                    </>
                  )}
                </button>
                <a
                  href="/#oferta-especial"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-5 py-3 rounded-full font-bold transition-all shadow-lg mt-2"
                >
                  <Tag className="w-5 h-5" />
                  OFERTA ESPECIAL
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <img
                  src={logoImg}
                  alt="iintel pluss Logo"
                  className="w-16 h-16 object-cover rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 p-0.5 shadow-lg"
                  style={{ imageRendering: 'crisp-edges' }}
                />
                <div className="text-left">
                  <span className="text-2xl font-black text-blue-400">iintel pluss</span>
                  <p className="text-xs text-gray-400">Internet & TV Premium</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-2">
                Tu proveedor de confianza en internet y TV por cable
              </p>
              <p className="text-blue-400 font-semibold">
                ⭐ Más de 50,000 clientes satisfechos
              </p>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400 text-sm text-center">
                © 2026 iintel pluss. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
