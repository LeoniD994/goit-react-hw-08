import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import styles from "./RegistrationForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name"></label>
            <Field type="text" name="name" placeholder="Name" />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="email"></label>
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="password"></label>
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.error}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.button}
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
