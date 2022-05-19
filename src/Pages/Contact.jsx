/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

function Contact() {
  return (
    <div className='contacts'>
      Контакты для связи:
      <ol>
        <li>
          {' '}
          Telegram: <a href='https://t.me/dmitri_yz'>https://t.me/dmitri_yz</a>
        </li>
        <li>
          {' '}
          WhatsApp: <a href='https://wa.me/79263848287'>https://wa.me/79263848287</a>
        </li>
        <li>Телефон: +7 926 384 82 87</li>
        <li>
          {' '}
          Ссылка на GitHub: <a href='https://github.com/YZDmitriy'>https://github.com/YZDmitriy</a>
        </li>
      </ol>
    </div>
  );
}

export default Contact;
