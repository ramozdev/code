import styles from '@/styles/UserInfo.module.css'

export function UserInfo() {
  return (
    <form className={styles.form}>
      <label htmlFor='email'>Correo Electrónico</label>
      <input type='email' id='email' />

      <label htmlFor='name'>Nombre</label>
      <input type='text' id='name' />

      <label htmlFor='alias'>Apodo</label>
      <input type='text' id='alias' />

      <label htmlFor='dateOfBirth'>Fecha de Nacimiento</label>
      <input type='date' id='dateOfBirth' />

      <label htmlFor='weight'>Peso</label>
      <input type='number' id='weight' />

      <label htmlFor='maritalStatus'>Estado Civil</label>
      <select id='maritalStatus'>
        <option value='single'>Soltero</option>
        <option value='married'>Casado</option>
        <option value='divorced'>Divorciado</option>
        <option value='widowed'>Viudo</option>
      </select>

      <button type='submit'>Enviar</button>
    </form>
  )
}
