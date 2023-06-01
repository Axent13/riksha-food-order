import React from 'react';
import './contactsPage.scss';
import Footer from '../../components/ui/footer/footer';
import Header from '../../components/ui/header/header';
import SectionHeader from '../../components/common/sectionHeader/sectionHeader';
import ContactsForm from '../../components/ui/contactsForm/contactsForm';

const ContactsPage = () => {
  return (
    <div className='contacts-page'>
      <Header />
      <div className='contacts-page__content'>
        <SectionHeader text='Связаться с нами' />
        <div className='contacts-page__contact'>
          <h3 className='contacts-page__contact-header'>
            Ресторан японской еды &quot;Рикша&quot;
          </h3>
          <p className='contacts-page__address'>
            ул. Советов, 118, г. Абинск, Краснодарский край
          </p>
        </div>
        <div className='contacts-page__contact'>
          <h3 className='contacts-page__contact-header'>Телефон</h3>
          <p className='contacts-page__phone'>+7(938)507-44-44</p>
        </div>
        <div className='contacts-page__contact'>
          <h3 className='contacts-page__contact-header'>Режим работы</h3>
          <p className='contacts-page__work-time'>c 11:00 до 23:00</p>
        </div>
        <div className='contacts-page__form'>
          <ContactsForm />
        </div>
      </div>
      <div className='contacts-page__footer'>
        <Footer />
      </div>
    </div>
  );
};

export default ContactsPage;
