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
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        id='email'
        disabled={isSubmitting}
        {...register('email')}
      />
      <div>{errors.email?.message}</div>

      <label htmlFor='name'>Name</label>
      <input
        type='text'
        id='name'
        disabled={isSubmitting}
        {...register('name')}
      />
      <div>{errors.name?.message}</div>

      <label htmlFor='alias'>Alias</label>
      <input
        type='text'
        id='alias'
        disabled={isSubmitting}
        {...register('alias')}
      />
      <div>{errors.alias?.message}</div>

      <label htmlFor='dateOfBirth'>Date of Birth</label>
      <input
        type='date'
        id='dateOfBirth'
        disabled={isSubmitting}
        {...register('dateOfBirth')}
      />
      <div>{errors.dateOfBirth?.message}</div>

      <label htmlFor='weight'>Weight</label>
      <input
        type='number'
        id='weight'
        disabled={isSubmitting}
        {...register('weight')}
      />
      <div>{errors.weight?.message}</div>

      <label htmlFor='maritalStatus'>Marital Status</label>
      <select
        id='maritalStatus'
        disabled={isSubmitting}
        {...register('maritalStatus')}
      >
        {maritalStatusOptions}
      </select>
      <div>{errors.maritalStatus?.message}</div>

      <button type='submit' disabled={isSubmitting}>
        Submit
      </button>

      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </form>
  )
}
