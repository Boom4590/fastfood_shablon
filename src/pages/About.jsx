import React from 'react';

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="content-wrapper">
          {/* Instagram Section */}
          <div className="instagram-section">
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/p/DI_D9ABI8xO/?utm_source=ig_embed&utm_campaign=loading"
              data-instgrm-version="14"
            ></blockquote>
            <script async src="//www.instagram.com/embed.js"></script>
          </div>

          {/* Content Section */}
          <div className="text-section">
            <h2 className="animate-fadeIn">О нас — Oasis Doner</h2>
            <p>
              <span className="highlight">Oasis Doner</span> — это вкусные и 100% халяльные донеры в Бишкеке! 🌯 Свежие ингредиенты и любовь в каждом блюде. Заходи за своим!
            </p>

            <h2>Часто задаваемые вопросы</h2>
            <div className="faq">
              <div className="faq-item">
                <h3>Как заказать доставку из заведения «Oasis» в г. Бишкек?</h3>
                <p>
                  Чтобы заказать доставку из заведения «Oasis» в г. Бишкек, достаточно зайти на веб-сайт или открыть приложение Glovo и перейти в категорию «Бургеры». Затем введите свой адрес, чтобы узнать, осуществляет ли заведение «Oasis» доставку в вашем районе города Бишкек. Выберите нужные товары и добавьте их в свой заказ. Теперь вам нужно произвести оплату. Сразу после этого начнется приготовление заказа, и уже совсем скоро курьер привезет его прямо к вашей двери.
                </p>
              </div>

              <div className="faq-item">
                <h3>Я сейчас в городе Бишкек. Что можно заказать в заведении «Oasis»?</h3>
                <p>
                  Заведение «Oasis» предлагает большой ассортимент товаров, которые вы можете заказать в удобное для вас время. Ознакомьтесь с ассортиментом товаров, которые заведение «Oasis» предлагает своим клиентам, и выберите те из них, которые хотелось бы заказать.
                </p>
              </div>

              <div className="faq-item">
                <h3>Я сейчас в городе Бишкек. Сколько занимает доставка из заведения «Oasis»?</h3>
                <p>
                  Добавив свой адрес доставки, вы сможете увидеть информацию об ожидаемом времени доставки отдельно для каждого заведения, расположенного неподалеку от вас. Эту же информацию конкретно о заведении «Oasis» можно увидеть на странице оплаты вашего заказа.
                </p>
              </div>

              <div className="faq-item">
                <h3>В какое время можно заказать доставку из заведения «Oasis»?</h3>
                <p>
                  Сделать заказ можно в любое время, когда заведение «Oasis» открыто на нашей платформе. Заказав в приложении или на веб-сайте, вы получите фирменную быструю доставку и сможете насладиться вашим заказом Glovo уже через несколько минут! Вы также можете назначить доставку на удобное для вас время, даже если выбранное заведение в данный момент закрыто.
                </p>
              </div>

              <div className="faq-item">
                <h3>Предлагает ли заведение «Oasis» акции или бонусы пользователям Glovo?</h3>
                <p>
                  Обращайте внимание на товары, предлагаемые со скидкой, а также на текущие спецпредложения, выделенные в приложении желтым цветом. Если вам улыбнется удача, вы сможете найти такие выгодные специальные предложения, как 2 по цене 1 или доставка со скидкой!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          background-color: #f5f5f5;
          padding: 48px 16px;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .content-wrapper {
          display: flex;
          flex-direction: row;
          gap: 24px;
        }

        .instagram-section {
          width: 33.33%;
          flex-shrink: 0;
        }

        .instagram-media {
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          max-width: 540px;
          width: 100%;
        }

        .text-section {
          width: 66.67%;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        h2 {
          font-size: 36px;
          font-weight: 700;
          color: #333;
          text-align: left;
          margin-bottom: 8px;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        p {
          font-size: 18px;
          color: #666;
          line-height: 1.6;
          text-align: left;
        }

        .highlight {
          font-weight: 600;
        }

        .faq {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-item h3 {
          font-size: 20px;
          font-weight: 600;
          color: #333;
          margin-bottom: 4px;
        }

        .faq-item p {
          font-size: 16px;
          color: #666;
          line-height: 1.5;
        }

        /* Mobile Styles */
        @media (max-width: 767px) {
          .about {
            padding: 24px 16px;
          }

          .content-wrapper {
            flex-direction: column;
          }

          .instagram-section {
            width: 100%;
          }

          .instagram-media {
            max-width: 100% !important;
            min-width: 100% !important;
          }

          .text-section {
            width: 100%;
          }

          h2 {
            font-size: 28px;
            text-align: center;
          }

          p {
            font-size: 16px;
            text-align: center;
          }

          .faq-item h3 {
            font-size: 18px;
          }

          .faq-item p {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}

export default About;