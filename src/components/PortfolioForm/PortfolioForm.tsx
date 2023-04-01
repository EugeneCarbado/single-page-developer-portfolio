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
  email: Yup.string().email('Sorry, invalid format here').required('Required!'),
});

const PortfolioForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {formik => {
        const {errors, touched} = formik;
        return (
          <Form
            aria-autocomplete="none"
            className="flex flex-col pt-[50px] border-b-[1px] pb-[87px]">
            <div
              className={`relative mb-[32px] ${cx(
                styles.formFields,
                styles.formFieldsBorder,
              )}`}>
              <Field
                type="name"
                id="name"
                name="name"
                placeholder="NAME"
                className=""
              />
            </div>
            <div
              className={`relative mb-[32px]  ${
                errors.email && touched.email
                  ? cx(styles.formFieldsError)
                  : cx(styles.formFieldsBorder)
              } ${cx(styles.formFields)}`}>
              <Field type="email" id="email" name="email" placeholder="EMAIL" />
              <p
                className={`absolute text-portfolio-error pt-[5px] right-0 animate-[shake_0.25s_ease-in-out_2s]`}>
                <ErrorMessage name="email" />
              </p>
            </div>
            <Field
              type="text"
              id="message"
              name="message"
              component="textarea"
              rows="4"
              placeholder="MESSAGE"
              className={`bg-transparent border-b-[1px] h-[107px] text-white focus:outline-none px-[17px] pt-[5px] resize-none transition ease-in-out delay-150 focus:border-b-portfolio-green`}
            />
            {/* </div> */}
            <button
              type="submit"
              className="uppercase text-white mt-[32px] pb-2.5 border-b-2 border-portfolio-green tracking-[2.29px] font-bold w-[144px] self-end hover:-translate-y-1 hover:text-portfolio-green delay-150 transition ease-in-out">
              Send message
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PortfolioForm;
