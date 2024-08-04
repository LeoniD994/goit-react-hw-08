import PropTypes from "prop-types";
import styles from "../Contact/Contact.module.css";

const Contact = ({ id, name, number, onDeleteContact }) => (
  <ul>
    <li key={id} className={styles.contactItem}>
      <p>
        {name}: {number}
      </p>
      <button onClick={onDeleteContact}>Delete</button>
    </li>
  </ul>
);

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default Contact;
