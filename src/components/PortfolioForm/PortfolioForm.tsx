import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {cx} from '@emotion/css';
import styles from './PortfolioForm.styles';

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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      <Form className="flex flex-col pt-[50px] border-b-[1px] pb-[87px]">
        <div className={`relative ${cx(styles.formFields)}`}>
          <label htmlFor="name" className="">
            Name
          </label>
          <Field type="name" id="name" name="name" />
          <ErrorMessage name="name" />
        </div>
        <div className={cx(styles.formFields)}>
          <label htmlFor="email" className="">
            Email
          </label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" />
        </div>
        <div className={cx(styles.formFields)}>
          <label htmlFor="message" className="">
            Message
          </label>
          <Field type="text" id="message" name="message" />
          <ErrorMessage name="message" />
        </div>
        <button
          type="submit"
          className="uppercase text-white mt-5 pb-2.5 border-b-2 border-portfolio-green tracking-[2.29px] font-bold pt-[32px] w-[144px] self-end">
          Send message
        </button>
      </Form>
    </Formik>
  );
};

export default PortfolioForm;
