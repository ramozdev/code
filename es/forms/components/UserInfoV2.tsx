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
      <label htmlFor='email'>Correo Electrónico</label>
      <input type='email' id='email' {...register('email')} />

      <label htmlFor='name'>Nombre</label>
      <input type='text' id='name' {...register('name')} />

      <label htmlFor='alias'>Apodo</label>
      <input type='text' id='alias' {...register('alias')} />

      <label htmlFor='dateOfBirth'>Fecha de Nacimiento</label>
      <input type='date' id='dateOfBirth' {...register('dateOfBirth')} />

      <label htmlFor='weight'>Peso</label>
      <input type='number' id='weight' {...register('weight')} />

      <label htmlFor='maritalStatus'>Estado Civil</label>
      <select id='maritalStatus' {...register('maritalStatus')}>
        <option value='single'>Soltero</option>
        <option value='married'>Casado</option>
        <option value='divorced'>Divorciado</option>
        <option value='widowed'>Viudo</option>
      </select>

      <button type='submit'>Enviar</button>

      {/* Only for development. Remove for production. */}
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </form>
  )
}
