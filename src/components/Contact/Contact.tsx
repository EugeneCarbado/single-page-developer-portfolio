import React from 'react';
import PortfolioForm from '../PortfolioForm/PortfolioForm';
import {cx} from '@emotion/css';
import styles from './Contact.styles';

const Contact = () => {
  return (
    <section
      id="contact"
      className={`bg-portfolio-bg-grey px-[14px] ${cx(styles.contactImage)}`}>
      <h2 className="text-[40px] font-bold text-white text-center pt-[60px]">
        Contact
      </h2>
      <div className="pt-2 text-base leading-6 text-portfolio-grey text-center font-medium">
        <p>I would love to hear about your project and</p>
        <p>how I could help. Please fill in the form, and</p>
        <p>I&apos;ll get back to you as soon as possible.</p>
      </div>
      <PortfolioForm />
    </section>
  );
};

export default Contact;
