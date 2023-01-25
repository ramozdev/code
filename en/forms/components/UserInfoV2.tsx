import styles from '@/styles/UserInfo.module.css'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  email: string
  name: string
  alias: string
  dateOfBirth: string
  weight: string
  maritalStatus: string
}

export function UserInfo() {
  const { register, handleSubmit, watch } = useForm<Inputs>({
    defaultValues: {
      alias: '',
      dateOfBirth: '',
      email: '',
      maritalStatus: '',
      name: '',
      weight: '',
    },
  })
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='email'>Email</label>
      <input type='email' id='email' {...register('email')} />

      <label htmlFor='name'>Name</label>
      <input type='text' id='name' {...register('name')} />

      <label htmlFor='alias'>Alias</label>
      <input type='text' id='alias' {...register('alias')} />

      <label htmlFor='dateOfBirth'>Date of Birth</label>
      <input type='date' id='dateOfBirth' {...register('dateOfBirth')} />

      <label htmlFor='weight'>Weight</label>
      <input type='number' id='weight' {...register('weight')} />

      <label htmlFor='maritalStatus'>Marital Status</label>
      <select id='maritalStatus' {...register('maritalStatus')}>
        <option value='single'>Single</option>
        <option value='married'>Married</option>
        <option value='divorced'>Divorced</option>
        <option value='widowed'>Widowed</option>
      </select>

      <button type='submit'>Submit</button>

      {/* Only for development. Remove for production. */}
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </form>
  )
}
