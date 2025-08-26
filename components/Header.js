import React, { useState } from 'react'
import { useTranslations } from 'next-intl'

const Header = () => {
  const translate = useTranslations()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Изолированный контейнер для хедера */}
      <div className="header-component">
        <header className="frame1196-container101">
          <div className="frame1196-container102">
            <div className="frame1196-container103">
              <span className="frame1196-text100">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__OMe1X'),
                  }}
                ></span>
              </span>
              <img
                alt="image"
                src="/bez%20ramk-200h.png"
                className="frame1196-image10"
              />
            </div>
          </div>
          <div className="frame1196-container104">
            <img
              alt="image"
              src="/ICONS/dla%20hedera%20trubka.svg"
              className="frame1196-image11"
            />
            <div
              className="frame1196-burger-menu"
              onClick={toggleMenu}
            >
              <div className="frame1196-burger-line"></div>
              <div className="frame1196-burger-line"></div>
              <div className="frame1196-burger-line"></div>
            </div>
          </div>
          <div className="frame1196-obshiy">
            <div className="frame1196-korobki">
              <div className="frame1196-container105">
                <span className="frame1196-text101">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_4CyZ6E'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="frame1196-container106">
                <span className="frame1196-text102">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Mj52fk'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="frame1196-container107">
                <span className="frame1196-text103">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_p-Mb2v'),
                    }}
                  ></span>
                </span>
              </div>
            </div>
            <div className="frame1196-telephonadres">
              <div className="frame1196-container108">
                <img
                  alt="image"
                  src="/ICONS/dla%20hedera%20trubka.svg"
                  className="frame1196-image13"
                />
                <div className="frame1196-container109">
                  <span className="frame1196-text104">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_rHU5eg'),
                      }}
                    ></span>
                  </span>
                  <span className="frame1196-text105">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_dfPjF9'),
                      }}
                    ></span>
                  </span>
                </div>
              </div>
              <div className="frame1196-container110">
                <span className="frame1196-text106">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_lEhEem'),
                    }}
                  ></span>
                </span>
                <span className="frame1196-text107">
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
                className="frame1196-icon100"
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
                className="frame1196-icon102"
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
                className="frame1196-icon104"
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
                className="frame1196-icon106"
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
        <div className={`frame1196-sidebar ${isMenuOpen ? 'frame1196-sidebar-open' : ''}`}>
          <div className="frame1196-sidebar-overlay" onClick={toggleMenu}></div>
          <div className="frame1196-sidebar-content">
            <div className="frame1196-sidebar-header">
              <button className="frame1196-sidebar-close" onClick={toggleMenu}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <nav className="frame1196-sidebar-nav">
              <a href="#" className="frame1196-sidebar-link">ГЛАВНАЯ</a>
              <a href="#" className="frame1196-sidebar-link">ВЫКУП Б/У МАШИН</a>
              <a href="#" className="frame1196-sidebar-link">СТАТЬИ</a>
            </nav>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          /* Уникальный контейнер компонента */
          .header-component {
            width: 100%;
          }

          /* Основные стили хедера */
          .frame1196-container101 {
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
          .frame1196-container102 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .frame1196-container103 {
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
          .frame1196-text100 {
            color: rgb(255, 255, 255);
            font-size: 23px;
            word-wrap: break-word;
            font-style: normal;
            font-family: 'Noto Serif SC';
            font-weight: 300;
            white-space: normal;
            letter-spacing: 1.5px;
          }
          .frame1196-image10 {
            width: 77px;
            height: 74px;
            object-fit: cover;
          }
          .frame1196-container104 {
            display: none;
            align-items: center;
            justify-content: space-between;
          }
          .frame1196-image11 {
            width: 200px;
            object-fit: cover;
          }
          .frame1196-obshiy {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .frame1196-korobki {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .frame1196-container105 {
            flex: 0 0 auto;
            width: 183px;
            height: 50px;
            display: flex;
            align-items: center;
            border-radius: 8px;
            justify-content: center;
            background-color: #87ceeb;
          }
          .frame1196-text101 {
            color: #ffffff;
            font-size: 15px;
            font-family: 'Roboto';
          }
          .frame1196-container106 {
            flex: 0 0 auto;
            width: 183px;
            height: 50px;
            display: flex;
            align-items: center;
            border-radius: 8px;
            justify-content: center;
            background-color: rgba(46, 51, 55, 0.41);
          }
          .frame1196-text102 {
            color: rgb(255, 255, 255);
            font-size: 15px;
            font-family: 'Roboto';
          }
          .frame1196-container107 {
            flex: 0 0 auto;
            width: 183px;
            height: 50px;
            display: flex;
            align-items: center;
            border-radius: 8px;
            justify-content: center;
            background-color: rgba(46, 51, 55, 0.41);
          }
          .frame1196-text103 {
            color: rgb(255, 255, 255);
            font-size: 15px;
            font-family: 'Roboto';
          }
          .frame1196-telephonadres {
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
          .frame1196-container108 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .frame1196-image13 {
            width: 33px;
            height: 32px;
            align-self: center;
            object-fit: cover;
          }
          .frame1196-container109 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .frame1196-text104 {
            fill: rgb(255, 255, 255);
            color: rgb(255, 255, 255);
            font-size: 15px;
            font-style: normal;
            font-family: 'Roboto';
            font-weight: 400;
            letter-spacing: 1.5px;
          }
          .frame1196-text105 {
            fill: rgb(255, 255, 255);
            color: rgb(255, 255, 255);
            font-size: 15px;
            font-style: normal;
            font-family: 'Roboto';
            font-weight: 400;
            letter-spacing: 1.5px;
          }
          .frame1196-container110 {
            gap: 12px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .frame1196-text106 {
            color: rgb(255, 255, 255);
            font-size: 12px;
            align-self: center;
            font-family: 'Roboto';
            font-weight: 300;
            letter-spacing: 1.5px;
          }
          .frame1196-text107 {
            fill: rgb(255, 255, 255);
            color: rgb(255, 255, 255);
            font-size: 12px;
            align-self: center;
            font-family: 'Roboto';
            font-weight: 300;
            letter-spacing: 1.5px;
          }
          .frame1196-icon100 {
            left: -9px;
            width: 5px;
            bottom: -1px;
            height: 100%;
            position: absolute;
          }
          .frame1196-icon102 {
            top: -2px;
            right: -8px;
            width: 5px;
            height: 100%;
            position: absolute;
          }
          .frame1196-icon104 {
            top: -10px;
            right: -8px;
            width: 100%;
            height: 5px;
            position: absolute;
          }
          .frame1196-icon106 {
            left: 0px;
            width: 100%;
            bottom: -10px;
            height: 5px;
            position: absolute;
          }

          /* Стили для бургер-меню */
          .frame1196-burger-menu {
            width: 35px;
            height: 35px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            cursor: pointer;
            padding: 5px;
          }

          .frame1196-burger-line {
            width: 100%;
            height: 3px;
            background-color: white;
            border-radius: 2px;
            transition: all 0.3s ease;
          }

          /* Стили для боковой панели */
          .frame1196-sidebar {
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

          .frame1196-sidebar-open {
            pointer-events: all;
            opacity: 1;
          }

          .frame1196-sidebar-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
          }

          .frame1196-sidebar-content {
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

          .frame1196-sidebar-open .frame1196-sidebar-content {
            transform: translateX(0);
          }

          .frame1196-sidebar-header {
            padding: 20px;
            display: flex;
            justify-content: flex-end;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .frame1196-sidebar-close {
            background: none;
            border: none;
            cursor: pointer;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .frame1196-sidebar-nav {
            padding: 40px 20px;
            display: flex;
            flex-direction: column;
            gap: 30px;
          }

          .frame1196-sidebar-link {
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

          .frame1196-sidebar-link:hover {
            background-color: #87ceeb;
          }

          /* Медиа-запросы */
          @media (max-width: 1525px) {
            .frame1196-container103 {
              gap: var(--dl-layout-space-halfunit);
              width: 232px;
            }
            .frame1196-container104 {
              gap: var(--dl-layout-space-twounits);
              width: 183px;
              height: 62px;
              display: flex;
              align-items: center;
              border-radius: 8px;
              justify-content: center;
              background-color: rgba(46, 51, 55, 0.41);
            }
            .frame1196-image11 {
              width: 30px;
              object-fit: cover;
            }
            .frame1196-burger-menu {
              display: flex;
            }
            .frame1196-obshiy {
              display: none;
            }
          }

          @media (max-width: 767px) {
            .frame1196-container103 {
              gap: var(--dl-layout-space-halfunit);
              width: auto;
              height: auto;
            }
            .frame1196-text100 {
              font-size: 22px;
            }
            .frame1196-container104 {
              width: 111px;
            }
            .frame1196-image11 {
              width: 30px;
              object-fit: cover;
            }
          }

          @media (max-width: 479px) {
            .frame1196-container101 {
              height: 100%;
              min-height: 70px;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .frame1196-container103 {
              gap: var(--dl-layout-space-halfunit);
              width: auto;
              height: auto;
              position: relative;
              align-self: center;
              max-width: 116px;
              min-width: auto;
              flex-direction: row-reverse;
            }
            .frame1196-text100 {
              width: 85px;
              font-size: 16px;
              max-width: 116px;
              min-width: auto;
              margin-right: 0px;
            }
            .frame1196-image10 {
              top: -157px;
              left: 4px;
              width: 33px;
              height: 33px;
              position: relative;
              margin-left: var(--dl-layout-space-halfunit);
              margin-right: 0px;
            }
            .frame1196-container104 {
              gap: var(--dl-layout-space-oneandhalfunits);
              width: auto;
              height: auto;
              align-self: center;
            }
            .frame1196-image11 {
              width: 28px;
              object-fit: cover;
            }
          }
        `}
      </style>
    </>
  )
}

export default Header
