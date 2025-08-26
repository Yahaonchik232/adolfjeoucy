import React, { Fragment, useState } from 'react'
import { useTranslations } from 'next-intl'

const Header = () => {
  const translate = useTranslations()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className="header-container">
        <div className="header-main">
          <div className="header-logo-section">
            <span className="header-title">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text__OMe1X'),
                }}
              ></span>
            </span>
            <img
              alt="image"
              src="/bez%20ramk-200h.png"
              className="header-logo"
            />
          </div>
        </div>
        <div className="header-mobile">
          <img
            alt="image"
            src="/ICONS/dla%20hedera%20trubka.svg"
            className="header-phone-icon"
          />
          <div
            className="header-burger-menu"
            onClick={toggleMenu}
          >
            <div className="header-burger-line"></div>
            <div className="header-burger-line"></div>
            <div className="header-burger-line"></div>
          </div>
        </div>
        <div className="header-desktop">
          <div className="header-nav-boxes">
            <div className="header-nav-box">
              <span className="header-nav-text">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4CyZ6E'),
                  }}
                ></span>
              </span>
            </div>
            <div className="header-nav-box-alt">
              <span className="header-nav-text">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Mj52fk'),
                  }}
                ></span>
              </span>
            </div>
            <div className="header-nav-box-alt">
              <span className="header-nav-text">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_p-Mb2v'),
                  }}
                ></span>
              </span>
            </div>
          </div>
          <div className="header-contact">
            <div className="header-phone-section">
              <img
                alt="image"
                src="/ICONS/dla%20hedera%20trubka.svg"
                className="header-phone-img"
              />
              <div className="header-phone-numbers">
                <span className="header-phone-text">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_rHU5eg'),
                    }}
                  ></span>
                </span>
                <span className="header-phone-text">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_dfPjF9'),
                    }}
                  ></span>
                </span>
              </div>
            </div>
            <div className="header-address">
              <span className="header-address-text">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lEhEem'),
                  }}
                ></span>
              </span>
              <span className="header-address-text">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7fEvzG'),
                  }}
                ></span>
              </span>
            </div>
            <svg
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              height="110"
              viewBox="0 0 20 110"
              preserveAspectRatio="none"
              className="header-divider"
            >
              <path
                d="M10 0 V110"
                fill="none"
                stroke="#ffffff"
                strokeWidth="0.5"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="11 11"
              ></path>
            </svg>
            <svg
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              height="110"
              viewBox="0 0 20 110"
              preserveAspectRatio="none"
              className="header-divider"
            >
              <path
                d="M10 0 V110"
                fill="none"
                stroke="#ffffff"
                strokeWidth="0.5"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="11 11"
              ></path>
            </svg>
            <svg
              width="330"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 330 20"
              preserveAspectRatio="none"
              className="header-divider-horizontal"
            >
              <path
                d="M0 10 H330"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="0.5"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="11 11"
              ></path>
            </svg>
            <svg
              width="330"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 330 20"
              preserveAspectRatio="none"
              className="header-divider-horizontal"
            >
              <path
                d="M0 10 H330"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="0.5"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="11 11"
              ></path>
            </svg>
          </div>
        </div>
      </header>

      {/* Боковое меню */}
      <div className={`header-sidebar ${isMenuOpen ? 'header-sidebar-open' : ''}`}>
        <div className="header-sidebar-overlay" onClick={toggleMenu}></div>
        <div className="header-sidebar-content">
          <div className="header-sidebar-header">
            <button className="header-sidebar-close" onClick={toggleMenu}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <nav className="header-sidebar-nav">
            <a href="/" className="header-sidebar-link">ГЛАВНАЯ</a>
            <a href="/vikup" className="header-sidebar-link">ВЫКУП Б/У МАШИН</a>
            <a href="#" className="header-sidebar-link">СТАТЬИ</a>
          </nav>
        </div>
      </div>

      <style jsx>
        {`
          .header-container {
            width: 100%;
            height: auto;
            display: flex;
            min-width: 100%;
            max-height: 120px;
            min-height: 115px;
            align-items: center;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            justify-content: space-between;
            background-color: #232020;
          }
          .header-main {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-logo-section {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 304px;
            height: 91px;
            display: flex;
            position: relative;
            align-items: center;
            white-space: normal;
            border-radius: var(--dl-layout-radius-radius4);
            overflow-wrap: break-word;
            flex-direction: row-reverse;
            justify-content: center;
          }
          .header-title {
            color: rgb(255, 255, 255);
            font-size: 23px;
            word-wrap: break-word;
            font-style: normal;
            font-family: 'Noto Serif SC';
            font-weight: 300;
            white-space: normal;
            letter-spacing: 1.5px;
          }
          .header-logo {
            width: 77px;
            height: 74px;
            object-fit: cover;
          }
          .header-mobile {
            display: none;
            align-items: center;
            justify-content: space-between;
          }
          .header-phone-icon {
            width: 200px;
            object-fit: cover;
          }
          .header-desktop {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-nav-boxes {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-nav-box {
            flex: 0 0 auto;
            width: 183px;
            height: 50px;
            display: flex;
            align-items: center;
            border-radius: 8px;
            justify-content: center;
            background-color: #87ceeb;
          }
          .header-nav-box-alt {
            flex: 0 0 auto;
            width: 183px;
            height: 50px;
            display: flex;
            align-items: center;
            border-radius: 8px;
            justify-content: center;
            background-color: rgba(46, 51, 55, 0.41);
          }
          .header-nav-text {
            color: #ffffff;
            font-size: 15px;
            font-family: 'Roboto';
          }
          .header-contact {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 513px;
            height: 75px;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            background-color: rgba(46, 51, 55, 0.41);
          }
          .header-phone-section {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .header-phone-img {
            width: 33px;
            height: 32px;
            align-self: center;
            object-fit: cover;
          }
          .header-phone-numbers {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-phone-text {
            fill: rgb(255, 255, 255);
            color: rgb(255, 255, 255);
            font-size: 15px;
            font-style: normal;
            font-family: 'Roboto';
            font-weight: 400;
            letter-spacing: 1.5px;
          }
          .header-address {
            gap: 12px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-address-text {
            color: rgb(255, 255, 255);
            font-size: 12px;
            align-self: center;
            font-family: 'Roboto';
            font-weight: 300;
            letter-spacing: 1.5px;
          }
          .header-divider {
            left: -9px;
            width: 5px;
            bottom: -1px;
            height: 100%;
            position: absolute;
          }
          .header-divider-horizontal {
            top: -2px;
            right: -8px;
            width: 5px;
            height: 100%;
            position: absolute;
          }

          /* Burger Menu Styles */
          .header-burger-menu {
            width: 35px;
            height: 35px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            cursor: pointer;
            padding: 5px;
          }
          .header-burger-line {
            width: 100%;
            height: 3px;
            background-color: white;
            border-radius: 2px;
            transition: all 0.3s ease;
          }

          /* Sidebar Styles */
          .header-sidebar {
            position: fixed;
            top: 0;
            right: 0;
            width: 100%;
            height: 100vh;
            z-index: 1000;
            pointer-events: none;
            transition: opacity 0.3s ease;
            opacity: 0;
          }
          .header-sidebar-open {
            pointer-events: all;
            opacity: 1;
          }
          .header-sidebar-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
          }
          .header-sidebar-content {
            position: absolute;
            top: 0;
            right: 0;
            width: 300px;
            height: 100%;
            background-color: #232020;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            display: flex;
            flex-direction: column;
          }
          .header-sidebar-open .header-sidebar-content {
            transform: translateX(0);
          }
          .header-sidebar-header {
            padding: 20px;
            display: flex;
            justify-content: flex-end;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          .header-sidebar-close {
            background: none;
            border: none;
            cursor: pointer;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-sidebar-nav {
            padding: 40px 20px;
            display: flex;
            flex-direction: column;
            gap: 30px;
          }
          .header-sidebar-link {
            color: white;
            text-decoration: none;
            font-size: 18px;
            font-family: 'Roboto';
            font-weight: 500;
            padding: 15px 20px;
            border-radius: 8px;
            background-color: rgba(46, 51, 55, 0.41);
            text-align: center;
            transition: background-color 0.3s ease;
          }
          .header-sidebar-link:hover {
            background-color: #87ceeb;
          }

          /* Mobile Styles */
          @media (max-width: 991px) {
            .header-container {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .header-desktop {
              display: none;
            }
            .header-mobile {
              display: flex;
              gap: var(--dl-layout-space-unit);
            }
            .header-burger-menu {
              display: flex;
            }
          }

          @media (max-width: 767px) {
            .header-container {
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              min-height: 80px;
            }
            .header-logo-section {
              width: auto;
              height: auto;
            }
            .header-title {
              font-size: 18px;
            }
            .header-logo {
              width: 60px;
              height: 60px;
            }
          }

          @media (max-width: 479px) {
            .header-container {
              height: 100%;
              min-height: 70px;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .header-logo-section {
              width: auto;
              height: auto;
            }
            .header-title {
              font-size: 16px;
              margin-right: 0px;
            }
            .header-logo {
              width: 50px;
              height: 50px;
            }
            .header-mobile {
              gap: var(--dl-layout-space-halfunit);
            }
            .header-phone-icon {
              width: 120px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Header
