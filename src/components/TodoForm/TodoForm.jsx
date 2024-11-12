import s from '../../styles/todoForm.module.scss';

export default function TodoForm() { 
  return (
    <form action="" className={s.form}>
        <div className={s.form_row}>
          <label htmlFor="">
            Adj meg egy tevékenységet:
            <input type="text" name='totdo-item' />
          </label>
        </div>

        <div className={s.form_row}>
          <button type="submit">Hozzáad</button>
        </div>
      </form>
  )
}

