import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

interface props {
  name: string;
  email: string;
  message: string;
}

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const onSubmit = (values: props) => {
  console.log('Form submit data', values);
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required!'),
  email: Yup.string().email('Invalid email format').required('Required!'),
  message: Yup.string().required('Required!'),
});

const PortfolioForm = () => {
  return (
    <section>
      <h2></h2>
      <div></div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <Field type="text" id="message" name="message" />
            <ErrorMessage name="message" />
          </div>
          <button type="submit">Send message</button>
        </Form>
      </Formik>
    </section>
  );
};

export default PortfolioForm;
