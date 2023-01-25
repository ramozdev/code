import styles from '@/styles/UserInfo.module.css'

export function UserInfo() {
  return (
    <form className={styles.form}>
      <label htmlFor='email'>Email</label>
      <input type='email' id='email' />

      <label htmlFor='name'>Name</label>
      <input type='text' id='name' />

      <label htmlFor='alias'>Alias</label>
      <input type='text' id='alias' />

      <label htmlFor='dateOfBirth'>Date of Birth</label>
      <input type='date' id='dateOfBirth' />

      <label htmlFor='weight'>Weight</label>
      <input type='number' id='weight' />

      <label htmlFor='maritalStatus'>Marital Status</label>
      <select id='maritalStatus'>
        <option value='single'>Single</option>
        <option value='married'>Married</option>
        <option value='divorced'>Divorced</option>
        <option value='widowed'>Widowed</option>
      </select>

      <button type='submit'>Submit</button>
    </form>
  )
}
