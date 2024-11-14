import s from '../../styles/todoForm.module.scss';
import { useState } from 'react';
export default function TodoForm(props) {

  const [itemValue, setItemValue] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemValue.trim().length > 0) {
      props.addItem(itemValue);
      setItemValue("");
    }

  };

  const handleFormFieldChange = (e) => {
    setItemValue(e.target.value)
  };




  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.form_row}>
        <label htmlFor='input'>
          Adj meg egy tevékenységet:
        </label>
        <input
          id='input'
          type="text"
          name='totdo-item'
          value={itemValue}
          onChange={handleFormFieldChange}
          placeholder='Tevékenység'
        />
      </div>

      <div className={s.form_row}>
        <button type="submit" className={s.btn}>Hozzáad</button>
      </div>
    </form>
  )
}

