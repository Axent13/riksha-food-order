import React from 'react';

import aboutCompanyImageMain from 'assets/about-company-1.png';
import aboutCompanyImageSecondary from 'assets/about-company-2.png';

import './aboutCompany.scss';

const AboutCompany = () => {
  return (
    <div className='about-company'>
      <p className='about-company__text'>
        Вкусная доставка Рикша подарит Вам незабываемые вкусовые впечатления,
        украсит любой ваш стол и не заставит себя долго ждать. С нами вы сможете
        забыть о готовке, легко сделать приятное родным и близким, устроить
        вкусный праздник или расслабится в кругу друзей. Все блюда готовятся
        исключительно из свежих продуктов и по оригинальным рецептам Нашего
        шеф-повара. Любая позиция из Нашего Меню может оказаться у Вас на столе
        максимум через 60 минут!
        <br />
        <br />У вас есть возможность сделать предварительный заказ на
        определенный день и время.
      </p>
      <div className='about-company__images'>
        <img
          className='about-company__image about-company__image_main'
          src={aboutCompanyImageMain}
          alt='Наша компания'
        />
        <img
          className='about-company__image about-company__image_secondary'
          src={aboutCompanyImageSecondary}
          alt='Наша компания'
        />
      </div>
    </div>
  );
};

export default AboutCompany;
