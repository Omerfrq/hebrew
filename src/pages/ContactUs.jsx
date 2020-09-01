import React, { useState } from 'react';
import Slider from 'react-slick';

import Phone from '../assets/images/ContactUs/phone.png';
import Mail from '../assets/images/ContactUs/mail.png';

import FormPhone from '../assets/images/ContactUs/Icons/phone-num.png';
import FormService from '../assets/images/ContactUs/Icons/service.png';
import FormName from '../assets/images/ContactUs/Icons/name.png';
import FormMail from '../assets/images/ContactUs/Icons/mail.png';
import FormDescription from '../assets/images/ContactUs/Icons/description.png';
import FormAddress from '../assets/images/ContactUs/Icons/address.png';
import { useForm } from 'react-hook-form';
import { EMAIL } from '../email-config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

const ContactUS = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
        },
      },
    ],
  };

  const { register, handleSubmit, reset } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    const messageBody = {
      ...data,
      subject: 'contact',
      to: EMAIL,
    };

    axios
      .post('/', messageBody)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        reset();
        toast.success('Email Sent Successfully');
      })
      .catch((err) => {
        toast.error('Unable To Send Email');
        setLoading(false);
      });
  };

  return (
    <div className='contact-us'>
      <ToastContainer />
      <div className='container'>
        <div className='work-with'>
          <h1>עם מי עבדנו?</h1>

          <Slider className='logos' {...settings}>
            <div>LOGO</div>
            <div>LOGO</div>
            <div>LOGO</div>
            <div>LOGO</div>
            <div>LOGO</div>
          </Slider>
        </div>

        <div className='info'>
          <div className='title'>
            <h1>צרו איתנו קשר</h1>
            <p>לכל פניה התקשרו אלינו או שלחו מייל ונחזור אליכם בהקדם האפשרי</p>
            <div className='methods'>
              <div>
                <img src={Phone} alt='phone' />
                <span>072-392-7547</span>
              </div>
              <div>
                <img src={Mail} alt='mail' />
                <span>geotech-mapping@hotmail.com</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <h3>מוזמנים להשאיר פרטים ולקבל הצעת מחיר</h3>
            <div className='name'>
              <img src={FormName} alt='fullname' />
              <input
                name='fullname'
                placeholder='שם מלא'
                ref={register}
                required
              />
            </div>
            <div className='mail'>
              <img src={FormMail} alt='mail' />
              <input
                type='email'
                name='from'
                placeholder='*מייל'
                ref={register}
                required
              />
            </div>
            <div className='phone'>
              <img src={FormPhone} alt='phone number' />
              <input
                type='text'
                name='phone'
                placeholder="מס' טלפון"
                ref={register}
                required
              />
            </div>
            <div className='company-name'>
              <img src={FormName} alt='companyname' />
              <input
                name='companyname'
                placeholder='שם החברה'
                ref={register}
                required
              />
            </div>
            <div className='address'>
              <img src={FormAddress} alt='address' />
              <input
                name='address'
                placeholder='כתובת'
                ref={register}
                required
              />
            </div>
            <div className='decription'>
              <img src={FormDescription} alt='phone' />
              <input
                name='text'
                placeholder="פרטו לנו גוש מס/' חלקה"
                ref={register}
                required
              />
            </div>
            <div className='service'>
              <img src={FormService} alt='phone' />
              <input
                name='service'
                placeholder='סוג השירות'
                ref={register}
                required
              />
            </div>
            <div>
              <button
                type='submit'
                disabled={loading}
                className='price-suggestion'
              >
                {loading ? '....שליחת דוא"ל' : '  קבלו הצעת מחיר'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactUS;
