import RegisterForm from "../../components/RegisterForm/RegisterForm";
import styles from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <div className={styles.container}>
      <h2>Register</h2>
      <RegisterForm />
    </div>
  );
};

export default RegistrationPage;
