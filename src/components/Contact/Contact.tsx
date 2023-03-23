import React from 'react';
import PortfolioForm from '../PortfolioForm/PortfolioForm';

const Contact = () => {
  return (
    <section className="bg-portfolio-bg-grey px-[14px]">
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
