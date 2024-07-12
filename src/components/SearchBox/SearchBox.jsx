import PropTypes from 'prop-types';
import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => (
  <div className={styles['search-box']}>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search contacts"
    />
  </div>
);

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
