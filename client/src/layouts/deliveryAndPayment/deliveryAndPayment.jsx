import React from 'react';
import './deliveryAndPayment.scss';
import Header from '../../components/ui/header/header';
import Footer from '../../components/ui/footer/footer';
import SectionHeader from '../../components/common/sectionHeader/sectionHeader';
import deliveryRollImg from '../../assets/delivery-roll.png';
import paymentRollImg from '../../assets/payment-roll.png';
import payHandImg from '../../assets/pay-hand.png';
import cardsImg from '../../assets/cards.png';
import giftImg from '../../assets/gift.png';
import PaymentFeatureCard from '../../components/common/paymentFeatureCard/paymentFeatureCard';

const DeliveryAndPayment = () => {
  return (
    <div className='delivery-and-payment'>
      <Header />
      <div className='delivery-and-payment__content'>
        <SectionHeader text='Доставка' rightCenterImg={deliveryRollImg} />
        <p className='delivery-and-payment__text'>
          Сервис доставки суши в Абинске «Рикша» предлагает чрезвычайно удобный
          механизм доставки и оплаты. Мы считаем, что наши стандарты работы
          должны быть классикой и комфортом для заказчика.{' '}
          <strong>Прием заказов на доставку с 10:30 до 21:30.</strong>
        </p>
        <p className='delivery-and-payment__text'>
          Доставка в Абинск — до 59 минут. Мы очень ценим Ваше время, поэтому
          всегда стараемся уложиться в минимальные сроки и измеряем время
          минутами, ведь каждая минута важна. Стоимость доставки - 99 ₽.
        </p>
        <p className='delivery-and-payment__text'>
          Если курьер опаздывает, Вы получаете не только извинения, но и
          промокод на бесплатный ролл при следующем заказе!
        </p>
      </div>
      <div className='delivery-and-payment__content'>
        <SectionHeader text='Оплата' rightCenterImg={paymentRollImg} />
        <div className='delivery-and-payment__payment-features'>
          <PaymentFeatureCard
            image={payHandImg}
            name='Оплата наличными'
            description='Рассчитывайтесь за свои любимые суши Рикша наличными при получении.'
          />
          <PaymentFeatureCard
            image={cardsImg}
            name='Оплата онлайн'
            description='Рассчитывайтесь за свои любимые суши Рикша онлайн на сайте.'
          />
          <PaymentFeatureCard
            image={giftImg}
            name='Оплата бонусами'
            description='Рассчитывайтесь за свои любимые суши Рикша личными бонусами.'
          />
        </div>
        <p className='delivery-and-payment__text'>
          Мы предлагаем Вам 3 самых распространенных варианта для расчета:
          наличные, оплата онлайн или бонусами. Просто отметьте наиболее удобный
          для Вас способ оплаты при оформлении заказа на сайте или сообщите об
          этом оператору по телефону.
        </p>
        <p className='delivery-and-payment__text'>
          Доставка «Рикша» – это четкие стандарты работы, высокий уровень
          сервиса и забота о каждом госте. Мы ежедневно развиваемся, чтобы
          услышать три слова «Рикша – это любовь».
        </p>
      </div>
      <div className='delivery-and-payment__footer'>
        <Footer />
      </div>
    </div>
  );
};

export default DeliveryAndPayment;
