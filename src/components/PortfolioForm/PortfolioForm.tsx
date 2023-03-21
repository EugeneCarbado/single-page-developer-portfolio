import React from 'react';
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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      <Form className="flex flex-col mx-[14px]">
        <div>
          <label
            htmlFor="name"
            className="absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="floating_standard"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
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
  );
};

export default PortfolioForm;
