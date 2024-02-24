import css from '../SearchBox/SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.wrap}>
      <label>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;