// import { FormEventHandler } from 'react';
import styles from './styles.module.css';
import { createPlanetActions } from '@/actions/planets-actions';

// interface PlanetFormProps {
//   onSubmit: FormEventHandler<HTMLFormElement>
// }

export function PlanetForm() {
  return (
    <form action={createPlanetActions} className={styles.planetForm} >
      <div>
        <label htmlFor='name'>Nome</label>
        <input type='text' name='name' id='name' required />
      </div>

      <div>
        <label htmlFor='description'>Descrição</label>
        <textarea name='description' id='description' required></textarea>
      </div>

      <div>
        <label htmlFor='imageUrl'>Imagem (URL)</label>
        <input type='text' name='imageUrl' id='imageUrl' required />
      </div>

      <div>
        <button type='submit'>Adicionar Planeta</button>
      </div>
    </form>
  )
}