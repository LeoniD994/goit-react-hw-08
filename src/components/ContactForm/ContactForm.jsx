import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const initialValues = {
    name: '',
    number: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    number: Yup.string()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .required('Required')
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles['contact-form']}>
          <div>
            <Field name="name" type="text" placeholder="Name" />
            <ErrorMessage name="name" component="div" className={styles.error} />
          </div>
          <div>
            <Field name="number" type="text" placeholder="Number" />
            <ErrorMessage name="number" component="div" className={styles.error} />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
