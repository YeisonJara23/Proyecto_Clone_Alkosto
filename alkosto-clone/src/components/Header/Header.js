import React, { useState } from 'react';
import CartWidget from './CartWidget';
import SearchBar from './SearchBar';
import LoginModal from '../common/Modal/LoginModal'; 
import './Header.scss';

// 🔹 Importar imágenes desde assets
import logo from '../../assets/images/logo/alkosto-logo.webp';
import fondoAzul from '../../assets/images/fondo/fondo-azul.webp';

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <header className="header">
      {/* 🔸 Banner superior */}
      <div className="header-top-banner">
        <span>¡Aprovecha las ofertas más esperadas del año!</span>
      </div>

      {/* 🔹 Header principal */}
      <div 
        className="header-main" 
        style={{ backgroundImage: `url(${fondoAzul})` }}
      >
        <div className="container header-main-container">
          
          {/* ===== Fila superior ===== */}
          <div className="header-top-row">
            {/* Logo */}
            <div className="header-logo">
              <a href="/">
                <img src={logo} alt="Alkosto" />
              </a>
            </div>

            {/* Hiperofertas */}
            <div className="header-hiperofertas">
              <a href="/ofertas">Hiperofertas</a>
            </div>

            {/* Teléfonos + Links */}
            <div className="header-info-links">
              <span>Venta: (601) 746 8001</span>
              <span>Servicio: (601) 407 3033</span>
              <a href="/sigue-tu-pedido">Sigue tu pedido</a>
              <a href="/tiendas">Nuestras tiendas</a>
              <a href="/catalogos">Catálogo</a>
              <a href="/ayuda">Ayuda</a>
            </div>
          </div>

          {/* ===== Fila inferior ===== */}
          <div className="header-bottom-row">
            <div className="header-right-group">
              {/* Buscador */}
              <div className="header-search">
                <SearchBar />
              </div>

              {/* Cuenta + Carrito */}
              <div className="header-actions">
                {/* 🔹 Botón Mi cuenta con modal */}
                <div
                  className="account-link"
                  onClick={() => setIsLoginOpen(true)}
                  style={{ cursor: 'pointer' }}
                >
                  <i className="alk-icon-user"></i>
                  <span>Mi cuenta</span>
                </div>

                {/* Carrito */}
                <div className="cart-link">
                  <CartWidget />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔸 Categorías */}
      <div className="header-categories">
        <div className="container header-categories-container">
          <a href="/category/celulares">Celulares</a>
          <a href="/category/computadores">Computadores</a>
          <a href="/category/electrodomesticos">Electrodomésticos</a>
          <a href="/category/tv">TV</a>
          <a href="/category/accesorios">Accesorios</a>
          <a href="/category/videojuegos">Videojuegos</a>
          <a href="/category/audio">Audio</a>
          <a href="/category/camaras">Cámaras</a>
          <a href="/category/pines">Pines</a>
          <a href="/category/hogar">Hogar</a>
          <a href="/category/casa-inteligente">Casa Inteligente</a>
          <a href="/category/deportes">Deportes</a>
          <a href="/category/llantas-motos">Llantas y Motos</a>
          <a href="/category/juguetes">Juguetes</a>
          <a href="/category/otros">Otros</a>
        </div>
      </div>

      {/* 🔹 Modal de login */}
      {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
    </header>
  );
};

export default Header;
