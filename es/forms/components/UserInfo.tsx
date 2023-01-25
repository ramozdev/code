import styles from '@/styles/UserInfo.module.css'
import { mappedMaritalStatuses, userInfoSchema } from '@/validation/userInfo'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

type Inputs = {
  email: string
  name: string
  alias: string
  dateOfBirth: string
  weight: string
  maritalStatus: string
}

export function UserInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<Inputs>({
    defaultValues: {
      alias: '',
      dateOfBirth: '',
      email: '',
      maritalStatus: '',
      name: '',
      weight: '',
    },
    resolver: zodResolver(userInfoSchema),
  })
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  const maritalStatusOptions = Object.entries(mappedMaritalStatuses).map(
    ([value, label]) => (
      <option value={value} key={value}>
        {label}
      </option>
    )
  )

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='email'>Correo Electrónico</label>
      <input
        type='email'
        id='email'
        disabled={isSubmitting}
        {...register('email')}
      />
      {errors.email?.message && <div>{errors.email?.message}</div>}

      <label htmlFor='name'>Nombre</label>
      <input
        type='text'
        id='name'
        disabled={isSubmitting}
        {...register('name')}
      />
      {errors.name?.message && <div>{errors.name?.message}</div>}

      <label htmlFor='alias'>Apodo</label>
      <input
        type='text'
        id='alias'
        disabled={isSubmitting}
        {...register('alias')}
      />
      {errors.alias?.message && <div>{errors.alias?.message}</div>}

      <label htmlFor='dateOfBirth'>Fecha de Nacimiento</label>
      <input
        type='date'
        id='dateOfBirth'
        disabled={isSubmitting}
        {...register('dateOfBirth')}
      />
      {errors.dateOfBirth?.message && <div>{errors.dateOfBirth?.message}</div>}

      <label htmlFor='weight'>Peso</label>
      <input
        type='number'
        id='weight'
        disabled={isSubmitting}
        {...register('weight')}
      />
      {errors.weight?.message && <div>{errors.weight?.message}</div>}

      <label htmlFor='maritalStatus'>Estado Civil</label>
      <select
        id='maritalStatus'
        disabled={isSubmitting}
        {...register('maritalStatus')}
      >
        {maritalStatusOptions}
      </select>
      {errors.maritalStatus?.message && (
        <div>{errors.maritalStatus?.message}</div>
      )}

      <button type='submit' disabled={isSubmitting}>
        Enviar
      </button>

      {/* Only for development. Remove for production. */}
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </form>
  )
}
