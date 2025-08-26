import React, { Fragment } from 'react'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const translate = useTranslations()

  return (
    <>
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-info-section">
            <strong className="footer-title">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_3-EdNW'),
                }}
              ></span>
            </strong>
            <div className="footer-contacts">
              <div className="footer-phones">
                <p className="footer-text">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_OdbpzQ'),
                    }}
                  ></span>
                </p>
                <p className="footer-text">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_d2YfFM'),
                    }}
                  ></span>
                </p>
              </div>
            </div>
            <div className="footer-address">
              <p className="footer-text">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BqrkpK'),
                  }}
                ></span>
              </p>
              <p className="footer-text">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Text_THlJwj'),
                  }}
                ></span>
              </p>
            </div>
            <p className="footer-text">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('Text_kzJcle'),
                }}
              ></span>
            </p>
            <svg
              width="330"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 330 20"
              preserveAspectRatio="none"
              className="footer-divider"
            >
              <path
                d="M0 10 H330"
                fill="none"
                stroke="#000000"
                strokeWidth="0.5"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="11 11"
              ></path>
            </svg>
          </div>
          <div className="footer-contact-section">
            <div className="footer-callback">
              <strong className="footer-callback-title">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_r6CUKn'),
                  }}
                ></span>
              </strong>
              <button type="button" className="footer-button button">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9_pRC8'),
                  }}
                ></span>
              </button>
            </div>
            <div className="footer-map">
              <iframe
                src="https://www.google.com/maps?q=пл. Независимости, 1, Одесса, Одесская область, 65000&amp;output=embed"
                address="пл. Независимости, 1, Одесса, Одесская область, 65000"
                className="footer-google-maps"
              ></iframe>
            </div>
          </div>
          <nav className="footer-nav">
            <span className="footer-nav-text">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_zB309I'),
                }}
              ></span>
            </span>
            <span className="footer-nav-text">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_PkWHKj'),
                }}
              ></span>
            </span>
            <span className="footer-nav-text">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_g_eY17'),
                }}
              ></span>
            </span>
          </nav>
        </div>
      </footer>
      <span className="footer-copyright">
        <span>Ремонт стиральных машин в Одессе</span>
        <br />
        <span>© 2025</span>
      </span>

      <style jsx>
        {`
          .footer-container {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            height: 100%;
            display: flex;
            max-width: auto;
            min-width: auto;
            align-self: center;
            max-height: 500px;
            min-height: 450px;
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: rgba(25, 24, 24, 0.42);
            border-width: 1px;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: center;
            background-color: #faf8f6;
          }
          .footer-content {
            gap: var(--dl-layout-space-sixunits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 1300px;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .footer-info-section {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-title {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-family: 'Noto Serif SC';
            font-weight: 600;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .footer-contacts {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-phones {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text {
            font-size: 15px;
            font-family: 'Noto Serif SC';
          }
          .footer-address {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-divider {
            width: 190px;
            height: 5px;
          }
          .footer-contact-section {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            height: 100%;
            display: flex;
            align-self: flex-start;
            max-height: auto;
            min-height: auto;
            flex-direction: column;
          }
          .footer-callback {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 100%;
            align-self: center;
            min-height: auto;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .footer-callback-title {
            color: #202020;
            font-size: 17px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Noto Serif SC';
            font-weight: 600;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .footer-button {
            color: rgb(255, 255, 255);
            width: 100%;
            height: 100%;
            font-size: 16px;
            max-width: 330px;
            min-width: 170px;
            align-self: center;
            box-shadow: 5px 5px 10px 0px rgba(43, 43, 43, 0.68);
            font-style: normal;
            text-align: center;
            font-family: 'Noto Serif SC';
            font-weight: 600;
            line-height: normal;
            padding-top: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-cardradius);
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            padding-bottom: var(--dl-layout-space-unit);
            text-decoration: none;
            background-color: #58c3e8;
          }
          .footer-map {
            width: 100%;
            height: 280px;
            overflow: hidden;
            border-radius: var(--dl-layout-radius-cardradius);
          }
          .footer-google-maps {
            width: 100%;
            height: 280px;
          }
          .footer-nav {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .footer-nav-text {
            font-size: 15px;
            font-family: 'Noto Serif SC';
          }
          .footer-copyright {
            color: rgb(40, 40, 40);
            font-size: 14px;
            margin-top: var(--dl-layout-space-unit);
            text-align: center;
            font-family: 'Noto Serif SC';
            font-weight: 400;
            line-height: normal;
            text-decoration: none;
          }

          /* Mobile Styles */
          @media (max-width: 991px) {
            .footer-container {
              margin-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .footer-content {
              flex-direction: column;
            }
            .footer-map {
              max-width: 600px;
              margin-top: 0px;
            }
            .footer-nav {
              margin-top: 0px;
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }

          @media (max-width: 767px) {
            .footer-container {
              height: 100%;
              min-height: auto;
              flex-direction: column;
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .footer-content {
              width: auto;
              height: auto;
              max-width: auto;
              min-height: auto;
            }
            .footer-container {
              flex-wrap: wrap;
              margin-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
          }

          @media (max-width: 479px) {
            .footer-container {
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Footer
